import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ArtistImageCarousel from "@/components/ArtistImageCarousel";
import { motion } from "framer-motion";
import { ArrowLeft, Instagram } from "lucide-react";

// Breaking Out images
import breakingOut1 from "@/assets/breaking-out-1.jpg";
import breakingOut2 from "@/assets/breaking-out-2.jpg";
import breakingOut3 from "@/assets/breaking-out-3.jpg";
import breakingOut4 from "@/assets/breaking-out-4.jpg";
import breakingOut5 from "@/assets/breaking-out-5.jpg";
import breakingOut6 from "@/assets/breaking-out-6.jpg";
import breakingOut7 from "@/assets/breaking-out-7.jpg";
import breakingOut8 from "@/assets/breaking-out-8.jpg";
import breakingOut9 from "@/assets/breaking-out-9.jpg";

// Ulysse Poncé image
import ulysseImage from "@/assets/ulysse-ponce.jpg";

const LinktreeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M8.92 2.74l3.08 3.08 3.08-3.08 1.42 1.42L13.42 7.24H17v2h-3.59l3.09 3.09-1.42 1.42L12 10.66l-3.08 3.09-1.42-1.42L10.59 9.24H7v-2h3.59L7.5 4.16l1.42-1.42zM7 14h10v2H7v-2zm0 4h10v2H7v-2z"/>
  </svg>
);

const artistsData: Record<string, {
  name: string;
  genre: string;
  bio: string;
  longBio: string;
  spotifyEmbed?: string;
  images: string[];
  instagram?: string;
  linktree?: string;
}> = {
  "breaking-out": {
    name: "Breaking Out",
    genre: "Alternative Rock",
    bio: "Raw gritty energy meets harmonized guitar melodies. Breaking Out delivers powerful live performances that leave audiences wanting always more. A band on the verge of growing into the next rockstars of our generation.",
    longBio: `Breaking Out emerged from the Belgian underground scene with a sound that defies easy categorization. Their music blends raw, visceral energy with ear-catching melodies, creating performances that resonate long after the last note fades.

This isn't just a rock band. It's an explosion of guitars, a rush of adrenaline, a raw sound that hits hard and shakes the stage. No pretence, just pure energy, sharp riffs, and an urgent need to play full throttle.

The band's live shows have quickly earned them a reputation for intensity and authenticity. From intimate club shows to festival stages, Breaking Out delivers performances that connect genuinely, powerfully, and memorably.`,
    spotifyEmbed: "https://open.spotify.com/embed/artist/7BGqlvWx2XZ5oEvWdUprev?utm_source=generator&theme=0",
    images: [
      breakingOut1,
      breakingOut2,
      breakingOut3,
      breakingOut4,
      breakingOut5,
      breakingOut6,
      breakingOut7,
      breakingOut8,
      breakingOut9,
    ],
    instagram: "https://www.instagram.com/breakingoutband/",
    linktree: "https://linktr.ee/breakingoutband",
  },
  "ulysse-ponce": {
    name: "Ulysse Poncé",
    genre: "Acoustic Pop-Rock",
    bio: "Warm and intimate acoustic performances that blend energy, emotion, and close interaction with the audience. A versatile artist reinterpreting iconic songs with a personal, heartfelt approach.",
    longBio: `Ulysse Poncé offers live acoustic guitar & vocal performances built around an eclectic pop-rock covers repertoire. From Adele to Oasis, including Led Zeppelin, French Classic Aznavour, and Stromae, he reinterprets iconic songs with a personal, stripped-down and heartfelt approach, drawing from a catalogue of over 200 songs.

In a warm and intimate format, he blends energy, emotion, and close interaction with the audience. A versatile setup, perfectly suited for your cafés-concerts, clubs, as well as private and cultural events.`,
    images: [ulysseImage],
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
              <p className="font-serif text-xl md:text-2xl text-primary max-w-2xl mb-6">
                {artist.bio}
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {artist.instagram && (
                  <a
                    href={artist.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {artist.linktree && (
                  <a
                    href={artist.linktree}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300 hover:scale-110"
                    aria-label="Linktree"
                  >
                    <LinktreeIcon />
                  </a>
                )}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <ArtistImageCarousel images={artist.images} artistName={artist.name} />
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
                {artist.spotifyEmbed && (
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
                )}

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
