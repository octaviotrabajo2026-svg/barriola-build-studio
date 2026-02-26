import project1 from "@/assets/insta-1.jpg";
import project2 from "@/assets/insta-2.jpg";
import project3 from "@/assets/insta-3.jpg";
import project4 from "@/assets/insta-4.jpg";
import project5 from "@/assets/insta-5.jpg";
import project6 from "@/assets/insta-6.jpg";

const projects = [
  { img: project1, title: "Hormigonado", location: "Refuerzo Estructural" },
  { img: project2, title: "Construcción de Muros", location: "Muros Laterales" },
  { img: project3, title: "Cordones Cuneta", location: "Obra Vial Urbana" },
  { img: project4, title: "Camino al Río", location: "Estructura con Propósito" },
  { img: project5, title: "Excavación Profunda", location: "Control y Precisión" },
  { img: project6, title: "Obra Residencial", location: "Gualeguaychú, E.R." },
];

const Projects = () => {
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
            <div key={i} className="group relative overflow-hidden cursor-pointer">
              <img
                src={p.img}
                alt={p.title}
                className="w-full aspect-[4/5] object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay on hover */}
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
    </section>
  );
};

export default Projects;
