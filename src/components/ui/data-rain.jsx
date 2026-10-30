import { useEffect, useRef } from "react";

const DEFAULT_PALETTE = {
  calm: "#22e6ff",
  mid: "#75d6b2",
  hot: "#d7b477",
  core: "#eafcff",
};

const random = (min, max) => Math.random() * (max - min) + min;

function hexToRgb(hex) {
  let value = hex.replace("#", "");

  if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(value)) {
    return { r: 34, g: 230, b: 255 };
  }

  if (value.length === 3) {
    value = value
      .split("")
      .map((char) => char + char)
      .join("");
  }

  const number = Number.parseInt(value, 16);

  return {
    r: (number >> 16) & 255,
    g: (number >> 8) & 255,
    b: number & 255,
  };
}

function rgba(hex, alpha) {
  const { r, g, b } = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function DataRain({
  className = "",
  fullscreen = true,
  count = 1200,
  flowSpeed = 0.7,
  obstacleRadius = 45,
  autopilot = true,
  palette = {},
}) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);

  const colors = { ...DEFAULT_PALETTE, ...palette };

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!root || !canvas || !context) return;

    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let lastTime = 0;
    let elapsed = 0;
    let particles = [];
    let pointerX = -10000;
    let pointerY = -10000;
    let pointerActive = false;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const paletteColors = [colors.calm, colors.mid, colors.hot];

    const resize = () => {
      const rect = root.getBoundingClientRect();

      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);

      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const particleCount = Math.max(0, Math.min(Math.floor(count), 3000));

      particles = Array.from({ length: particleCount }, () => ({
        x: random(0, width),
        y: random(0, height),
        vx: random(-0.12, 0.12),
        vy: random(0.25, 1.2) * Math.max(0.1, flowSpeed),
        size: random(0.5, 1.8),
        alpha: random(0.25, 0.9),
        phase: random(0, Math.PI * 2),
        color: paletteColors[Math.floor(Math.random() * paletteColors.length)],
      }));
    };

    const onPointerMove = (event) => {
      const rect = root.getBoundingClientRect();

      pointerX = event.clientX - rect.left;
      pointerY = event.clientY - rect.top;
      pointerActive = true;
    };

    const onPointerLeave = () => {
      pointerActive = false;
    };

    const draw = (time) => {
      const delta = lastTime ? Math.min((time - lastTime) / 16.67, 2) : 1;

      lastTime = time;
      elapsed += delta * 0.025;

      context.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height * 0.48;
      const radius = Math.max(1, obstacleRadius);

      for (const particle of particles) {
        particle.phase += 0.025 * delta;

        particle.x += (particle.vx + Math.sin(particle.phase) * 0.15) * delta;
        particle.y += particle.vy * delta;

        if (particle.y > height + 4) {
          particle.y = -4;
          particle.x = random(0, width);
        }

        if (particle.x < -4) particle.x = width + 4;
        if (particle.x > width + 4) particle.x = -4;

        const dx = particle.x - centerX;
        const dy = particle.y - centerY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (autopilot && distance < radius && distance > 0) {
          const force = (radius - distance) / radius;

          particle.x += (dx / distance) * force * 1.5 * delta;
          particle.y += (dy / distance) * force * 1.5 * delta;
        }

        if (pointerActive) {
          const px = particle.x - pointerX;
          const py = particle.y - pointerY;
          const pointerDistance = Math.sqrt(px * px + py * py);

          if (pointerDistance < 90 && pointerDistance > 0) {
            const force = (90 - pointerDistance) / 90;

            particle.x += px * force * 0.025 * delta;
            particle.y += py * force * 0.025 * delta;
          }
        }

        const twinkle = 0.65 + Math.sin(particle.phase + elapsed) * 0.35;

        const alpha = Math.max(0.05, Math.min(1, particle.alpha * twinkle));

        context.beginPath();
        context.fillStyle = rgba(particle.color, alpha);
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();

        if (particle.size > 1.25) {
          context.beginPath();
          context.fillStyle = rgba(colors.core, alpha * 0.25);
          context.arc(
            particle.x,
            particle.y,
            particle.size * 2.2,
            0,
            Math.PI * 2,
          );
          context.fill();
        }
      }

      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(root);

    root.addEventListener("pointermove", onPointerMove);
    root.addEventListener("pointerleave", onPointerLeave);

    if (reduceMotion) {
      draw(0);
    } else {
      animationFrame = window.requestAnimationFrame(draw);
    }

    return () => {
      window.cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [
    count,
    flowSpeed,
    obstacleRadius,
    autopilot,
    colors.calm,
    colors.mid,
    colors.hot,
    colors.core,
  ]);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className={`dr-root ${
        fullscreen ? "dr-root--fullscreen" : "dr-root--contained"
      } ${className}`.trim()}
    >
      <canvas ref={canvasRef} className="dr-main" />
      <div className="dr-vignette" />
      <div className="dr-grain" />
    </div>
  );
}
