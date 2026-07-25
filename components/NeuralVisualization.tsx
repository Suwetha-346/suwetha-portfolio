"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  layer: number;
};

/**
 * Signature hero visual: a slowly drifting field of "data nodes" organized
 * into loose vertical layers (echoing a neural network) with connecting
 * lines that brighten as nodes pass near one another. Pure canvas + rAF,
 * no external assets, respects prefers-reduced-motion.
 */
export default function NeuralVisualization() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let frameId = 0;
    const LAYERS = 4;
    const PER_LAYER = 7;

    function resize() {
      const parent = canvas!.parentElement;
      if (!parent) return;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildNodes();
    }

    function buildNodes() {
      nodes = [];
      for (let l = 0; l < LAYERS; l++) {
        const layerX = (width / (LAYERS - 1)) * l;
        for (let i = 0; i < PER_LAYER; i++) {
          const jitterX = (Math.random() - 0.5) * (width / LAYERS) * 0.5;
          nodes.push({
            x: Math.min(Math.max(layerX + jitterX, 12), width - 12),
            y: (height / (PER_LAYER - 1)) * i + (Math.random() - 0.5) * 20,
            vx: (Math.random() - 0.5) * 0.12,
            vy: (Math.random() - 0.5) * 0.12,
            r: l === 0 || l === LAYERS - 1 ? 2.6 : 1.8,
            layer: l,
          });
        }
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // connections between adjacent layers
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          if (Math.abs(a.layer - b.layer) !== 1) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = width / (LAYERS - 1) + 60;
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.16;
            ctx!.strokeStyle = `rgba(201, 161, 93, ${opacity})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // nodes
      nodes.forEach((n) => {
        ctx!.beginPath();
        ctx!.fillStyle =
          n.layer === 0 || n.layer === LAYERS - 1
            ? "rgba(201, 161, 93, 0.9)"
            : "rgba(245, 245, 245, 0.55)";
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fill();

        if (!prefersReducedMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.y < 8 || n.y > height - 8) n.vy *= -1;
          const bandWidth = width / (LAYERS - 1) / 2;
          const layerX = (width / (LAYERS - 1)) * n.layer;
          if (Math.abs(n.x - layerX) > bandWidth) n.vx *= -1;
        }
      });

      frameId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      className="relative w-full h-full min-h-[360px] rounded-xl3 border border-line bg-ink-soft/40 overflow-hidden"
      role="img"
      aria-label="Animated visualization of a layered neural network representing AI and data systems"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
