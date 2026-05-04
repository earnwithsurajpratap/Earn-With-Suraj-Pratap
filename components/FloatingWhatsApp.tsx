'use client';
import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918881386529"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Contact on WhatsApp"
    >
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-500/30"
      >
        <MessageCircle className="w-8 h-8 text-white" />
      </motion.div>
      {/* Pulse effect */}
      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:opacity-0" />
    </a>
  );
}
