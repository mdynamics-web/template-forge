import { cn } from "@/lib/utils";

type BrandLoaderSize = "sm" | "md" | "lg";

interface BrandLoaderProps {
  className?: string;
  size?: BrandLoaderSize;
  label?: string;
}

const sizeStyles: Record<BrandLoaderSize, string> = {
  sm: "scale-[0.34]",
  md: "scale-[0.5]",
  lg: "scale-[0.75]",
};

export default function BrandLoader({
  className,
  size = "md",
  label = "Loading",
}: BrandLoaderProps) {
  return (
    <div
      className={cn("brand-loader", sizeStyles[size], className)}
      role="status"
      aria-label={label}
      aria-live="polite"
    >
      <div className="brand-loader__bar brand-loader__bar--a">
        <div className="brand-loader__bar brand-loader__bar--b">
          <div className="brand-loader__bubble brand-loader__bubble--1" />
          <div className="brand-loader__bubble brand-loader__bubble--2" />
          <div className="brand-loader__bubble brand-loader__bubble--3" />
          <div className="brand-loader__bubble brand-loader__bubble--4" />
        </div>
      </div>
    </div>
  );
}
