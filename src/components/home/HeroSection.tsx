const HeroSection = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6">
      <div className="max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-serif tracking-wide">
          Boutique booking & management<br />for emerging bands
        </h1>

        <p className="uppercase tracking-widest text-sm opacity-80">
          Local · Human · Artist-first
        </p>

        <p className="text-lg opacity-90">
          Coopers Booking is an independent booking & management partner
          working closely with emerging bands to build meaningful live momentum —
          show by show, scene by scene.
        </p>

        <div className="pt-6">
          <a
            href="mailto:booking.coopers@gmail.com"
            className="inline-block border border-current px-6 py-3 tracking-wide hover:opacity-80 transition"
          >
            Booking inquiries
          </a>

          <p className="mt-4 text-sm opacity-70">
            booking.coopers@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
