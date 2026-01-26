import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import ScrollArrow from "@/components/ScrollArrow";
import { motion } from "framer-motion";
const values = [{
  title: "Human Connection",
  description: "In an industry increasingly driven by algorithms and data, we believe in the irreplaceable value of human relationships. Every artist, venue, and promoter we work with knows they're dealing with real people who care about their success."
}, {
  title: "Long-term Thinking",
  description: "We're not interested in quick wins that sacrifice an artist's long-term potential. We build careers methodically, sustainably, and with genuine consideration for each artist's unique path."
}, {
  title: "Local Expertise",
  description: "Rooted in Belgium with deep connections across Europe, we understand the venues, promoters, and scenes that matter. This local knowledge allows us to create opportunities that larger agencies often miss."
}, {
  title: "Selective Partnership",
  description: "We deliberately maintain a small roster because we believe every artist deserves dedicated attention. We're not building a database of acts, but lasting partnerships with artists we genuinely believe in."
}];
const About = () => {
  return <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 md:pt-40">
        {/* Hero */}
        <section className="section-padding pt-8 md:pt-12">
          <div className="section-container">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}>
              <p className="label-uppercase mb-6">About</p>
              <h1 className="headline-xl text-foreground mb-8 max-w-4xl">
                A boutique agency by design
              </h1>
              <p className="body-lg max-w-2xl">
                Coopers Booking was founded with a conviction: emerging artists 
                deserve the same quality of representation that established acts receive.
              </p>
            </motion.div>
            <ScrollArrow />
          </div>
        </section>

        {/* Philosophy */}
        <section className="section-padding bg-charcoal-light">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
              <AnimatedSection>
                <div>
                  <p className="label-uppercase mb-6">Our Philosophy</p>
                  <p className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8">We grow alongside our artists because we believe the best work happens through mutual understanding and empathy. </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="space-y-6">
                  <p className="body-lg">
                    Too often, emerging artists sign with agencies that promise 
                    the world, only to find themselves lost in a roster of hundreds, 
                    managed by junior agents learning on their careers.
                  </p>
                  <p className="body-md">
                    We built Coopers Booking to be different. No assistant answering 
                    your emails. No junior agent cutting their teeth on your career. 
                    Just experienced, dedicated partnership from people who genuinely 
                    understand what it takes to build a sustainable career in music.
                  </p>
                  <p className="body-md">We're selective because we care. Every artist we represent has our full attention, our complete commitment, and our honest counsel... even when that means saying things they might not want to hear.</p>
                </div>
              </AnimatedSection>
            </div>
            <ScrollArrow />
          </div>
        </section>

        {/* Values */}
        <section className="section-padding">
          <div className="section-container">
            <AnimatedSection>
              <p className="label-uppercase mb-6">Our Values</p>
              <h2 className="headline-lg text-foreground mb-16 max-w-2xl">
                What guides our work
              </h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {values.map((value, index) => <AnimatedSection key={value.title} delay={0.1 + index * 0.1}>
                  <div className="card-subtle h-full">
                    <div className="divider-line-accent mb-6" />
                    <h3 className="headline-sm text-foreground mb-4">
                      {value.title}
                    </h3>
                    <p className="body-md">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>)}
            </div>
            <ScrollArrow />
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-charcoal-light">
          <div className="section-container text-center">
            <AnimatedSection>
              <p className="font-serif text-2xl md:text-3xl text-foreground mb-8 max-w-2xl mx-auto">
                Interested in working together?
              </p>
              <Link to="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default About;