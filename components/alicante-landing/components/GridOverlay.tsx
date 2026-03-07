/**
 * Grid overlay background effect
 * Follows Single Responsibility - purely visual component
 */
export const GridOverlay = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04]">
    <div
      className="w-full h-full"
      style={{
        backgroundImage: `
          linear-gradient(hsl(194 100% 50%) 1px, transparent 1px),
          linear-gradient(90deg, hsl(194 100% 50%) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    />
  </div>
);
