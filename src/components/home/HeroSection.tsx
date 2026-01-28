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
        className="absolute left-0 top-0 h-full w-2/5 pointer-events-none"
        viewBox="0 0 500 1000"
        preserveAspectRatio="xMinYMid slice"
        fill="none"
      >
        <path 
          d="M-150 0 Q200 200 100 400 T-100 800 Q50 900 -50 1000" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2.5"
          fill="none"
          opacity="0.7"
        />
        <path 
          d="M-80 50 Q250 300 120 550 T-30 950" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path 
          d="M0 -100 Q300 150 180 380 T80 700 Q200 850 100 1000" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />
        <path 
          d="M50 100 Q350 280 200 500 T150 850" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.2"
          fill="none"
          opacity="0.3"
        />
        <path 
          d="M-200 200 Q100 400 50 600 T-100 900" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.8"
          fill="none"
          opacity="0.25"
        />
      </svg>

      {/* Elegant curvy lines - Right side */}
      <svg 
        className="absolute right-0 top-0 h-full w-2/5 pointer-events-none"
        viewBox="0 0 500 1000"
        preserveAspectRatio="xMaxYMid slice"
        fill="none"
      >
        <path 
          d="M650 0 Q300 200 400 400 T600 800 Q450 900 550 1000" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2.5"
          fill="none"
          opacity="0.7"
        />
        <path 
          d="M580 50 Q250 300 380 550 T530 950" 
          stroke="hsl(var(--primary))" 
          strokeWidth="2"
          fill="none"
          opacity="0.5"
        />
        <path 
          d="M500 -100 Q200 150 320 380 T420 700 Q300 850 400 1000" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />
        <path 
          d="M450 100 Q150 280 300 500 T350 850" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.2"
          fill="none"
          opacity="0.3"
        />
        <path 
          d="M700 200 Q400 400 450 600 T600 900" 
          stroke="hsl(var(--primary))" 
          strokeWidth="1.8"
          fill="none"
          opacity="0.25"
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
