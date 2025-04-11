import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

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
            <span className="font-[Bangers] text-2xl text-[#FF3B3F]">College ComicFest</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-[Comic Neue] font-bold text-[#212121] hover:text-[#FF3B3F] transition-colors">Home</a>
            <a href="#events" className="font-[Comic Neue] font-bold text-[#212121] hover:text-[#FF3B3F] transition-colors">Events</a>
            <a href="#collaborators" className="font-[Comic Neue] font-bold text-[#212121] hover:text-[#FF3B3F] transition-colors">Collaborators</a>
            <a href="#guests" className="font-[Comic Neue] font-bold text-[#212121] hover:text-[#FF3B3F] transition-colors">Guests</a>
            <a href="#team" className="font-[Comic Neue] font-bold text-[#212121] hover:text-[#FF3B3F] transition-colors">Team</a>
            <a href="#contact" className="font-[Comic Neue] font-bold px-4 py-2 rounded-md bg-[#FF3B3F] text-white hover:bg-opacity-90 transition-colors">Contact</a>
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
              <a href="#home" onClick={closeMenu} className="block font-[Comic Neue] font-bold py-2 text-[#212121] hover:text-[#FF3B3F]">Home</a>
              <a href="#events" onClick={closeMenu} className="block font-[Comic Neue] font-bold py-2 text-[#212121] hover:text-[#FF3B3F]">Events</a>
              <a href="#collaborators" onClick={closeMenu} className="block font-[Comic Neue] font-bold py-2 text-[#212121] hover:text-[#FF3B3F]">Collaborators</a>
              <a href="#guests" onClick={closeMenu} className="block font-[Comic Neue] font-bold py-2 text-[#212121] hover:text-[#FF3B3F]">Guests</a>
              <a href="#team" onClick={closeMenu} className="block font-[Comic Neue] font-bold py-2 text-[#212121] hover:text-[#FF3B3F]">Team</a>
              <a href="#contact" onClick={closeMenu} className="block font-[Comic Neue] font-bold py-2 text-[#FF3B3F]">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
