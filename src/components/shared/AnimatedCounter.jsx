import { useEffect, useState } from 'react';

export default function AnimatedCounter({ value, active }) {
  const [current, setCurrent] = useState(0);
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const parsed = String(value).match(/^([^\d]*)([\d,]+)(.*)$/);
  const prefix = parsed?.[1] || '';
  const target = Number((parsed?.[2] || '0').replaceAll(',', ''));
  const suffix = parsed?.[3] || '';
  useEffect(() => {
    if (!active || reducedMotion) return undefined;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / 1800, 1);
      setCurrent(Math.round(target * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, reducedMotion, target]);
  const displayed = active && reducedMotion ? target : current;
  return `${prefix}${displayed.toLocaleString('en-US')}${suffix}`;
}
