"use client";

import { Classic } from "@theme-toggles/react";
import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/ThemeProvider";

type ThemeToggleProps = {
  className?: string;
};

const ClassicToggle = Classic as unknown as ComponentType<{
  duration?: number;
  toggled?: boolean;
  toggle?: () => void;
  className?: string;
  "aria-label"?: string;
}>;

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <ClassicToggle
      duration={750}
      toggled={isDarkMode}
      toggle={toggleTheme}
      aria-label={isDarkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className={cn(
        "h-10 w-10 rounded-md border border-primary-foreground/20 bg-primary-foreground/5 p-2 text-primary-foreground transition-colors hover:bg-primary-foreground/10",
        className
      )}
    />
  );
}
