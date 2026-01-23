import { motion } from "framer-motion";
import logoFull from "@/assets/logo-full.png";
import logoIcon from "@/assets/logo-icon.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      </div>

      <div className="section-container text-center relative z-10">
        {/* Logo Icon - subtle above headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <img 
            src={logoIcon} 
            alt="CB" 
            className="h-16 md:h-20 mx-auto opacity-80"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="headline-xl text-foreground max-w-4xl mx-auto mb-8 text-balance"
        >
          Boutique booking & management for emerging bands
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-xl md:text-2xl text-primary tracking-wide mb-8"
        >
          Local. Human. Artist-first.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="body-lg max-w-2xl mx-auto mb-12"
        >
          We partner with emerging bands to build sustainable careers through 
          strategic live booking, thoughtful management, and genuine human connection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="mailto:coopers.booking@gmail.com" className="btn-primary">
            Booking Inquiries
          </a>
          <a
            href="mailto:coopers.booking@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            coopers.booking@gmail.com
          </a>
        </motion.div>

        {/* Full Logo at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16"
        >
          <img 
            src={logoFull} 
            alt="Coopers Booking" 
            className="h-10 md:h-12 mx-auto opacity-60"
          />
        </motion.div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-muted-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
