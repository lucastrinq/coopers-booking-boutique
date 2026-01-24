import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import artistImage from "@/assets/artist-breaking-out.jpg";

const artistsData: Record<string, {
  name: string;
  genre: string;
  bio: string;
  longBio: string;
  spotifyEmbed: string;
  image: string;
}> = {
  "breaking-out": {
    name: "Breaking Out",
    genre: "Alternative Rock",
    bio: "Raw energy meets introspective songwriting. A band on the verge of something significant.",
    longBio: `Breaking Out emerged from the Belgian underground scene with a sound that defies easy categorization. Their music blends raw, visceral energy with deeply introspective lyrics, creating performances that resonate long after the last note fades.

The band's live shows have quickly earned them a reputation for intensity and authenticity. From intimate club shows to festival stages, Breaking Out delivers performances that connect — genuinely, powerfully, and memorably.

Currently working on new material, the band continues to evolve while staying true to the artistic vision that makes them stand out in an increasingly homogenized musical landscape.`,
    spotifyEmbed: "https://open.spotify.com/embed/artist/7BGqlvWx2XZ5oEvWdUprev?utm_source=generator&theme=0",
    image: artistImage,
  },
};

const ArtistDetail = () => {
  const { artistId } = useParams();
  const artist = artistId ? artistsData[artistId] : null;

  if (!artist) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="pt-32 md:pt-40">
          <section className="section-padding pt-8 md:pt-12">
            <div className="section-container text-center">
              <h1 className="headline-lg text-foreground mb-8">Artist not found</h1>
              <Link to="/artists" className="btn-outline">
                Back to Artists
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 md:pt-40">
        {/* Back Link */}
        <section className="section-container pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/artists"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8"
            >
              <ArrowLeft size={16} />
              <span className="text-sm uppercase tracking-widest">All Artists</span>
            </Link>
          </motion.div>
        </section>

        {/* Hero with Image */}
        <section className="section-container pb-16 md:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="label-uppercase mb-4">{artist.genre}</p>
              <h1 className="headline-xl text-foreground mb-6">
                {artist.name}
              </h1>
              <p className="font-serif text-xl md:text-2xl text-primary max-w-2xl">
                {artist.bio}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-square rounded overflow-hidden"
            >
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="section-padding bg-charcoal-light">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              {/* Bio */}
              <AnimatedSection>
                <div>
                  <p className="label-uppercase mb-6">Biography</p>
                  <div className="space-y-6">
                    {artist.longBio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="body-md">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              {/* Media & Booking */}
              <div className="space-y-12">
                <AnimatedSection delay={0.1}>
                  <div>
                    <p className="label-uppercase mb-6">Listen</p>
                    <div className="bg-card rounded border border-border/50 p-4">
                      <iframe
                        style={{ borderRadius: "8px" }}
                        src={artist.spotifyEmbed}
                        width="100%"
                        height="352"
                        frameBorder="0"
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        title="Spotify Player"
                      />
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <div className="card-subtle">
                    <p className="label-uppercase mb-4">Booking Inquiries</p>
                    <p className="body-md mb-6">
                      For booking inquiries, please contact us directly.
                    </p>
                    <a
                      href="mailto:booking.coopers@gmail.com"
                      className="btn-primary"
                    >
                      Contact for Booking
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ArtistDetail;
