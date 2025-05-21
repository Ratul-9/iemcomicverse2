import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "events", label: "Events" },
    { id: "collaborators", label: "Collaborators" },
    { id: "guests", label: "Guests" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact", isButton: true }
  ];

  return (
    <header className="fixed w-full z-50">
      {/* Added gradient background for better logo contrast */}
      <div className="bg-gradient-to-r from-white to-gray-50 shadow-md">
        <div className="container mx-auto px-4">
          {/* Adjusted height for better proportions */}
          <nav className="flex items-center justify-between py-4 h-20">
            {/* Logo container with proper padding and sizing */}
            <div className="flex items-center">
              <div className="p-2 rounded-lg overflow-hidden">
                <img
                  src={logo}
                  alt="ComicVerse Logo"
                  className="h-14 w-auto object-contain cursor-pointer hover:opacity-90 transition-all duration-300"
                  onClick={() => scrollToSection("home")}
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 h-full">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`font-[Comic Neue] font-bold text-lg ${
                    item.isButton
                      ? "px-5 py-3 rounded-md bg-[#FF3B3F] text-white hover:bg-[#ff5154] shadow-md"
                      : "text-[#212121] hover:text-[#FF3B3F]"
                  } transition-colors cursor-pointer`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button - improved touch target */}
            <button
              className="block md:hidden focus:outline-none p-3"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 text-[#212121]" />
              ) : (
                <Menu className="h-7 w-7 text-[#212121]" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white shadow-inner"
              >
                <div className="flex flex-col space-y-3 px-4 py-3">
                  {navItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                        closeMenu();
                      }}
                      className={`font-[Comic Neue] font-bold text-lg py-3 px-4 rounded ${
                        item.isButton
                          ? "bg-[#FF3B3F] text-white text-center shadow-sm hover:bg-[#ff5154]"
                          : "text-[#212121] hover:bg-gray-100"
                      } transition-colors`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Navbar;