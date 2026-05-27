"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Blob 1 */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/30 blur-3xl"
        animate={{
          x: [0, 180, -100, 0],
          y: [0, 120, -80, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute bottom-[-15%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-500/30 blur-3xl"
        animate={{
          x: [0, -200, 120, 0],
          y: [0, -120, 60, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute top-[35%] left-[35%] w-[350px] h-[350px] rounded-full bg-cyan-400/20 blur-3xl"
        animate={{
          x: [0, 100, -140, 0],
          y: [0, -80, 100, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}