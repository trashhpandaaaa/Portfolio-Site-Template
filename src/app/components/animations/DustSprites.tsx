// src/app/components/animations/DustSprites.tsx
'use client'
import { useEffect, useRef } from 'react';

interface Sprite {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  angle: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}

export default function DustSprites() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();

    class DustSprite implements Sprite {
      x: number;
      y: number;
      size: number;
      speed: number;
      opacity: number;
      angle: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 0.5 + 0.1;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.angle = Math.random() * Math.PI * 2;
      }

      update() {
        this.y -= this.speed;
        this.x += Math.sin(this.angle) * 0.2;
        this.angle += 0.01;

        if (this.y < 0) {
          this.y = canvas.height;
          this.x = Math.random() * canvas.width;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const sprites: Sprite[] = Array.from(
      { length: 50 }, 
      () => new DustSprite()
    );

    let animationId: number;

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      sprites.forEach(sprite => {
        sprite.update();
        sprite.draw(ctx);
      });
      animationId = requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      aria-hidden="true"
    />
  );
}
