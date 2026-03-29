import React, { useRef, useEffect, useState, useCallback } from "react";

export interface CircleConfig {
  colors: string[];
  radiusRatio: number;
  deformationRatio: number;
  opacity?: number;
  duration?: number;
  hollow?: boolean;
  borderWidth?: number;
}

interface Point {
  x: number;
  y: number;
}

const TWO_PI = 2 * Math.PI;

const midPoint = (p1: Point, p2: Point): Point => ({
  x: (p1.x + p2.x) / 2,
  y: (p1.y + p2.y) / 2,
});

export default function AIPromptCircle({
  circles,
  size,
}: {
  circles: CircleConfig[];
  size: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRefs = useRef<(SVGSVGElement | null)[]>([]);
  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const rafRefs = useRef<number[]>([]);
  const lastTimeRefs = useRef<number[]>([]);
  const phaseRefs = useRef<number[][]>([]);

  const [isVisible, setIsVisible] = useState(false);

  const animateCircle = useCallback(
    (index: number) => {
      const circleConfig = circles[index];
      const pathElement = pathRefs.current[index];
      if (!pathElement || !circleConfig) return;

      const cx = size / 2;
      const cy = size / 2;
      const { radiusRatio, deformationRatio, duration = 3000 } = circleConfig;

      if (!phaseRefs.current[index]) {
        phaseRefs.current[index] = Array(8)
          .fill(0)
          .map(() => Math.random() * TWO_PI);
      }
      const phases = phaseRefs.current[index];

      const animate = (now: DOMHighResTimeStamp) => {
        if (!lastTimeRefs.current[index]) lastTimeRefs.current[index] = now;
        const deltaTime = (now - lastTimeRefs.current[index]) / 1000;
        lastTimeRefs.current[index] = now;

        const phaseStep = (TWO_PI / (duration / 1000)) * deltaTime;

        for (let i = 0; i < 8; i++) {
          phases[i] += phaseStep;
        }

        const points: Point[] = [];
        for (let i = 0; i < 8; i++) {
          const angle = (i * TWO_PI) / 8;
          const deform = 1 + deformationRatio * Math.sin(phases[i] * 2 + i);
          const r = (size / 2) * radiusRatio * deform;
          points.push({
            x: cx + r * Math.cos(angle),
            y: cy + r * Math.sin(angle),
          });
        }

        let d = `M ${midPoint(points[7], points[0]).x},${midPoint(points[7], points[0]).y}`;
        for (let i = 0; i < 8; i++) {
          d += ` Q ${points[i].x},${points[i].y} ${midPoint(points[i], points[(i + 1) % 8]).x},${midPoint(points[i], points[(i + 1) % 8]).y}`;
        }
        d += " Z";

        pathElement.setAttribute("d", d);
        rafRefs.current[index] = requestAnimationFrame(animate);
      };

      rafRefs.current[index] = requestAnimationFrame(animate);
    },
    [circles, size],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      circles.forEach((_, index) => animateCircle(index));
    } else {
      rafRefs.current.forEach(cancelAnimationFrame);
    }
    return () => {
      rafRefs.current.forEach(cancelAnimationFrame);
    };
  }, [isVisible, animateCircle, circles]);

  return (
    <div
      ref={containerRef}
      style={{ width: size, height: size, position: "relative" }}
    >
      {circles.map((circle, index) => (
        <svg
          key={index}
          width={size}
          height={size}
          style={{
            position: "absolute",
            inset: 0,
            opacity: circle.opacity ?? 1,
          }}
          viewBox={`0 0 ${size} ${size}`}
        >
          <defs>
            <linearGradient
              id={`grad-${index}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              {circle.colors.map((color, i) => (
                <stop
                  key={i}
                  offset={`${(i / (circle.colors.length - 1)) * 100}%`}
                  stopColor={color}
                />
              ))}
            </linearGradient>
          </defs>
          <path
            ref={(el) => (pathRefs.current[index] = el)}
            fill={`url(#grad-${index})`}
          />
        </svg>
      ))}
    </div>
  );
}
