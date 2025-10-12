import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Menu as MenuIcon, X, ArrowLeft, ArrowRight } from "lucide-react";

// --- Local Image Imports ---
import myLogo from "./assets/images/logo.png";
import pubExt from "./assets/images/outside.jpg";
import gallery1 from "./assets/images/x-1.jpg";
import gallery2 from "./assets/images/x-2.jpg";
import gallery3 from "./assets/images/x-3.jpg";
import gallery4 from "./assets/images/x-4.jpg";
import gallery5 from "./assets/images/x-5.jpg";
import gallery6 from "./assets/images/x-6.jpg";
import gallery7 from "./assets/images/x-7.jpg";
import gallery8 from "./assets/images/x-8.jpg";
import gallery9 from "./assets/images/x-9.jpg";
import gallery10 from "./assets/images/x-10.jpg";
import gallery11 from "./assets/images/x-11.jpg";
import gallery12 from "./assets/images/x-12.jpg";
import gallery13 from "./assets/images/x-13.jpg";
import gallery14 from "./assets/images/x-14.jpg";
import gallery15 from "./assets/images/x-15.jpg";
import gallery16 from "./assets/images/x-16.jpg";
import gallery17 from "./assets/images/x-17.jpg";
import gallery18 from "./assets/images/x-18.jpg";
import gallery19 from "./assets/images/x-19.jpg";
import gallery20 from "./assets/images/x-20.jpg";
import sony1 from "./assets/images/sony-1.jpg";
import sony2 from "./assets/images/sony-2.jpg";
import sony3 from "./assets/images/sony-3.jpg";
import sony4 from "./assets/images/sony-4.jpg";
import sony5 from "./assets/images/sony-5.jpg";
import sony6 from "./assets/images/sony-6.jpg";
import sony7 from "./assets/images/sony-7.jpg";
import sony8 from "./assets/images/sony-8.jpg";

// --- Cocktail Image Imports ---
import cocktail1 from "./assets/images/cocktails/1.jpg";
import cocktail2 from "./assets/images/cocktails/2.jpg";
import cocktail3 from "./assets/images/cocktails/3.jpg";
import cocktail4 from "./assets/images/cocktails/4.jpg";
import cocktail5 from "./assets/images/cocktails/5.jpg";
import cocktail6 from "./assets/images/cocktails/6.jpg";

// --- Constants for local images ---
const logoUrl = myLogo;
const heroBgUrl = gallery7; // Using gallery7 for the hero background
const aboutImgUrl = pubExt;
const galleryImages = [
  gallery1,
  sony1,
  gallery2,
  // sony2,
  gallery3,
  sony3,
  gallery4,
  sony4,
  // gallery5,
  // sony5,
  gallery6,
  sony6,
  gallery7,
  sony7,
  gallery8,
  sony8,
  gallery9,
  // gallery10,
  gallery11,
  // gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
];

// --- Facebook SVG Icon Components ---
const FacebookIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Facebook</title>
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
  </svg>
);

// --- Instagram SVG Icon Component ---
const InstagramIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Instagram</title>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.305-1.457.717-2.126 1.385C1.344 2.683.93 3.357.63 4.14c-.3.765-.5 1.635-.558 2.913C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.26 2.148.558 2.913.3.784.717 1.457 1.385 2.126.67.67 1.344 1.077 2.126 1.385.765.3 1.635.5 2.913.558C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.26 2.913-.558.784-.3 1.457-.717 2.126-1.385.67-.67 1.077-1.344 1.385-2.126.3-.765.5-1.635.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.26-2.148-.558-2.913-.3-.784-.717-1.457-1.385-2.126C21.317 1.344 20.643.93 19.86.63c-.765-.3-1.635-.5-2.913-.558C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.013 3.584-.07 4.849c-.053 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.381.896-.422.164-1.057.36-2.227.413C8.415 2.176 8.797 2.16 12 2.16zm0 3.39c-3.405 0-6.16 2.755-6.16 6.16s2.755 6.16 6.16 6.16 6.16-2.755 6.16-6.16-2.755-6.16-6.16-6.16zm0 10.16c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.44.645-1.44 1.44s.645 1.44 1.44 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z" />
  </svg>
);

// --- Reusable Components ---
const SocialSidebar = () => (
  <div className="hidden md:flex flex-col items-center justify-center space-y-6 fixed left-0 top-0 h-screen w-10 bg-black/50 backdrop-blur-sm z-40">
    <a
      href="https://www.facebook.com/profile.php?id=61577305734801"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#FDE767] transition-colors"
    >
      <FacebookIcon className="w-6 h-6 fill-current" />
    </a>
    <a
      href="https://www.instagram.com/thefriendship.pub/?igsh=eXhuoWxmcWI0eGoz"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-[#FDE767] transition-colors"
    >
      <InstagramIcon className="w-6 h-6 fill-current" />
    </a>
  </div>
);

const NavLink = ({ href, children, onClick, isActive }) => (
  <a
    href={href}
    onClick={onClick}
    className={`py-2 uppercase tracking-widest transition-colors duration-300 text-sm font-medium border-b-2 ${
      isActive
        ? "text-[#FDE767] border-[#FDE767]"
        : "text-gray-300 border-transparent hover:text-white"
    }`}
  >
    {children}
  </a>
);

// --- Page Section Components ---
const HomeSection = () => (
  <section
    id="home"
    className="h-screen w-full relative flex items-center justify-center text-center text-white bg-cover bg-center"
    style={{ backgroundImage: `url(${heroBgUrl})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    <div className="relative z-10 p-4">
      <h1
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4"
        style={{
          fontFamily: "Times New Roman, Times, serif",
          color: "#FDE767",
        }}
      >
        The Friendship Pub
      </h1>
      <p className="text-base md:text-lg lg:text-xl font-light text-gray-200 max-w-2xl mx-auto [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
        Friendship Highway, Angeles City, Pampanga.
      </p>
      <div className="flex justify-center mt-8">
        <button
          onClick={() => window.open(foodMenuPdf, "_blank")}
          className="bg-[#FDE767] text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors"
        >
          View Full Menu
        </button>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 md:py-32 bg-[#0F0F0F] text-gray-300">
    <div className="container mx-auto px-6 lg:px-8">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="md:w-1/2 w-full group overflow-hidden rounded-lg shadow-2xl">
          <img
            src={aboutImgUrl}
            alt="The Friendship Pub Exterior"
            loading="lazy"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-[#FDE767]"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            About Us
          </h2>
          <p className="mb-4 text-lg leading-relaxed">
            The Friendship Pub, an English pub-inspired establishment, offers a
            wide selection of food and drinks. The menu features a variety of
            main dishes, including Smoked Beef Ribs, Shepherd's Pie, and Crispy
            Pata. Guests can also choose from a range of salads, such as the
            Chef Salad and the signature Pub Salad. Pasta options include
            Carbonara and Lasagna. The drink menu offers a comprehensive
            selection, including cocktails, whiskey, and a variety of beers. We
            serve draft beers on tap, with varieties that sometimes change.
            Currently available draft beers include Hoegaarden Rosée (3% ABV)
            and Sapporo Premium Beer (5% ABV), as well as Mixtape Pale Ale (5.5%
            ABV) and German Märzen (6% ABV).
          </p>
        </div>
      </div>
    </div>
  </section>
);

const foodMenuPdf = "/menus/food-menu.pdf";
const drinksMenuPdf = "/menus/drinks-menu.pdf";

// --- NEW: Data for the new cocktail gallery ---
const cocktailImages = [
  { src: cocktail1 },
  { src: cocktail2 },
  { src: cocktail3 },
  { src: cocktail4 },
  { src: cocktail5 },
  { src: cocktail6 },
];

const MenuSection = () => {
  const handlePdfClick = () => {
    window.open(foodMenuPdf, "_blank");
  };

  return (
    <section id="menu" className="py-20 md:py-32 bg-[#141414]">
      <div className="container mx-auto px-6 lg:px-8">
        <div>
          <h3
            className="text-4xl md:text-5xl text-[#FDE767] font-bold text-left mb-8"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            The Pub's Featured Cocktails
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {cocktailImages.map((cocktail, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={cocktail.src}
                  alt={cocktail.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-white text-lg font-semibold tracking-wide">
                    {cocktail.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center mt-16 md:mt-24">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#FDE767]"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            Our Menu
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            View our full selection of food and drinks.
          </p>
          <div className="flex justify-center mt-8">
            <button
              onClick={handlePdfClick}
              className="bg-[#FDE767] text-black font-bold py-3 px-8 rounded-lg hover:bg-yellow-300 transition-colors"
            >
              View Full Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#0F0F0F]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#FDE767]"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            Gallery
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            A glimpse into The Friendship Pub.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg" ref={emblaRef}>
            <div className="flex">
              {galleryImages.map((src, index) => (
                <div
                  className="flex-grow-0 flex-shrink-0 w-full min-w-0"
                  key={index}
                >
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    loading="lazy"
                    className="w-full h-[300px] md:h-[500px] object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition-colors z-10"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition-colors z-10"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

const GOOGLE_FORM_ACTION_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfvtYWkuc_lzieJuueivrZTbbYIsbmeF2QMrXC26nVvYKrw0A/formResponse";
const FIELD_NAME = "entry.1493290342";
const FIELD_EMAIL = "entry.2088171504";
const FIELD_MESSAGE = "entry.1574605189";

const ContactSection = () => {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);

    const form = e.target;
    const data = new FormData(form);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: data,
    }).then(() => {
      setSending(false);
      setSent(true);
      form.reset();
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#141414] text-gray-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#FDE767]"
            style={{ fontFamily: "Times New Roman, Times, serif" }}
          >
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            We'd love to hear from you. Drop by or send us a message.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 w-full bg-[#0F0F0F] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name={FIELD_NAME}
                  required
                  className="w-full bg-[#222] text-white rounded border border-gray-600 focus:border-[#FDE767] focus:ring-2 focus:ring-[#FDE767]/50 p-3 outline-none transition-colors"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name={FIELD_EMAIL}
                  required
                  className="w-full bg-[#222] text-white rounded border border-gray-600 focus:border-[#FDE767] focus:ring-2 focus:ring-[#FDE767]/50 p-3 outline-none transition-colors"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name={FIELD_MESSAGE}
                  rows="5"
                  required
                  className="w-full bg-[#222] text-white rounded border border-gray-600 focus:border-[#FDE767] focus:ring-2 focus:ring-[#FDE767]/50 p-3 outline-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-[#FDE767] text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                {sending ? "Sending..." : "Send"}
              </button>
              {sent && (
                <p className="text-[#FDE767] text-center mt-4">
                  Message sent! Thank you.
                </p>
              )}
            </form>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#0F0F0F] p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
              <p className="text-lg mb-2">
                Unit B & C, TopG 2 Building, Friendship Highway, Pampang,
                Angeles City, Pampanga
              </p>
              <p className="text-lg text-gray-400">Philippines</p>
              <h3 className="text-2xl font-bold text-white mt-6 mb-4">Hours</h3>
              <p className="text-lg">Tuesday - Sunday: 4pm - 1am</p>
              <p className="text-lg">Monday: Closed</p>
            </div>
            <div className="h-64 lg:h-80 w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3851.216112902587!2d120.5573954433203!3d15.146471566420342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f314b4c2cd3f%3A0xb15c30c1060444f1!2sThe%20Friendship%20Pub!5e0!3m2!1sen!2sph!4v1754562554718!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black text-gray-500 py-3">
    <div className="container mx-auto px-6 lg:px-8 text-center">
      <p>
        © {new Date().getFullYear()} The Friendship Pub. All Rights Reserved.
      </p>
      <div className="flex justify-center space-x-6 mt-4">
        <a
          href="https://www.facebook.com/profile.php?id=61577305734801"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#FDE767] transition-colors"
        >
          <FacebookIcon className="w-5 h-5 fill-current" />
        </a>
        <a
          href="https://www.instagram.com/thefriendship.pub/?igsh=eXhuoWxmcWI0eGoz"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#FDE767] transition-colors"
        >
          <InstagramIcon className="w-5 h-5 fill-current" />
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "menu", "gallery", "contact"];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      let currentSection = "home";

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          if (scrollY >= elementTop - windowHeight / 3) {
            currentSection = sectionId;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "menu", label: "Menu" },
    { id: "gallery", label: "Gallery" },
    { id: "contact", label: "Contact Us" },
  ];

  return (
    <div className="bg-[#0F0F0F] min-h-screen">
      <SocialSidebar />

      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 transition-all duration-300">
        <nav className="container mx-auto px-6 lg:px-8 py-3 flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center space-x-3"
          >
            <img
              src={logoUrl}
              alt="The Friendship Pub Logo"
              className="h-10 w-10 md:h-12 md:w-12"
            />
            <span
              className="text-white font-bold text-lg hidden sm:block"
              style={{ fontFamily: "Times New Roman, Times, serif" }}
            >
              The Friendship Pub
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                isActive={activeSection === item.id}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </nav>

        {isOpen && (
          <div className="md:hidden bg-black bg-opacity-90">
            <div className="flex flex-col items-center space-y-6 py-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  isActive={activeSection === item.id}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <HomeSection />
        <AboutSection />
        <MenuSection />
        <GallerySection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
