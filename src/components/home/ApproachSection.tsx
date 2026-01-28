import AnimatedSection from "../AnimatedSection";
import ScrollArrow from "../ScrollArrow";

const values = [{
  name: "Human",
  description: "Real conversations, not automated responses. We know our artists, venues, and partners personally."
}, {
  name: "Artist-first",
  description: "Your vision guides our work. We're partners in your career, not gatekeepers to it."
}, {
  name: "Local",
  description: "Rooted in Belgium, connected across Europe. We understand the regional landscapes that matter."
}, {
  name: "Action-driven",
  description: "No bloated teams or corporate overhead. Direct communication and fast, thoughtful action."
}];

const ApproachSection = () => {
  return <section className="section-padding">
      <div className="section-container">
        <AnimatedSection>
          <p className="label-uppercase mb-6">Our Approach</p>
          <h2 className="headline-lg text-foreground mb-16 max-w-2xl">Why choose Coopers Booking</h2>
        </AnimatedSection>

        <div className="max-w-3xl">
          {values.map((value, index) => <AnimatedSection key={value.name} delay={0.1 + index * 0.1}>
              <div className={`py-8 ${index !== values.length - 1 ? "border-b border-border/50" : ""}`}>
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12">
                  <h3 className="font-serif text-xl md:text-2xl text-primary min-w-[140px]">
                    {value.name}
                  </h3>
                  <p className="body-md flex-1">
                    {value.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>)}
        </div>

        <ScrollArrow />
      </div>
    </section>;
};

export default ApproachSection;