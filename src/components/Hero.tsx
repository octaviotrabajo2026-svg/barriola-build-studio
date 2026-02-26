import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

const Hero = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image - B&W with dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
          filter: "grayscale(100%)",
        }}
      />
      <div className="absolute inset-0 bg-surface-dark/80" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-surface-dark-foreground mb-4">
          CONSTRUIMOS
          <span className="block text-primary">EL FUTURO</span>
        </h1>
        <p className="text-cement text-lg md:text-xl font-light max-w-xl mx-auto">
          Constructora de Gualeguaychú, Entre Ríos — Obras viales, civiles y movimiento de suelos con compromiso y excelencia.
        </p>
      </div>

      {/* Scroll indicator */}
      <a
        href="#estudio"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-scroll-bounce"
      >
        <ChevronDown className="text-cement" size={32} />
      </a>
    </section>
  );
};

export default Hero;
