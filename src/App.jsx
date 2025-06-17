import React, { useState, useEffect } from "react";
// UPDATED: Removed deprecated brand icons from lucide-react
import { Menu as MenuIcon, X } from "lucide-react";
import myLogo from "./assets/images/logo.png";
import BgUrl from "./assets/images/hero.jpeg";
import pubExt from "./assets/images/exterior.jpeg";
import gallery1 from "./assets/images/att.jUg4C8OP-sTlxHioL5j9O634Zb2sD7TWarU2Q-gF314.jpeg";
import gallery2 from "./assets/images/att.klS1MLfGwDwzCttcJV0r1LSbZ6vbYrsvRlZi-QbvyPk.jpeg";
import gallery3 from "./assets/images/att.ou2TH2_BMacWTu0gw2F0Kh9hKeDfQwvHQSLZxuSSTP8.jpeg";
import gallery4 from "./assets/images/att.PlqwUQZFH1EnhwxHMQtZvuL6mm3m9reBqn2KZdsa02w.jpeg";
import gallery5 from "./assets/images/att.SqW3A_UG9oXD8FuadC98IOvuXE7YKNFqJmCUV1Nybu0.jpeg";
import gallery6 from "./assets/images/att.7w2GTOgDGMWBeIpSywtr4pm8MMXW4zIlWH_Vxykx0MY.jpeg";
// --- Placeholder Images ---
// You will replace these URLs later with your actual photos.
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

// --- NEW: SVG Icon Components (as recommended) ---

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

const InstagramIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>Instagram</title>
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126s1.338.935 2.126 1.234c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.717 2.126-1.384s.935-1.338 1.234-2.126c.296-.765.499-1.636.558-2.913C23.988 15.667 24 15.26 24 12s-.015-3.667-.072-4.947c-.06-1.277-.262-2.148-.558-2.913-.306-.789-.717-1.459-1.384-2.126S20.65.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.06 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.381-.42.419-.819.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.074c-1.17-.06-1.805-.249-2.227-.413-.562-.217-.96-.477-1.381-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.07-4.85c.06-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.381.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413C8.415 2.175 8.797 2.16 12 2.16zm0 5.48c-3.556 0-6.44 2.884-6.44 6.44s2.884 6.44 6.44 6.44 6.44-2.884 6.44-6.44-2.884-6.44-6.44-6.44zm0 10.74c-2.37 0-4.3-1.93-4.3-4.3s1.93-4.3 4.3-4.3 4.3 1.93 4.3 4.3-1.93 4.3-4.3 4.3zm6.43-11.845c-.83 0-1.505.675-1.505 1.505s.675 1.505 1.505 1.505 1.505-.675 1.505-1.505-.675-1.505-1.505-1.505z" />
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg
    className={className}
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title>TikTok</title>
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.05-4.84-.94-6.37-2.96-2.14-2.87-2.22-6.81-.16-9.78 1.05-1.49 2.37-2.64 3.9-3.41.02-.37.04-.73.05-1.1v-3.3c-.46.04-.93.07-1.4.14-1.7.23-3.29.83-4.69 1.86-.03.02-.06.04-.08.06-.02.02-.03.03-.05.04v-4.02c.02-.02.04-.03.06-.05.15-.09.3-.18.46-.26.83-.44 1.7-1.07 2.48-1.63 1.97-1.44 4.59-2.22 7.23-2.18.02 0 .04 0 .06.01z" />
  </svg>
);

// --- Reusable Components ---

const SocialSidebar = () => (
  <div className="hidden md:flex flex-col items-center justify-center space-y-6 fixed left-0 top-0 h-screen w-16 bg-black/50 backdrop-blur-sm z-40">
    <a
      href="#"
      className="text-gray-400 hover:text-[#FDE767] transition-colors"
    >
      <FacebookIcon className="w-6 h-6 fill-current" />
    </a>
    <a
      href="#"
      className="text-gray-400 hover:text-[#FDE767] transition-colors"
    >
      <InstagramIcon className="w-6 h-6 fill-current" />
    </a>
    <a
      href="#"
      className="text-gray-400 hover:text-[#FDE767] transition-colors"
    >
      <TikTokIcon className="w-6 h-6 fill-current" />
    </a>
  </div>
);

// UPDATED NavLink to accept an `isActive` prop to change its style
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
        Where good friends meet for great times. Your neighborhood spot for
        craft drinks and heartfelt conversations.
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
            Welcome to The Friendship Pub, a place born from a simple idea:
            creating a warm, inviting space for friends to gather, share
            stories, and make memories. Our roots are deeply planted in the
            community, offering a genuine escape where the hustle of the outside
            world fades away.
          </p>
          <p className="text-lg leading-relaxed">
            From our carefully selected craft beers and artisanal cocktails to
            our comforting, locally-sourced menu, every detail is curated with
            care. We believe a pub is more than just a bar—it's the heart of the
            neighborhood. Come in, find a cozy corner, and become part of our
            story.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const MenuSection = () => {
  const menuCategories = [
    {
      name: "Pub Grub",
      items: [
        {
          name: "Friendship Fries",
          price: "$8",
          desc: "Crispy golden fries, seasoned with our secret spice blend.",
        },
        {
          name: "Golden Rooster Wings",
          price: "$15",
          desc: "A dozen crispy wings tossed in your choice of house-made sauce.",
        },
        {
          name: "The Pub Burger",
          price: "$17",
          desc: "Juicy beef patty, cheddar, lettuce, tomato, and our signature sauce on a brioche bun.",
        },
      ],
    },
    {
      name: "Craft Cocktails",
      items: [
        {
          name: "The Friendly Spirit",
          price: "$14",
          desc: "Gin, elderflower liqueur, fresh lime, and a splash of prosecco.",
        },
        {
          name: "Golden Hour Old Fashioned",
          price: "$16",
          desc: "Bourbon, demerara syrup, angostura bitters, with an orange twist.",
        },
        {
          name: "Pub-side Paloma",
          price: "$13",
          desc: "Tequila, fresh grapefruit and lime juice, topped with soda.",
        },
      ],
    },
  ];

  return (
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
            Crafted with care, designed to be shared. Explore our selection of
            food and drinks.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          {menuCategories.map((category) => (
            <div key={category.name} className="mb-12">
              <h3 className="text-3xl font-semibold text-white mb-6 border-b-2 border-[#FDE767]/50 pb-2">
                {category.name}
              </h3>
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex justify-between items-start"
                  >
                    <div>
                      <h4 className="text-xl font-bold text-gray-200">
                        {item.name}
                      </h4>
                      <p className="text-gray-400 text-sm italic">
                        {item.desc}
                      </p>
                    </div>
                    <p className="text-xl font-bold text-[#FDE767] pl-4">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => (
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
          A glimpse into the heart of The Friendship Pub.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

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
              123 Friendship Lane, Angeles City, Pampanga
            </p>
            <p className="text-lg text-gray-400">Philippines</p>
            <h3 className="text-2xl font-bold text-white mt-6 mb-4">Hours</h3>
            <p className="text-lg">Monday - Thursday: 4pm - 12am</p>
            <p className="text-lg">Friday - Sunday: 2pm - 2am</p>
          </div>
          <div className="h-64 lg:h-80 w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d123204.0322047029!2d120.50579964344427!3d15.15535874984218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396f261a99a3435%3A0x185f2d7f8c4377b8!2sAngeles%2C%20Pampanga!5e0!3m2!1sen!2sph!4v1687181045268!5m2!1sen!2sph"
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
        <a href="#" className="hover:text-[#FDE767] transition-colors">
          <FacebookIcon className="w-5 h-5 fill-current" />
        </a>
        <a href="#" className="hover:text-[#FDE767] transition-colors">
          <InstagramIcon className="w-5 h-5 fill-current" />
        </a>
        <a href="#" className="hover:text-[#FDE767] transition-colors">
          <TikTokIcon className="w-5 h-5 fill-current" />
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

  // UPDATED scroll effect to be more reliable and fix the warning
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "menu", "gallery", "contact"];
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Default to 'home' if at the very top
      let currentSection = "home";

      // Loop through sections to find the current one
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const elementTop = element.offsetTop;
          // A section is considered active if its top is within a certain threshold of the viewport's top
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

          {/* UPDATED Desktop Navigation to use activeSection */}
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

        {/* UPDATED Mobile Menu to use activeSection */}
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
