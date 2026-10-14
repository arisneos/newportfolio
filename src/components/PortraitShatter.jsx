import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import portraitSrc from '../assets/portrait-source.jpg';

const GRID = 8; // 8x8 pieces
const ACCENTS = ['#4C5FFF', '#FF5A3C', '#16C79A']; // signal / delta-before / delta-after
const SHAPES = ['rect', 'rect', 'rect', 'circle', 'triangle']; // weighted toward rect

// Remaps a geometry's default 0..1 UVs onto the [u0,v0]-[u1,v1] sub-rect
// of the source texture, so each piece samples the right slice of the
// portrait no matter what primitive shape it is.
function remapUV(geometry, u0, v0, u1, v1) {
  const uvAttr = geometry.getAttribute('uv');
  for (let i = 0; i < uvAttr.count; i++) {
    const u = uvAttr.getX(i);
    const v = uvAttr.getY(i);
    uvAttr.setXY(i, u0 + u * (u1 - u0), v0 + v * (v1 - v0));
  }
  uvAttr.needsUpdate = true;
}

function triangleGeometry(size, u0, v0, u1, v1, flip) {
  const geo = new THREE.BufferGeometry();
  const h = size / 2;
  const positions = flip
    ? [-h, -h, 0, h, -h, 0, h, h, 0]
    : [-h, -h, 0, h, h, 0, -h, h, 0];
  const uvs = flip ? [0, 0, 1, 0, 1, 1] : [0, 0, 1, 1, 0, 1];
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex([0, 1, 2]);
  geo.computeVertexNormals();
  remapUV(geo, u0, v0, u1, v1);
  return geo;
}

function buildPieces(cell) {
  const pieces = [];
  const half = (GRID * cell) / 2;
  let seed = 1337;
  const rand = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  for (let row = 0; row < GRID; row++) {
    for (let col = 0; col < GRID; col++) {
      const x = col * cell - half + cell / 2;
      const y = half - row * cell - cell / 2;
      const u0 = col / GRID;
      const u1 = (col + 1) / GRID;
      // Texture V is flipped relative to row order (row 0 = top = v near 1).
      const v0 = 1 - (row + 1) / GRID;
      const v1 = 1 - row / GRID;

      const shapeType = SHAPES[Math.floor(rand() * SHAPES.length)];
      let geometry;
      if (shapeType === 'circle') {
        geometry = new THREE.CircleGeometry(cell / 2, 24);
        remapUV(geometry, u0, v0, u1, v1);
      } else if (shapeType === 'triangle') {
        geometry = triangleGeometry(cell, u0, v0, u1, v1, rand() > 0.5);
      } else {
        geometry = new THREE.PlaneGeometry(cell, cell);
        remapUV(geometry, u0, v0, u1, v1);
      }

      // A thin margin between pieces reads as mortar/grid lines once the
      // portrait shatters, reinforcing the Bauhaus-grid feel at rest too.
      const distFromCenter = Math.hypot(x, y) / half;
      pieces.push({
        geometry,
        origin: new THREE.Vector3(x, y, 0),
        angle: rand() * Math.PI * 2,
        radiusFactor: 0.6 + rand() * 0.9,
        rotSign: rand() > 0.5 ? 1 : -1,
        delayFactor: distFromCenter,
        accent: ACCENTS[Math.floor(rand() * ACCENTS.length)],
      });
    }
  }
  return pieces;
}

function AccentBacking({ pieces, cell }) {
  // Static color tiles, one per grid cell, that never move — revealed in
  // the gaps as the photo pieces scatter apart on hover.
  return pieces.map((p, i) => (
    <mesh key={i} position={[p.origin.x, p.origin.y, -0.02]}>
      <planeGeometry args={[cell * 0.92, cell * 0.92]} />
      <meshBasicMaterial color={p.accent} transparent opacity={0.85} />
    </mesh>
  ));
}

function Shards({ cell, hoverRef }) {
  const texture = useLoader(THREE.TextureLoader, portraitSrc);
  texture.colorSpace = THREE.SRGBColorSpace;

  const pieces = useMemo(() => buildPieces(cell), [cell]);
  const meshRefs = useRef([]);
  const { viewport } = useThree();

  useFrame((state, delta) => {
    const hover = hoverRef.current.active;
    const mouse = hoverRef.current.point;
    const maxPush = Math.min(viewport.width, viewport.height) * 0.16;
    const influence = Math.min(viewport.width, viewport.height) * 0.55;

    pieces.forEach((p, i) => {
      const mesh = meshRefs.current[i];
      if (!mesh) return;

      let targetX = p.origin.x;
      let targetY = p.origin.y;
      let targetZ = 0;
      let targetRot = 0;

      if (hover) {
        const dx = p.origin.x - mouse.x;
        const dy = p.origin.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        const falloff = Math.max(0, 1 - dist / influence);
        const push = falloff * maxPush * p.radiusFactor;
        const nx = dist > 0.0001 ? dx / dist : Math.cos(p.angle);
        const ny = dist > 0.0001 ? dy / dist : Math.sin(p.angle);
        targetX += nx * push;
        targetY += ny * push;
        targetZ = falloff * 0.6;
        targetRot = p.rotSign * falloff * 0.9;
      }

      const damp = 1 - Math.pow(0.001, delta * 2.2);
      mesh.position.x += (targetX - mesh.position.x) * damp;
      mesh.position.y += (targetY - mesh.position.y) * damp;
      mesh.position.z += (targetZ - mesh.position.z) * damp;
      mesh.rotation.z += (targetRot - mesh.rotation.z) * damp;
    });
  });

  return (
    <>
      <AccentBacking pieces={pieces} cell={cell} />
      {pieces.map((p, i) => (
        <mesh
          key={i}
          ref={(el) => (meshRefs.current[i] = el)}
          position={p.origin}
          geometry={p.geometry}
        >
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
      ))}
    </>
  );
}

function PointerCatcher({ hoverRef, size }) {
  return (
    <mesh
      position={[0, 0, 0.5]}
      onPointerMove={(e) => {
        hoverRef.current.active = true;
        hoverRef.current.point.x = e.point.x;
        hoverRef.current.point.y = e.point.y;
      }}
      onPointerOut={() => {
        hoverRef.current.active = false;
      }}
    >
      <planeGeometry args={[size, size]} />
      <meshBasicMaterial visible={false} />
    </mesh>
  );
}

export default function PortraitShatter() {
  const hoverRef = useRef({ active: false, point: new THREE.Vector3(0, 0, 0) });
  const size = 6.4; // world units spanned by the grid
  const cell = size / GRID;

  return (
    <div className="portrait-shatter" aria-hidden="true">
      <Canvas
        orthographic
        camera={{ zoom: 60, position: [0, 0, 10] }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <PointerCatcher hoverRef={hoverRef} size={size * 1.4} />
        <React.Suspense fallback={null}>
          <Shards cell={cell} hoverRef={hoverRef} />
        </React.Suspense>
      </Canvas>
    </div>
  );
}
