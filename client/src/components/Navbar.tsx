import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { scrollToSection } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <span className="font-[Bangers] text-2xl text-[#FF3B3F]">ComicVerse</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }} 
              className="font-[Comic Neue] font-bold text-[#212121] hover:text-[#FF3B3F] transition-colors cursor-pointer"
            >
              Home
            </a>
            <a 
              href="#events" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('events');
              }} 
              className="font-[Comic Neue] font-bold text-[#212121] hover:text-[#FF3B3F] transition-colors cursor-pointer"
            >
              Events
            </a>
            <a 
              href="#collaborators" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('collaborators');
              }} 
              className="font-[Comic Neue] font-bold text-[#212121] hover:text-[#FF3B3F] transition-colors cursor-pointer"
            >
              Collaborators
            </a>
            <a 
              href="#guests" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('guests');
              }} 
              className="font-[Comic Neue] font-bold text-[#212121] hover:text-[#FF3B3F] transition-colors cursor-pointer"
            >
              Guests
            </a>
            <a 
              href="#team" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('team');
              }} 
              className="font-[Comic Neue] font-bold text-[#212121] hover:text-[#FF3B3F] transition-colors cursor-pointer"
            >
              Team
            </a>
            <a 
              href="#contact" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }} 
              className="font-[Comic Neue] font-bold px-4 py-2 rounded-md bg-[#FF3B3F] text-white hover:bg-opacity-90 transition-colors cursor-pointer"
            >
              Contact
            </a>
          </div>
          
          <button 
            className="block md:hidden focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="text-2xl text-[#212121]" /> : <Menu className="text-2xl text-[#212121]" />}
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
              className="md:hidden py-4"
            >
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('home');
                  closeMenu();
                }} 
                className="block font-[Comic Neue] font-bold py-2 text-[#212121] hover:text-[#FF3B3F] cursor-pointer"
              >
                Home
              </a>
              <a 
                href="#events" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('events');
                  closeMenu();
                }} 
                className="block font-[Comic Neue] font-bold py-2 text-[#212121] hover:text-[#FF3B3F] cursor-pointer"
              >
                Events
              </a>
              <a 
                href="#collaborators" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('collaborators');
                  closeMenu();
                }} 
                className="block font-[Comic Neue] font-bold py-2 text-[#212121] hover:text-[#FF3B3F] cursor-pointer"
              >
                Collaborators
              </a>
              <a 
                href="#guests" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('guests');
                  closeMenu();
                }} 
                className="block font-[Comic Neue] font-bold py-2 text-[#212121] hover:text-[#FF3B3F] cursor-pointer"
              >
                Guests
              </a>
              <a 
                href="#team" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('team');
                  closeMenu();
                }} 
                className="block font-[Comic Neue] font-bold py-2 text-[#212121] hover:text-[#FF3B3F] cursor-pointer"
              >
                Team
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                  closeMenu();
                }} 
                className="block font-[Comic Neue] font-bold py-2 text-[#FF3B3F] cursor-pointer"
              >
                Contact
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
