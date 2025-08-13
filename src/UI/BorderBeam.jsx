// BorderBeam.jsx
import { motion } from "framer-motion";

export const BorderBeam = ({
  colorFrom = "#7400ff",
  colorTo = "#9b41ff",
  duration = 2,
  glowIntensity = 8,
  children,
}) => {
  const gradient = `linear-gradient(90deg, ${colorFrom}, ${colorTo}, ${colorFrom})`;
  const glow = glowIntensity > 0 ? `0 0 ${glowIntensity}px ${colorFrom}` : "none";

  return (
    <div className="relative w-full h-full rounded-xl">
      {/* Top border */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 rounded-t-xl"
        style={{ background: gradient, boxShadow: glow, backgroundSize: "200% 100%" }}
        animate={{ backgroundPosition: ["0% 0%", "200% 0%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      />
      {/* Right border */}
      <motion.div
        className="absolute top-0 right-0 w-1 h-full rounded-r-xl"
        style={{ background: gradient, boxShadow: glow, backgroundSize: "100% 200%" }}
        animate={{ backgroundPosition: ["0% 0%", "0% 200%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      />
      {/* Bottom border */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 rounded-b-xl"
        style={{ background: gradient, boxShadow: glow, backgroundSize: "200% 100%" }}
        animate={{ backgroundPosition: ["200% 0%", "0% 0%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      />
      {/* Left border */}
      <motion.div
        className="absolute top-0 left-0 w-1 h-full rounded-l-xl"
        style={{ background: gradient, boxShadow: glow, backgroundSize: "100% 200%" }}
        animate={{ backgroundPosition: ["0% 200%", "0% 0%"] }}
        transition={{ repeat: Infinity, duration, ease: "linear" }}
      />

      {/* Card content */}
      <div className="relative z-10 w-full h-full rounded-xl overflow-hidden">{children}</div>
    </div>
  );
};
