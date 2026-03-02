import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import project1 from "@/assets/project-1.avif";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpeg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpeg";
import detail1 from "@/assets/detail-1.png";
import detail2 from "@/assets/detail-2.png";
import detail3 from "@/assets/detail-3.png";
import detail4 from "@/assets/detail-4.png";
import detail5 from "@/assets/detail-5.png";

const projects = [
  {
    img: project1,
    title: "Hormigonado",
    location: "Refuerzo Estructural",
    gallery: [project1, detail1],
    description:
      "Trabajo de hormigonado para refuerzo estructural en obra civil. Se realizaron tareas de encofrado, armado de hierro y vertido de hormigón elaborado, garantizando la resistencia y durabilidad requeridas por el proyecto. Control de calidad en cada etapa del proceso.",
  },
  {
    img: project2,
    title: "Construcción de Muros",
    location: "Muros Laterales",
    gallery: [project2, detail2],
    description:
      "Construcción de muros laterales de contención con maquinaria pesada. El proyecto incluyó excavación, compactación del terreno y levantamiento de muros de hormigón armado para estabilización del suelo en zona ribereña.",
  },
  {
    img: project3,
    title: "Cordones Cuneta",
    location: "Obra Vial Urbana",
    gallery: [project3, detail3],
    description:
      "Ejecución de cordones cuneta en obra vial urbana. Trabajo de precisión en el trazado y nivelación para garantizar el correcto escurrimiento de aguas pluviales y la integración con el pavimento existente.",
  },
  {
    img: project4,
    title: "Camino al Río",
    location: "Estructura con Propósito",
    gallery: [project4, detail4],
    description:
      "Obra de infraestructura para acceso al río. Incluye movimiento de suelos, construcción de muros de contención y nivelación del terreno para generar un acceso seguro y funcional en zona costera.",
  },
  {
    img: project5,
    title: "Excavación Profunda",
    location: "Control y Precisión",
    gallery: [project5, detail5],
    description:
      "Excavación profunda controlada con retroexcavadora para obras de gran envergadura. Trabajos realizados con máximo control de seguridad y precisión en terrenos complejos junto al río.",
  },
  {
    img: project6,
    title: "Obra Residencial",
    location: "Gualeguaychú, E.R.",
    gallery: [project6],
    description:
      "Desarrollo de obra residencial integral en Gualeguaychú, Entre Ríos. Proyecto que abarca desde los cimientos hasta la terminación, con enfoque en calidad constructiva y cumplimiento de plazos.",
  },
];

const Projects = () => {
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

  const project = selected !== null ? projects[selected] : null;

  return (
    <section id="proyectos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3 text-center">
          Portfolio
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-14">
          Nuestras Obras
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="group relative overflow-hidden cursor-pointer" onClick={() => openModal(i)}>
              <img
                src={p.img}
                alt={p.title}
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-surface-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="text-surface-dark-foreground font-bold text-xl mb-1">{p.title}</h3>
                <p className="text-cement text-sm mb-4">{p.location}</p>
                <span className="border border-primary text-primary px-4 py-2 text-xs font-semibold tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-colors">
                  Ver detalles
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {project && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-surface-dark/80 backdrop-blur-sm" onClick={closeModal}>
          <div
            className="relative bg-background border border-border max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-surface-dark/70 text-surface-dark-foreground p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            {/* Gallery slider */}
            <div className="relative">
              <img
                src={project.gallery[slideIndex]}
                alt={`${project.title} - ${slideIndex + 1}`}
                className="w-full aspect-video object-cover"
              />
              {project.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setSlideIndex((slideIndex - 1 + project.gallery.length) % project.gallery.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-surface-dark/70 text-surface-dark-foreground p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Anterior"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setSlideIndex((slideIndex + 1) % project.gallery.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-surface-dark/70 text-surface-dark-foreground p-2 hover:bg-primary hover:text-primary-foreground transition-colors"
                    aria-label="Siguiente"
                  >
                    <ChevronRight size={20} />
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                    {project.gallery.map((_, di) => (
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

            {/* Content */}
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
              <p className="text-primary text-sm font-semibold tracking-wide uppercase mb-4">{project.location}</p>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
