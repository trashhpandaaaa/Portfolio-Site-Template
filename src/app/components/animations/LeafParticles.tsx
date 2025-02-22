'use client'
import { useEffect, useRef } from 'react';

interface Leaf {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
}

export default function LeafParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas exists
    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Ensure context exists

    // Function to resize the canvas dynamically
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    // Create leaf particles
    const leaves: Leaf[] = Array.from({ length: 20 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 5 + Math.random() * 10,
      speedX: Math.random() * 2 - 1,
      speedY: -1 - Math.random(),
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.1
    }));

    // Function to draw a leaf shape
    function drawLeaf(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, rotation: number) {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.quadraticCurveTo(size, -size, size, 0);
      ctx.quadraticCurveTo(size, size, 0, size);
      ctx.quadraticCurveTo(-size, size, -size, 0);
      ctx.quadraticCurveTo(-size, -size, 0, -size);
      
      ctx.fillStyle = '#8aa17e';
      ctx.fill();
      ctx.restore();
    }

    let animationId: number;

    // Animation loop
    function animate() {
      if (!canvas || !ctx) return; // Safety check for TypeScript

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      leaves.forEach(leaf => {
        leaf.x += leaf.speedX;
        leaf.y += leaf.speedY;
        leaf.rotation += leaf.rotationSpeed;

        // Reset leaf when it moves out of the screen
        if (leaf.y < -leaf.size) {
          leaf.y = canvas.height + leaf.size;
          leaf.x = Math.random() * canvas.width;
        }

        drawLeaf(ctx, leaf.x, leaf.y, leaf.size, leaf.rotation);
      });

      animationId = requestAnimationFrame(animate);
    }

    animate();

    // Resize event listener
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
