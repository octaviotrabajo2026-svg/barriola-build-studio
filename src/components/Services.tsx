import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Shovel, Route, Mountain, Droplets, Truck, Home } from "lucide-react";

const services = [
  {
    icon: Shovel,
    title: "Movimiento de Suelos",
    subtitle: "Excavación y Nivelación",
    description:
      "Excavaciones, rellenos, compactación y nivelación de terrenos con maquinaria pesada de última generación.",
    fullDescription:
      "Realizamos todo tipo de movimiento de suelos con maquinaria de última generación. Nuestros servicios incluyen excavaciones, rellenos, compactación y nivelación de terrenos para proyectos residenciales, comerciales e industriales. Contamos con operadores altamente capacitados y equipos modernos que garantizan precisión y eficiencia en cada proyecto.",
    gallery: ["/placeholder.svg"],
  },
  {
    icon: Route,
    title: "Obras Viales",
    subtitle: "Infraestructura Vial",
    description:
      "Construcción y mantenimiento de caminos, cordones cuneta, badenes y pavimentación urbana y rural.",
    fullDescription:
      "Ejecutamos obras viales de alta calidad, incluyendo construcción y mantenimiento de caminos rurales y urbanos, cordones cuneta, badenes y pavimentación. Nuestro equipo tiene amplia experiencia en obras de infraestructura vial que cumplen con los más altos estándares de calidad y durabilidad.",
    gallery: ["/placeholder.svg"],
  },
  {
    icon: Mountain,
    title: "Nivelación de Terrenos",
    subtitle: "Preparación de Suelos",
    description:
      "Limpieza, desmonte y preparación de terrenos para uso agrícola, industrial o residencial.",
    fullDescription:
      "Ofrecemos servicios integrales de nivelación de terrenos que incluyen limpieza, desmonte y preparación para diversos usos: agrícola, industrial o residencial. Utilizamos tecnología de punta para lograr la nivelación precisa que cada proyecto requiere, optimizando el drenaje y la utilización del suelo.",
    gallery: ["/placeholder.svg"],
  },
  {
    icon: Droplets,
    title: "Alcantarillas",
    subtitle: "Obras Hidráulicas",
    description:
      "Venta, transporte y colocación de alcantarillas de hormigón para obras hidráulicas y viales.",
    fullDescription:
      "Proveemos soluciones completas en alcantarillas de hormigón: venta, transporte y colocación profesional. Nuestras alcantarillas cumplen con todas las normativas vigentes y son ideales para obras hidráulicas, viales y de drenaje. Garantizamos una instalación correcta que asegura la durabilidad y funcionalidad de la obra.",
    gallery: ["/placeholder.svg"],
  },
  {
    icon: Truck,
    title: "Venta de Suelos y Áridos",
    subtitle: "Materiales de Construcción",
    description:
      "Provisión de tosca, arena, piedra y otros materiales con entrega en obra en toda la región.",
    fullDescription:
      "Comercializamos una amplia variedad de suelos y áridos: tosca, arena, piedra, ripio y otros materiales esenciales para la construcción. Contamos con flota propia de transporte para garantizar la entrega puntual en obra en toda la región. Materiales de primera calidad con certificación de origen.",
    gallery: ["/placeholder.svg"],
  },
  {
    icon: Home,
    title: "Sistematización del Campo",
    subtitle: "Ingeniería Agropecuaria",
    description:
      "Diseño y ejecución de sistematización de campos para optimizar el drenaje y la producción agropecuaria.",
    fullDescription:
      "Diseñamos y ejecutamos proyectos de sistematización de campos para optimizar el drenaje, prevenir inundaciones y maximizar la producción agropecuaria. Nuestro equipo de ingeniería trabaja con relevamientos topográficos precisos para desarrollar soluciones a medida que mejoran la productividad de cada campo.",
    gallery: ["/placeholder.svg"],
  },
];

const Services = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const openModal = (i: number) => {
    setSelected(i);
    setSlideIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelected(null);
    document.body.style.overflow = "";
  };

  const service = selected !== null ? services[selected] : null;

  return (
    <section id="servicios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 text-center"
        >
          Servicios
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14"
        >
          Lo que hacemos
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden cursor-pointer border border-border bg-pearl"
              onClick={() => openModal(i)}
            >
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] bg-surface-dark flex items-center justify-center overflow-hidden">
                {s.gallery[0] !== "/placeholder.svg" ? (
                  <img
                    src={s.gallery[0]}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-3 text-muted-foreground">
                    <s.icon size={48} className="text-primary/40" />
                    <span className="text-xs tracking-widest uppercase">Imagen próximamente</span>
                  </div>
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-surface-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                  <span className="border border-primary text-primary px-4 py-2 text-xs font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors">
                    Ver detalles
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="w-10 h-10 bg-surface-dark flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <s.icon
                    className="text-primary group-hover:text-primary-foreground transition-colors duration-300"
                    size={20}
                  />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {service && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-surface-dark/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="relative bg-background border border-border max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-surface-dark/70 text-surface-dark-foreground p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>

              <div className="relative">
                {service.gallery[0] !== "/placeholder.svg" ? (
                  <img
                    src={service.gallery[slideIndex]}
                    alt={`${service.title} - ${slideIndex + 1}`}
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <div className="w-full aspect-video bg-surface-dark flex flex-col items-center justify-center gap-3">
                    <service.icon size={64} className="text-primary/40" />
                    <span className="text-muted-foreground text-sm tracking-widest uppercase">Imagen próximamente</span>
                  </div>
                )}
                {service.gallery.length > 1 && service.gallery[0] !== "/placeholder.svg" && (
                  <>
                    <button
                      onClick={() => setSlideIndex((slideIndex - 1 + service.gallery.length) % service.gallery.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-surface-dark/70 text-surface-dark-foreground p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Anterior"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setSlideIndex((slideIndex + 1) % service.gallery.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-surface-dark/70 text-surface-dark-foreground p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Siguiente"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                      {service.gallery.map((_, di) => (
                        <button
                          key={di}
                          onClick={() => setSlideIndex(di)}
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${di === slideIndex ? "bg-primary" : "bg-surface-dark-foreground/50"}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-1">{service.title}</h3>
                <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-4">{service.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{service.fullDescription}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
