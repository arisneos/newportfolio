import { useEffect, useRef } from 'react';

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

// Fractions of viewport height, measured in scrollY pixels scrolled from
// page load (not absolute position) — so the sequence always starts from
// a clean, fully-visible state regardless of the hero's actual height.
const TITLE_FADE_END = 0.18; // huge title finishes fading out
const REST_FADE_START = 0.24; // rest of the subtitle starts fading
const REST_FADE_END = 0.42; // ...and is gone — this is also transit-start
const BLUE_AT = 0.32; // "transformations" turns signal-blue
const LANDING_FRAC = 0.4; // viewport height fraction the word docks at

// One word, three handoffs: it lives inline in the hero, then (once the
// rest of the sentence has faded) becomes a fixed-position clone that
// travels — scrubbed directly by scroll position, not a timed animation —
// to where it docks inline inside the Work heading, at which point the
// clone hides and the real heading word takes over with no visible jump.
export default function useTransformHandoff() {
  const heroWordRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroFadeRef = useRef(null);
  const workTargetRef = useRef(null);
  const workRestBeforeRef = useRef(null);
  const workRestAfterRef = useRef(null);
  const workRevealRef = useRef(null);
  const cloneRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const rampUp = (value, start, end) => clamp((value - start) / Math.max(1, end - start), 0, 1);

    const update = () => {
      ticking = false;
      const wordEl = heroWordRef.current;
      const titleEl = heroTitleRef.current;
      const fadeEl = heroFadeRef.current;
      const targetEl = workTargetRef.current;
      const restBeforeEl = workRestBeforeRef.current;
      const restAfterEl = workRestAfterRef.current;
      const revealEl = workRevealRef.current;
      const cloneEl = cloneRef.current;
      if (!wordEl || !titleEl || !fadeEl || !targetEl || !restBeforeEl || !restAfterEl || !revealEl || !cloneEl) {
        return;
      }

      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      const scrollX = window.scrollX || 0;

      // Stages 1–3, keyed to pixels scrolled so they always start clean.
      const titleT = rampUp(scrollY, 0, vh * TITLE_FADE_END);
      titleEl.style.opacity = String(1 - titleT);
      titleEl.style.transform = `translateY(${-16 * titleT}px)`;

      const isBlue = scrollY >= vh * BLUE_AT;
      wordEl.style.color = isBlue ? 'var(--signal)' : 'var(--paper-mid)';

      const restT = rampUp(scrollY, vh * REST_FADE_START, vh * REST_FADE_END);
      fadeEl.style.opacity = String(1 - restT);
      fadeEl.style.transform = `translateY(${-12 * restT}px)`;

      // Transit: the word's own document position never changes (it only
      // fades/recolors in place), so `wordDocY` is stable across frames —
      // safe to read live every tick instead of caching on mount/resize.
      const wordRect = wordEl.getBoundingClientRect();
      const wordDocY = wordRect.top + scrollY;
      const wordDocX = wordRect.left + scrollX;

      const transitStartY = vh * REST_FADE_END;

      const targetRect = targetEl.getBoundingClientRect();
      const targetDocY = targetRect.top + scrollY;
      const targetDocX = targetRect.left + scrollX;
      const transitEndY = targetDocY - vh * LANDING_FRAC;

      const denom = Math.max(1, transitEndY - transitStartY);
      const t = clamp((scrollY - transitStartY) / denom, 0, 1);
      const docked = scrollY >= transitEndY;
      const inTransit = scrollY >= transitStartY && !docked;

      if (docked) {
        wordEl.style.opacity = '0';
        cloneEl.style.opacity = '0';
        targetEl.style.opacity = '1';
      } else if (inTransit) {
        wordEl.style.opacity = '0';
        targetEl.style.opacity = '0';
        cloneEl.style.opacity = '1';

        const startViewportY = wordDocY - transitStartY;
        const endViewportY = targetDocY - transitEndY;
        const curY = startViewportY + (endViewportY - startViewportY) * t;
        const curX = wordDocX + (targetDocX - wordDocX) * t;

        const sourceSize = parseFloat(getComputedStyle(wordEl).fontSize) || 30;
        const targetSize = parseFloat(getComputedStyle(targetEl).fontSize) || 40;
        const curSize = sourceSize + (targetSize - sourceSize) * t;

        cloneEl.style.transform = `translate(${curX}px, ${curY}px)`;
        cloneEl.style.fontSize = `${curSize}px`;
      } else {
        wordEl.style.opacity = '1';
        cloneEl.style.opacity = '0';
        targetEl.style.opacity = '0';
      }

      restBeforeEl.style.opacity = docked ? '1' : '0';
      restBeforeEl.style.transform = docked ? 'translateY(0)' : 'translateY(10px)';
      restAfterEl.style.opacity = docked ? '1' : '0';
      restAfterEl.style.transform = docked ? 'translateY(0)' : 'translateY(10px)';
      revealEl.style.opacity = docked ? '1' : '0';
      revealEl.style.transform = docked ? 'translateY(0)' : 'translateY(16px)';
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return {
    heroWordRef,
    heroTitleRef,
    heroFadeRef,
    workTargetRef,
    workRestBeforeRef,
    workRestAfterRef,
    workRevealRef,
    cloneRef,
  };
}
