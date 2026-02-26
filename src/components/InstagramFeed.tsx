import { Instagram } from "lucide-react";
import insta1 from "@/assets/insta-1.jpg";
import insta2 from "@/assets/insta-2.jpg";
import insta3 from "@/assets/insta-3.jpg";
import insta4 from "@/assets/insta-4.jpg";
import insta5 from "@/assets/insta-5.jpg";
import insta6 from "@/assets/insta-6.jpg";

const images = [insta1, insta2, insta3, insta4, insta5, insta6];

const instaPosts = [
  "https://www.instagram.com/p/DSU0JgiiXek/",
  "https://www.instagram.com/p/DSFXfmsgaB-/",
  "https://www.instagram.com/p/DR4fbQdDRVH/",
  "https://www.instagram.com/p/DRzV0OxD34O/",
  "https://www.instagram.com/p/DRuMRPMiAJA/",
  "https://www.instagram.com/p/DRhUQfZD2mZ/",
];

const InstagramFeed = () => {
  return (
    <section className="py-24 bg-pearl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Instagram className="text-primary" size={24} />
          <p className="text-primary font-semibold text-sm tracking-widest uppercase">
            Instagram
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
          Inspiración en Instagram{" "}
          <a
            href="https://www.instagram.com/barriolaconstructora"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            @barriolaconstructora
          </a>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <a
              key={i}
              href={instaPosts[i]}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden aspect-square"
            >
              <img
                src={img}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-surface-dark/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="text-surface-dark-foreground" size={32} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
