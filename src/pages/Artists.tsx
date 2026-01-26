import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import artistImage from "@/assets/breaking-out-new.jpg";

const artists = [
  {
    id: "breaking-out",
    name: "Breaking Out",
    description: "Raw gritty energy meets harmonized guitar melodies. Breaking Out delivers powerful live performances that leave audiences wanting always more. A band on the verge of growing into the next rockstars of our generation.",
    genre: "Alternative Rock",
    image: artistImage,
  },
];

const Artists = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 md:pt-40">
        <section className="section-padding pt-8 md:pt-12">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="label-uppercase mb-6">Roster</p>
              <h1 className="headline-xl text-foreground mb-8 max-w-3xl">
                Artists
              </h1>
              <p className="body-lg max-w-2xl mb-16">
                A selective roster of emerging bands we believe in. Each artist 
                receives our full attention and dedicated partnership.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8">
              {artists.map((artist, index) => (
                <AnimatedSection key={artist.id} delay={0.2 + index * 0.1}>
                  <Link
                    to={`/artists/${artist.id}`}
                    className="block card-subtle group transition-all duration-500 hover:border-primary/50"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Artist Image */}
                      <div className="w-full md:w-64 lg:w-80 flex-shrink-0">
                        <div className="aspect-square overflow-hidden rounded bg-card">
                          <img 
                            src={artist.image} 
                            alt={artist.name}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                      </div>
                      
                      {/* Artist Info */}
                      <div className="flex flex-col justify-center flex-1">
                        <p className="label-uppercase mb-2">{artist.genre}</p>
                        <h2 className="headline-md text-foreground group-hover:text-primary transition-colors duration-300 mb-3">
                          {artist.name}
                        </h2>
                        <p className="body-md max-w-xl mb-6">
                          {artist.description}
                        </p>
                        <div>
                          <span className="btn-outline text-xs py-3 px-6 group-hover:border-primary group-hover:text-primary transition-colors">
                            View Artist
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.4}>
              <div className="mt-16 text-center">
                <p className="body-sm">More artists coming soon.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Artists;
