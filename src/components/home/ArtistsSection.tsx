import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
import artistImage from "@/assets/artist-breaking-out.jpg";
const ArtistsSection = () => {
  return <section className="section-padding bg-charcoal-light">
      <div className="section-container">
        <AnimatedSection>
          <p className="label-uppercase mb-6">Artists</p>
          <h2 className="headline-lg text-foreground mb-16 max-w-2xl">Our current artists</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="card-subtle max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Artist Image */}
              <div className="order-2 lg:order-1">
                <div className="aspect-square overflow-hidden rounded bg-card">
                  <img alt="Breaking Out" className="w-full h-full object-contain" src="/lovable-uploads/de3e4f7b-5b39-40ea-b8fd-b1f12d426332.jpg" />
                </div>
              </div>

              {/* Artist Info */}
              <div className="order-1 lg:order-2 flex flex-col justify-center">
                <div className="divider-line-accent mb-6" />
                <h3 className="headline-md text-foreground mb-4">
                  Breaking Out
                </h3>
                <p className="body-md mb-6">Raw energy meets guitar hero melodies. Breaking Out delivers powerful live performances that leave audiences wanting always more. A band on the verge of growing into the next rockstars of our generation.</p>
                <div className="mb-6">
                  <p className="label-uppercase mb-2">Booking Contact</p>
                  <a href="mailto:coopers.booking@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    coopers.booking@gmail.com
                  </a>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Link to="/artists/breaking-out" className="btn-outline text-xs py-3 px-6">
                    View Artist
                  </Link>
                </div>

                {/* Spotify Embed */}
                <div className="mt-8 bg-card rounded p-4 border border-border/50">
                  <iframe style={{
                  borderRadius: "8px"
                }} src="https://open.spotify.com/embed/artist/0TnOYISbd1XYRBk9myaseg?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Spotify Player" />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="body-sm mt-12 text-center">
            More artists coming soon.
          </p>
        </AnimatedSection>
      </div>
    </section>;
};
export default ArtistsSection;