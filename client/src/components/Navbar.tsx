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
    { id: "contact", label: "Contact", isButton: true },
  ];

  return (
    <header className="fixed w-full z-50">
      <div className="bg-gradient-to-r from-yellow-100 via-white to-pink-100 shadow-[0_4px_10px_rgba(0,0,0,0.15)] border-b border-black">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between py-4 h-20 relative">
            {/* Logo Wrapper */}
            <div className="relative">
              <div className="flex items-center min-w-[100px]">
                <img
                  src={logo}
                  alt="ComicVerse Logo"
                  className="h-24 w-auto object-contain cursor-pointer hover:scale-105 transition-transform duration-300 drop-shadow-md"
                  onClick={() => scrollToSection("home")}
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  whileHover={{ scale: 1.1 }}
                  className={`relative group font-[Comic Neue] font-bold text-lg tracking-wide ${
                    item.isButton
                      ? "px-5 py-2 rounded-full bg-red-500 text-white border-2 border-black shadow-md hover:bg-red-600 transition-all cursor-pointer"
                      : "text-[#212121] hover:text-blue-600 transition-colors cursor-pointer"
                  }`}
                >
                  {item.label}
                  {!item.isButton && (
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="block md:hidden focus:outline-none p-3 z-50"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-7 w-7 text-black" />
              ) : (
                <Menu className="h-7 w-7 text-black" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="md:hidden bg-white border-t border-black shadow-inner rounded-b-lg"
              >
                <div className="flex flex-col space-y-3 px-4 py-3">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                        closeMenu();
                      }}
                      whileHover={{ scale: 1.05, boxShadow: "0px 4px 15px rgba(0,0,0,0.2)" }}
                      className={`font-[Comic Neue] font-extrabold text-lg py-3 px-4 rounded-lg ${
                        item.isButton
                          ? "bg-red-500 text-white text-center border-2 border-black shadow hover:bg-red-600 transition-all cursor-pointer"
                          : "text-[#212121] hover:bg-yellow-100 transition-colors cursor-pointer"
                      }`}
                    >
                      {item.label}
                    </motion.a>
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
