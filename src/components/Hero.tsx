import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.png";
import logo from "@/assets/logo-barriola-new.png";

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: "grayscale(100%)"
        }} />

      <div className="absolute inset-0 bg-surface-dark/80" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-4"
      >
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          src={logo}
          alt="Barriola Constructora"
          className="h-32 md:h-48 lg:h-56 w-auto object-contain mx-auto mb-8"
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-surface-dark-foreground mb-4"
        >
          CONSTRUIMOS
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="block text-primary"
          >
            EL FUTURO
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="text-cement text-lg md:text-xl font-light max-w-xl mx-auto"
        >
          Constructora de Gualeguay, Entre Ríos — Obras viales, civiles y movimiento de suelos con compromiso y excelencia.
        </motion.p>
      </motion.div>

      <motion.a
        href="#estudio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-scroll-bounce"
      >
        <ChevronDown className="text-cement" size={32} />
      </motion.a>
    </section>
  );
};

export default Hero;