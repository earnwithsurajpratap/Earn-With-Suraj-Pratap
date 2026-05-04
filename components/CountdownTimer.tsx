'use client';
import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 5 * 60;
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex flex-col items-center">
      <p className="text-white font-semibold text-sm mb-2 uppercase tracking-wider">Limited Time Access</p>
      <div className="flex items-center justify-center space-x-2 text-white font-bold text-xl md:text-2xl display-font">
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 min-w-[3rem] text-center border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          00
        </div>
        <span className="animate-pulse">:</span>
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 min-w-[3rem] text-center border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          {minutes.toString().padStart(2, '0')}
        </div>
        <span className="animate-pulse">:</span>
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-3 min-w-[3rem] text-center border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)] text-yellow-300">
          {seconds.toString().padStart(2, '0')}
        </div>
      </div>
    </div>
  );
}
