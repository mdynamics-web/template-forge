"use client";

import { motion } from "framer-motion";

export const FloatingDashboard = () => (
  <motion.div
    initial={{ opacity: 0, y: 40, rotateX: 15 }}
    animate={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 1, delay: 0.8 }}
    className="relative mx-auto mt-12 max-w-lg"
    style={{ perspective: "1000px" }}
  >
    <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-4 shadow-2xl">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-secondary/40" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400/40" />
        <div className="flex-1 bg-primary-foreground/5 rounded-full h-5 ml-2" />
      </div>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {[
          { label: "Tráfico", val: "+247%", color: "text-green-400" },
          { label: "Leads", val: "+180%", color: "text-secondary" },
          { label: "Conversión", val: "8.4%", color: "text-accent" },
        ].map((m) => (
          <div
            key={m.label}
            className="bg-primary-foreground/5 rounded-lg p-3 text-center"
          >
            <div className={`font-bold text-sm ${m.color}`}>{m.val}</div>
            <div className="text-[10px] text-primary-foreground/40">
              {m.label}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <div className="flex-1 bg-primary-foreground/5 rounded-lg h-16 flex items-end p-2 gap-0.5">
          {[35, 50, 40, 70, 60, 85, 75, 90].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 bg-secondary/50 rounded-t-sm"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
            />
          ))}
        </div>
        <div className="flex-1 bg-primary-foreground/5 rounded-lg h-16 flex items-center justify-center">
          <motion.div
            className="w-10 h-10 rounded-full border-4 border-secondary/30"
            style={{ borderTopColor: "hsl(194 100% 50%)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  </motion.div>
);
