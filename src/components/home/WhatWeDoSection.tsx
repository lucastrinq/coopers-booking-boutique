import AnimatedSection from "../AnimatedSection";
import ScrollArrow from "../ScrollArrow";

const services = [{
  title: "Live Booking",
  description: "Strategic venue partnerships and tour routing that makes sense for your career stage and artistic vision."
}, {
  title: "Show Strategy",
  description: "From first local shows to festival stages, we craft a live presence that builds momentum thoughtfully."
}, {
  title: "Artist Support",
  description: "Beyond bookings, we guide, advocate, and advice in navigating the current music industry."
}];

const WhatWeDoSection = () => {
  return (
    <section className="section-padding bg-charcoal-light">
      <div className="section-container">
        <AnimatedSection>
          <p className="label-uppercase mb-6">What We Do</p>
          <h2 className="headline-lg text-foreground mb-8 max-w-2xl">We focus on what matters most: The Artist</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mb-16 max-w-xl border-l-2 border-primary pl-6">
            <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed">We don't book blindly.</p>
            <p className="font-serif text-2xl md:text-3xl text-primary leading-relaxed mt-2">We build you a perfect stage to shine.</p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {services.map((service, index) => (
            <AnimatedSection key={service.title} delay={0.2 + index * 0.15}>
              <div className="card-subtle h-full">
                <div className="divider-line-accent mb-6" />
                <h3 className="headline-sm text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="body-md">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <ScrollArrow />
      </div>
    </section>
  );
};

export default WhatWeDoSection;