import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
}

const AnimatedCounter = ({ value, suffix = "" }: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (!isInView) return;

    // Try to parse numeric part
    const numMatch = value.match(/^(\d+)/);
    if (!numMatch) {
      setDisplay(value);
      return;
    }

    const target = parseInt(numMatch[1], 10);
    const rest = value.slice(numMatch[1].length); // e.g. "/7" or "+"
    const duration = 1200;
    const start = Date.now();

    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplay(`${current}${rest}`);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <motion.span
      ref={ref}
      className="font-display text-4xl md:text-5xl font-bold text-primary"
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {display}{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
