import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { Menu as MenuIcon, X, ArrowLeft, ArrowRight } from "lucide-react";

// --- Local Image Imports ---
// These paths will work correctly on your local machine.
import myLogo from "./assets/images/logo.png";
import BgUrl from "./assets/images/hero.jpeg";
import pubExt from "./assets/images/exterior.jpeg";
import gallery1 from "./assets/images/att.jUg4C8OP-sTlxHioL5j9O634Zb2sD7TWarU2Q-gF314.jpeg";
import gallery2 from "./assets/images/att.klS1MLfGwDwzCttcJV0r1LSbZ6vbYrsvRlZi-QbvyPk.jpeg";
import gallery3 from "./assets/images/att.ou2TH2_BMacWTu0gw2F0Kh9hKeDfQwvHQSLZxuSSTP8.jpeg";
import gallery4 from "./assets/images/att.PlqwUQZFH1EnhwxHMQtZvuL6mm3m9reBqn2KZdsa02w.jpeg";
import gallery5 from "./assets/images/att.SqW3A_UG9oXD8FuadC98IOvuXE7YKNFqJmCUV1Nybu0.jpeg";
import gallery6 from "./assets/images/att.7w2GTOgDGMWBeIpSywtr4pm8MMXW4zIlWH_Vxykx0MY.jpeg";

// --- Constants using your local images ---
const logoUrl = myLogo;
const heroBgUrl = BgUrl;
const aboutImgUrl = pubExt;
const galleryImages = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
];

// --- SVG Icon Components ---

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

// --- Reusable Components ---

const SocialSidebar = () => (
    <div className="hidden md:flex flex-col items-center justify-center space-y-6 fixed left-0 top-0 h-screen w-16 bg-black/50 backdrop-blur-sm z-40">
      <a
        href="https://www.facebook.com/profile.php?id=61577305734801"
        target="_blank" rel="noopener noreferrer"
        className="text-gray-400 hover:text-[#FDE767] transition-colors"
      >
        <FacebookIcon className="w-6 h-6 fill-current" />
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
          style={{ fontFamily: "'Cinzel', serif", color: "#FDE767" }}
        >
          The Friendship Pub
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl font-light text-gray-200 max-w-2xl mx-auto">
          We are opening soon!
        </p>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section id="about" className="py-20 md:py-32 bg-[#0F0F0F] text-gray-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div className="md:w-1/2 w-full">
            <img
              src={aboutImgUrl}
              alt="The Friendship Pub Exterior"
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 w-full">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-[#FDE767]"
              style={{ fontFamily: "'Cinzel', serif" }}
            >
              Our Story
            </h2>
            <p className="mb-4 text-lg leading-relaxed">
              Every great story has a beginning. Ours started in a small pub, where friends became family over shared drinks and stories. That simple idea of connection has now found a new home. We've evolved from a cherished local hideaway into a full-service destination on Friendship Highway, ready to welcome a new generation of friends into our story.
            </p>
            {/* <p className="text-lg leading-relaxed">
              From our carefully selected craft beers and artisanal cocktails to
              our comforting, locally-sourced menu, every detail is curated with
              care. We believe a pub is more than just a bar—it's the heart of the
              neighborhood. Come in, find a cozy corner, and become part of our
              story.
            </p> */}
          </div>
        </div>
      </div>
    </section>
  );
  
const MenuSection = () => (
    <section id="menu" className="py-20 md:py-32 bg-[#141414]">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#FDE767]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Our Menu
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Coming soon!
          </p>
        </div>
      </div>
    </section>
  );

const GallerySection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    return (
        <section id="gallery" className="py-20 md:py-32 bg-[#0F0F0F]">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-5xl font-bold text-[#FDE767]"
                        style={{ fontFamily: "'Cinzel', serif" }}
                    >
                        Gallery
                    </h2>
                    <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
                        A glimpse into the proposed design of The Friendship Pub.
                    </p>
                </div>
                
                <div className="relative max-w-4xl mx-auto">
                    <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                        <div className="flex">
                            {galleryImages.map((src, index) => (
                                <div className="flex-grow-0 flex-shrink-0 w-full min-w-0" key={index}>
                                    <img
                                        src={src}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-[300px] md:h-[500px] object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={scrollPrev} className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition-colors z-10">
                        <ArrowLeft size={24} />
                    </button>
                    <button onClick={scrollNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/80 transition-colors z-10">
                        <ArrowRight size={24} />
                    </button>
                </div>
            </div>
        </section>
    );
};


const ContactSection = () => (
    <section id="contact" className="py-20 md:py-32 bg-[#141414] text-gray-300">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#FDE767]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Get In Touch
          </h2>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            We'd love to hear from you. Drop by or send us a message.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2 w-full bg-[#0F0F0F] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
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
                  className="w-full bg-[#222] text-white rounded border border-gray-600 focus:border-[#FDE767] focus:ring-2 focus:ring-[#FDE767]/50 p-3 outline-none transition-colors"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full bg-[#222] text-white rounded border border-gray-600 focus:border-[#FDE767] focus:ring-2 focus:ring-[#FDE767]/50 p-3 outline-none transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FDE767] text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Send
              </button>
            </form>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#0F0F0F] p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Visit Us</h3>
              <p className="text-lg mb-2">
                Unit B & C, TopG 2 Building, Friendship Highway, Pampang, Angeles City, Pampanga
              </p>
              <p className="text-lg text-gray-400">Philippines</p>
              <h3 className="text-2xl font-bold text-white mt-6 mb-4">Hours</h3>
              <p className="text-lg">Monday - Sunday: 4pm - 2am</p>
            </div>
            <div className="h-64 lg:h-80 w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1525.021028701048!2d120.55909288863625!3d15.146522774944936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f3044a8d0571%3A0x651fb43b5997235!2sTopG%202!5e0!3m2!1sen!2sph!4v1719168037618!5m2!1sen!2sph"
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

const Footer = () => (
    <footer className="bg-black text-gray-500 py-12">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} The Friendship Pub. All Rights
          Reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
              <a
        href="https://www.facebook.com/profile.php?id=61577305734801"
        target="_blank" rel="noopener noreferrer"
        className="text-gray-400 hover:text-[#FDE767] transition-colors"
      >
            <FacebookIcon className="w-5 h-5 fill-current" />
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Roboto:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <SocialSidebar />

      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 transition-all duration-300">
        <nav className="container mx-auto px-6 lg:px-8 py-4 flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center space-x-3"
          >
            <img
              src={logoUrl}
              alt="The Friendship Pub Logo"
              className="h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-[#FDE767]"
            />
            <span
              className="text-white font-bold text-lg hidden sm:block"
              style={{ fontFamily: "'Cinzel', serif" }}
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
