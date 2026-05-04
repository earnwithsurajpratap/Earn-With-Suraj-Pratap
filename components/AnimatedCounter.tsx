'use client';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

export default function AnimatedCounter({ value, suffix = "+" }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      let startTime: number | null = null;

      const animate = (time: number) => {
        if (!startTime) startTime = time;
        const progress = time - startTime;
        const current = Math.min(Math.floor((progress / duration) * value), value);
        setCount(current);
        if (progress < duration) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}
