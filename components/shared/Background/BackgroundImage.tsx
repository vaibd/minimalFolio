"use client";

import { useEffect, useRef } from "react";

const BackgroundAura = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    let animationFrame: number;
    let offset = 0;

    const animate = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

      // Different shades of teal using fixed hue (185)
      gradient.addColorStop(
        0,
        `hsl(185, ${70 + Math.sin(offset) * 20}%, ${45 + Math.sin(offset) * 10}%)`
      );
      gradient.addColorStop(
        0.5,
        `hsl(185, ${80 + Math.cos(offset) * 15}%, ${30 + Math.cos(offset) * 10}%)`
      );
      gradient.addColorStop(
        1,
        `hsl(185, ${75 + Math.sin(offset) * 15}%, ${60 + Math.sin(offset) * 10}%)`
      );

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      offset += 0.007;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 dark:blur-[100px] opacity-40"
    />
  );
};

export default BackgroundAura;
