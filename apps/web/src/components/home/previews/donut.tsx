import { cn } from "@scyquantix/ui";

/** Rosca ilustrativa; os segmentos não representam valores. */
export function Donut({ className }: { className?: string }) {
  return (
    <span
      className={cn("relative shrink-0 rounded-full", className)}
      style={{ background: "conic-gradient(#00c2d4 0 62%, #0b2d4a 62% 85%, #e5eaf0 85%)" }}
    >
      <span className="absolute inset-[22%] rounded-full bg-white" />
    </span>
  );
}
