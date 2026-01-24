import { Link } from "react-router-dom";
import AnimatedSection from "../AnimatedSection";
const AboutSection = () => {
  return <section className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <p className="label-uppercase mb-6">About</p>
          <h2 className="headline-lg text-foreground mb-12 max-w-2xl">
            A boutique agency by design
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <AnimatedSection delay={0.1}>
            <div className="max-w-xl">
              <p className="font-serif text-xl md:text-2xl text-foreground leading-relaxed mb-8">Our small curated batch of artists reflects our commitment to personalize each of our solution to their specific situation. 


Every artist we represent has our full attention, our complete commitement, and our honest counsel. </p>
              <p className="body-lg mb-8">Coopers Booking was founded with a simple conviction: emerging artists deserve the same quality of representation that established acts receive. No assistant answering your emails, no junior agent cutting their teeth on your career; just experienced, dedicated partnership.</p>
              
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="lg:pt-12">
              <div className="border-l-2 border-primary pl-8">
                <p className="font-serif text-lg md:text-xl text-foreground italic leading-relaxed">"We don't believe in scaling for the sake of growth. We believe in growing alongside our artists, at a pace that serves their careers, not our ambitions."</p>
              </div>
              <div className="mt-12">
                <Link to="/about" className="btn-outline text-xs py-3 px-6">
                  Learn More About Us
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>;
};
export default AboutSection;