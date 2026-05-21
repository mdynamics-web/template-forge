"use client";

import { Classic } from "@theme-toggles/react";
import type { ComponentType } from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

type ThemeToggleProps = {
  className?: string;
  onToggle?: () => void;
};

const ClassicToggle = Classic as unknown as ComponentType<{
  duration?: number;
  toggled?: boolean;
  toggle?: () => void;
  className?: string;
  "aria-label"?: string;
}>;

const toggleBaseClass =
  "h-10 w-10 rounded-md border border-primary-foreground/20 bg-primary-foreground/5 p-2 text-primary-foreground transition-colors hover:bg-primary-foreground/10";

export default function ThemeToggle({ className, onToggle }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleToggle = () => {
    toggleTheme();
    onToggle?.();
  };

  // Render a same-size placeholder during SSR and first hydration pass
  // to avoid mismatch between server (always "light") and client (reads localStorage)
  if (!mounted) {
    return <div className={cn(toggleBaseClass, className)} aria-hidden />;
  }

  const isDarkMode = theme === "dark";

  return (
    <ClassicToggle
      duration={750}
      toggled={isDarkMode}
      toggle={handleToggle}
      aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className={cn(toggleBaseClass, className)}
    />
  );
}
