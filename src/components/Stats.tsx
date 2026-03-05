import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 150, suffix: "+", label: "Proyectos entregados" },
  { value: 45000, suffix: " m²", label: "Metros cuadrados construidos" },
  { value: 120, suffix: "+", label: "Clientes satisfechos" },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        ref.current = requestAnimationFrame(animate);
      }
    };
    ref.current = requestAnimationFrame(animate);
    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [target, duration, start]);

  return count;
}

const StatItem = ({
  value,
  suffix,
  label,
  delay,
}: {
  value: number;
  suffix: string;
  label: string;
  delay: number;
}) => {
  const [inView, setInView] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2200, inView);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (elRef.current) observer.observe(elRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={elRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="text-center"
    >
      <span className="text-5xl md:text-6xl font-extrabold text-primary tabular-nums">
        {count.toLocaleString("es-AR")}
        {suffix}
      </span>
      <p className="text-surface-dark-foreground text-sm tracking-widest uppercase mt-3 font-medium">
        {label}
      </p>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-surface-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
