import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
import ScrollArrow from "../ScrollArrow";
import artistImage from "@/assets/breaking-out-1.jpg";
import ulysseImage from "@/assets/ulysse-ponce.jpg";

const artists = [
  {
    id: "breaking-out",
    name: "Breaking Out",
    description: "Raw gritty energy meets harmonized guitar melodies. Breaking Out delivers powerful live performances that leave audiences wanting always more. A band on the verge of growing into the next rockstars of our generation.",
    image: artistImage,
    spotifyEmbed: "https://open.spotify.com/embed/artist/7BGqlvWx2XZ5oEvWdUprev?utm_source=generator&theme=0",
  },
  {
    id: "ulysse-ponce",
    name: "Ulysse Poncé",
    description: "Warm and intimate acoustic performances that blend energy, emotion, and close interaction with the audience. A versatile artist reinterpreting iconic songs with a personal, heartfelt approach.",
    image: ulysseImage,
  },
];

const ArtistsSection = () => {
  return (
    <section className="section-padding bg-charcoal-light">
      <div className="section-container">
        <AnimatedSection>
          <p className="label-uppercase mb-6">Artists</p>
          <h2 className="headline-lg text-foreground mb-16 max-w-2xl">Our current artists</h2>
        </AnimatedSection>

        <div className="space-y-12">
          {artists.map((artist, index) => (
            <AnimatedSection key={artist.id} delay={0.2 + index * 0.1}>
              <div className="card-subtle max-w-5xl">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 ${index % 2 === 1 ? '' : ''}`}>
                  {/* Artist Image */}
                  <div className={`${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                    <div className="aspect-square overflow-hidden rounded bg-card">
                      <img alt={artist.name} className="w-full h-full object-cover" src={artist.image} />
                    </div>
                  </div>

                  {/* Artist Info */}
                  <div className={`${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1 lg:order-1'} flex flex-col justify-center`}>
                    <div className="divider-line-accent mb-6" />
                    <h3 className="headline-md text-foreground mb-4">
                      {artist.name}
                    </h3>
                    <p className="body-md mb-6">{artist.description}</p>
                    <div className="mb-6">
                      <p className="label-uppercase mb-2">Booking Contact</p>
                      <a href="mailto:booking.coopers@gmail.com" className="text-foreground hover:text-primary transition-colors">
                        booking.coopers@gmail.com
                      </a>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <Link to={`/artists/${artist.id}`} className="btn-outline text-xs py-3 px-6">
                        View Artist
                      </Link>
                    </div>

                    {/* Spotify Embed - only show if available */}
                    {artist.spotifyEmbed && (
                      <div className="mt-8 bg-card rounded p-4 border border-border/50">
                        <iframe
                          style={{ borderRadius: "8px" }}
                          src={artist.spotifyEmbed}
                          width="100%"
                          height="152"
                          frameBorder="0"
                          allowFullScreen
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          title="Spotify Player"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="body-sm mt-12 text-center">
            More artists coming soon.
          </p>
        </AnimatedSection>

        <ScrollArrow />
      </div>
    </section>
  );
};

export default ArtistsSection;