import { motion } from "framer-motion";
import logoFull from "@/assets/logo-full.png";
import logoIcon from "@/assets/logo-icon.png";
import heroBg from "@/assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40">
      {/* Elegant curvy lines - Left side */}
      <svg 
        className="absolute left-0 top-0 h-full w-1/3 opacity-[0.08] pointer-events-none"
        viewBox="0 0 400 1000"
        preserveAspectRatio="xMinYMid slice"
        fill="none"
      >
        <path 
          d="M-100 0 Q150 250 50 500 T-50 1000" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2"
          fill="none"
        />
        <path 
          d="M-50 100 Q200 350 100 600 T0 1100" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5"
          fill="none"
        />
        <path 
          d="M0 -50 Q250 200 150 450 T50 950" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Elegant curvy lines - Right side */}
      <svg 
        className="absolute right-0 top-0 h-full w-1/3 opacity-[0.08] pointer-events-none"
        viewBox="0 0 400 1000"
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
      >
        <path 
          d="M500 0 Q250 250 350 500 T450 1000" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2"
          fill="none"
        />
        <path 
          d="M450 100 Q200 350 300 600 T400 1100" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5"
          fill="none"
        />
        <path 
          d="M400 -50 Q150 200 250 450 T350 950" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="headline-xl text-foreground mb-6"
          >
            Boutique booking & management
            <br />
            <span className="text-primary">for emerging bands</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="label-uppercase mb-8"
          >
            Local · Human · Artist-first
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="body-lg max-w-2xl mx-auto mb-12"
          >
            Coopers Booking is your independent booking & management partner 
            working closely with emerging bands to build meaningful live momentum. 
            Show by show, scene by scene.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-24"
          >
            <Link
              to="/contact?subject=booking"
              className="btn-primary"
            >
              Book a band
            </Link>
            <Link
              to="/contact?subject=artist"
              className="btn-outline"
            >
              Get concerts
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Scroll Arrow Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-foreground/30"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;
