import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-4 bg-secondary/30 flex items-center justify-center"
    >
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl">
          Have a project in mind or know of a full-time opportunity? Feel free to reach out — I'm always excited to explore new challenges.
        </p>

        <div className="w-full max-w-2xl bg-background shadow-md rounded-2xl p-6 md:p-10 space-y-8">
          {/* Email */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="font-semibold">Email</h4>
              <a
                href="mailto:samuelramdial0327@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                samuelramdial0327@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 rounded-full bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="font-semibold">Phone</h4>
              <a
                href="tel:+19103229969"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                +1 (910) 322-9969
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="p-3 sm:p-4 rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col justify-center">
              <h4 className="font-semibold">Location</h4>
              <p className="text-muted-foreground"> NC, USA</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="pt-6 text-center">
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center gap-6 text-muted-foreground">
              <a
                href="https://www.linkedin.com/in/samuel-ramdial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="hover:text-primary transition-colors" />
              </a>
              <a
                href="https://instagram.com/samsclubx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram className="hover:text-primary transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
