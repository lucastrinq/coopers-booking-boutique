import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:coopers.booking@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 md:pt-32">
        <section className="section-padding">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl mx-auto text-center mb-16"
            >
              <p className="label-uppercase mb-6">Contact</p>
              <h1 className="headline-xl text-foreground mb-8">
                Let's talk
              </h1>
              <p className="body-lg">
                Whether you're a venue, artist, or promoter — 
                we'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto">
              {/* Contact Info */}
              <AnimatedSection>
                <div>
                  <p className="label-uppercase mb-6">Email Us Directly</p>
                  <a
                    href="mailto:coopers.booking@gmail.com"
                    className="font-serif text-2xl md:text-3xl text-primary hover:text-foreground transition-colors duration-500 block mb-8"
                  >
                    coopers.booking@gmail.com
                  </a>
                  
                  <div className="divider-line my-8 opacity-30" />
                  
                  <p className="body-md mb-4">
                    Based in Belgium — working locally & beyond.
                  </p>
                  <p className="body-sm">
                    We aim to respond to all inquiries within 48 hours.
                  </p>
                </div>
              </AnimatedSection>

              {/* Contact Form */}
              <AnimatedSection delay={0.1}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-primary transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-background">Select a subject</option>
                      <option value="Booking Inquiry" className="bg-background">Booking Inquiry</option>
                      <option value="Artist Submission" className="bg-background">Artist Submission</option>
                      <option value="Venue Partnership" className="bg-background">Venue Partnership</option>
                      <option value="Press" className="bg-background">Press</option>
                      <option value="Other" className="bg-background">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm uppercase tracking-widest text-muted-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your inquiry..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full mt-8">
                    Send Message
                  </button>
                </form>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
