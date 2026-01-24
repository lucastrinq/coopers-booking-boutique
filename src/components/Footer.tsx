import { motion } from "framer-motion";
import logoFull from "@/assets/logo-full.png";

const Footer = () => {
  const microStatements = [
    "Curated venues",
    "Selective process",
    "Emerging artists only",
  ];

  return (
    <footer className="bg-charcoal border-t border-border/30">
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* Brand */}
          <div className="flex flex-col">
            <img src={logoFull} alt="Coopers Booking" className="h-14 md:h-16 mb-4 -ml-1" />
            <p className="body-sm max-w-xs">
              Boutique booking & management for emerging bands.
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <p className="label-uppercase mb-4">Contact</p>
            <a
              href="mailto:booking.coopers@gmail.com"
              className="text-foreground hover:text-primary transition-colors duration-300"
            >
              booking.coopers@gmail.com
            </a>
            <p className="body-sm mt-4">
              Based in Belgium — working locally & beyond.
            </p>
          </div>

          {/* Micro Statements */}
          <div className="flex flex-col md:items-end">
            <p className="text-primary font-serif text-lg mb-4">How we proceed</p>
            <div className="flex flex-col gap-2 md:text-right">
              {microStatements.map((statement) => (
                <span key={statement} className="body-sm">
                  {statement}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-line my-12 opacity-30" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Coopers Booking. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="/about" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="/artists" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Artists
            </a>
            <a href="/contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
