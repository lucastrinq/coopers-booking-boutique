import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ArtistImageCarouselProps {
  images: string[];
  artistName: string;
}

const ArtistImageCarousel = ({ images, artistName }: ArtistImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const resetToFirstImage = () => {
    setCurrentIndex(0);
  };

  const startResetTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      resetToFirstImage();
    }, 10000); // Reset after 10 seconds of inactivity
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      startResetTimer();
    }
  };

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
      startResetTimer();
    }
  };

  // Reset timer when navigating
  useEffect(() => {
    if (currentIndex !== 0) {
      startResetTimer();
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex]);

  // Intersection Observer to reset when scrolled out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && currentIndex !== 0) {
            resetToFirstImage();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [currentIndex]);

  const showLeftArrow = currentIndex > 0;
  const showRightArrow = currentIndex < images.length - 1;

  return (
    <div ref={containerRef} className="relative aspect-square rounded overflow-hidden group">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${artistName} - Photo ${currentIndex + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {/* Left Arrow */}
      {showLeftArrow && (
        <button
          onClick={goToPrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground bg-background/20 rounded-full transition-all duration-300 hover:bg-background/40 hover:ring-2 hover:ring-foreground/30"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <button
          onClick={goToNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-foreground/60 hover:text-foreground bg-background/20 rounded-full transition-all duration-300 hover:bg-background/40 hover:ring-2 hover:ring-foreground/30"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      )}

      {/* Image indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                if (index !== 0) startResetTimer();
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-foreground"
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtistImageCarousel;
