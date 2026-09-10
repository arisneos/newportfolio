#!/usr/bin/env python3
"""
Builds a smooth continuous-line SVG portrait from the traced silhouette —
same brutalist ink language as the case-study visuals (CaseVisual.jsx):
a few flowing bezier strokes, no fill, no photo pixels involved beyond
the hand-traced reference points.
"""

OUT = 'src/assets/portrait-lines.svg'

# Same outline traced against the source photo for the word-portrait,
# reused here as the basis for a smooth contour instead of a word mask.
OUTLINE = [
    (420, 235), (460, 190), (520, 162), (575, 157), (630, 163), (680, 180),
    (715, 205), (730, 240), (735, 280), (720, 330), (700, 375), (705, 410),
    (685, 445), (650, 480), (700, 510), (760, 555), (800, 590), (800, 800),
    (270, 800), (280, 690), (340, 635), (400, 600), (455, 560), (440, 525),
    (448, 500), (400, 452), (388, 408), (398, 352), (422, 300), (420, 235),
]

# Interior detail strokes, hand-placed against the photo: hair part lines,
# eyebrow/eye, ear, mustache/beard texture, collar.
DETAILS = [
    # hair strand flows
    [(450, 232), (470, 210), (500, 195), (540, 185)],
    [(495, 250), (520, 220), (555, 200), (600, 190)],
    [(545, 265), (575, 235), (615, 210), (660, 195)],
    [(595, 275), (630, 250), (665, 225), (700, 205)],
    [(430, 245), (445, 260), (455, 280)],
    # eyebrow
    [(432, 335), (450, 328), (470, 330), (485, 338)],
    # eye
    [(438, 350), (452, 345), (468, 348), (478, 356)],
    # nose bridge shading
    [(420, 320), (410, 345), (400, 375)],
    # ear
    [(660, 385), (675, 375), (685, 388), (682, 408), (668, 418), (658, 408), (660, 392)],
    # mustache
    [(408, 425), (425, 432), (445, 430)],
    # beard texture
    [(415, 460), (430, 475), (425, 495)],
    [(460, 470), (470, 490), (462, 508)],
    [(500, 480), (505, 500), (495, 515)],
    # collar
    [(460, 545), (490, 570), (530, 585)],
    [(650, 500), (690, 525), (730, 545)],
]


def catmull_rom_closed(points):
    n = len(points)
    d = f'M {points[0][0]},{points[0][1]} '
    for i in range(n - 1):
        p0 = points[(i - 1) % (n - 1)]
        p1 = points[i]
        p2 = points[(i + 1) % (n - 1)]
        p3 = points[(i + 2) % (n - 1)]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d += f'C {c1[0]:.1f},{c1[1]:.1f} {c2[0]:.1f},{c2[1]:.1f} {p2[0]:.1f},{p2[1]:.1f} '
    return d.strip() + ' Z'


def catmull_rom_open(points):
    n = len(points)
    if n < 3:
        return f'M {points[0][0]},{points[0][1]} L {points[-1][0]},{points[-1][1]}'
    d = f'M {points[0][0]},{points[0][1]} '
    for i in range(n - 1):
        p0 = points[max(0, i - 1)]
        p1 = points[i]
        p2 = points[i + 1]
        p3 = points[min(n - 1, i + 2)]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d += f'C {c1[0]:.1f},{c1[1]:.1f} {c2[0]:.1f},{c2[1]:.1f} {p2[0]:.1f},{p2[1]:.1f} '
    return d.strip()


outline_d = catmull_rom_closed(OUTLINE)
detail_ds = [catmull_rom_open(pts) for pts in DETAILS]

xs = [p[0] for p in OUTLINE]
ys = [p[1] for p in OUTLINE]
pad = 14
minx, maxx, miny, maxy = min(xs) - pad, max(xs) + pad, min(ys) - pad, max(ys) + pad
vb_w, vb_h = maxx - minx, maxy - miny

parts = [f'<path d="{outline_d}" fill="none" stroke="#0E1116" stroke-width="4" '
         f'stroke-linecap="round" stroke-linejoin="round" />']
for d in detail_ds:
    parts.append(f'<path d="{d}" fill="none" stroke="#0E1116" stroke-width="2.2" '
                 f'stroke-linecap="round" stroke-linejoin="round" opacity="0.75" />')

# a small signal-blue accent square, echoing the nav/hero wordmark motif
parts.append('<rect x="700" y="180" width="14" height="14" fill="#4C5FFF" />')

svg = (
    f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{minx} {miny} {vb_w} {vb_h}">'
    + ''.join(parts)
    + '</svg>'
)

with open(OUT, 'w') as f:
    f.write(svg)

print(f'written {OUT}, viewBox {minx},{miny},{vb_w},{vb_h}')
