import AnimatedSection from "../AnimatedSection";

const ContactSection = () => {
  return (
    <section className="section-padding bg-charcoal-light">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <p className="label-uppercase mb-6">Contact</p>
            <h2 className="headline-lg text-foreground mb-8">
              Let's talk
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="body-lg mb-12">
              Whether you're a venue looking for emerging talent, an artist seeking 
              representation, or a promoter interested in collaboration — we'd love 
              to hear from you.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <a
              href="mailto:coopers.booking@gmail.com"
              className="inline-block font-serif text-2xl md:text-3xl text-primary hover:text-foreground transition-colors duration-500"
            >
              coopers.booking@gmail.com
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <p className="body-md mt-12">
              Based in Belgium — working locally & beyond.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
