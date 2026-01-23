import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import ApproachSection from "@/components/home/ApproachSection";
import ArtistsSection from "@/components/home/ArtistsSection";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header>
        <Navigation />
      </header>

      <main id="main-content" className="relative">
        <section id="hero">
          <HeroSection />
        </section>

        <section id="what-we-do">
          <WhatWeDoSection />
        </section>

        <section id="approach">
          <ApproachSection />
        </section>

        <section id="artists">
          <ArtistsSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Index;

