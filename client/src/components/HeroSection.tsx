import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import logo1 from './logo1.png';
import bg1 from './bg1.png';
import cmcLogo from './cmc.png';
import brochure from './brochure.png';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isComicHovered, setIsComicHovered] = useState(false);

  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${bg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Background grid overlay */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
          animate={{ backgroundPosition: ["0px 0px", "50px 50px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Radial spotlight effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,235,59,0.1) 0%, transparent 50%)`
        }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* LEFT TEXT BLOCK: spans 8/12 */}
          <motion.div
            style={{ y: textY }}
            className="text-white relative mt-12 md:mt-16 md:col-span-8"
          >
            {/* Logo and date */}
            <motion.div
              className="mb-6 cursor-pointer flex flex-col items-center justify-start"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
              whileHover={{
                scale: 1.05,
                rotate: [0, 2, -2, 0],
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
            >
              <div className="relative flex items-center justify-center">
                <motion.img
                  src={cmcLogo}
                  alt="CMC Logo"
                  className="h-24 md:h-32 lg:h-30 w-auto object-contain"
                  style={{
                    filter: isHovered
                      ? "drop-shadow(3px 3px 0 rgba(0,0,0,0.3))"
                      : "drop-shadow(2px 2px 0 rgba(0,0,0,0.2))",
                    transition: "filter 0.3s ease"
                  }}
                  animate={{
                    filter: [
                      "drop-shadow(2px 2px 0 rgba(0,0,0,0.2))",
                      "drop-shadow(3px 3px 0 rgba(0,0,0,0.3))",
                      "drop-shadow(2px 2px 0 rgba(0,0,0,0.2))"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#FFEB3B]/20 via-[#FF3B3F]/20 to-[#00BCD4]/20 rounded-lg blur-lg -z-10"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: -30, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex gap-4 md:gap-6 justify-center px-2"
              >
                <div className="bg-transparent text-white px-4 md:px-6 py-1 md:py-2 rounded-full font-akira text-lg md:text-xl relative overflow-hidden max-w-full text-center">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />

                  <div className="relative z-10 whitespace-nowrap">
                    <span 
                      className="absolute text-black font-akira"
                      style={{
                        left: '2px',
                        top: '2px',
                        zIndex: -3,
                        display: 'inline-block',
                        whiteSpace: 'pre',
                      }}
                    >
                      19TH – 20TH JULY, 2025
                    </span>

                    <span className="relative text-white font-akira">
                      19TH – 20TH JULY, 2025
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start pl-0 sm:pl-1 mt-12 sm:mt-16"
            >
              <motion.div whileHover={{ scale: 1.05, rotate: 1 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button asChild className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-[#FF3B3F] to-[#FF6B6F] text-white font-bold rounded-xl hover:from-[#FF6B6F] hover:to-[#FF3B3F] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group">
                  <a href="#events" className="flex justify-center">
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                    />
                    <span className="font-akira relative z-10 flex items-center gap-2 justify-center">
                      Explore Events
                    </span>
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Button asChild className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-[#FFEB3B] to-[#FFF176] text-[#212121] font-bold rounded-xl hover:from-[#FFF176] hover:to-[#FFEB3B] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group">
                  <a onClick={() => alert('Coming Soon')} target="_blank" rel="noreferrer" className="flex justify-center cursor-pointer">
                    <motion.div
                      className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                    />
                    <span className="font-akira relative z-10 flex items-center gap-2 justify-center">
                      Register Now
                    </span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
            </motion.div>

          {/* RIGHT IMAGE BLOCK - BOOK STYLE LAYOUT */}
              <motion.div
                className="relative flex-1 flex items-center justify-end h-full w-full max-w-xl mt-10 md:mt-0 pr-16 md:pr-24 ml-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative w-full h-[400px] flex items-center justify-end">
                  {/* COMIC BOOK (background page) - More inclined */}
                  <motion.div
                    className="absolute z-30"
                    initial={{ scale: 0.8, rotate: -15, x: -40, y: 20, opacity: 0 }}
                    animate={{ scale: 1, rotate: -12, x: -30, y: 15, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.6,
                      type: "spring",
                      stiffness: 100,
                      damping: 10
                    }}
                    whileHover={{
                      rotate: -14,
                      y: 10,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      width: "280px",
                      height: "360px",
                      left: "90px" // Push more to the right
                    }}
                  >
                    <div className="relative bg-white p-4 w-full h-full overflow-hidden shadow-lg rounded-xl border-4 border-white">
                      <img 
                        src={logo1} 
                        alt="Comic Book" 
                        className="w-full h-full object-cover rounded-lg" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FFEB3B]/10 via-[#FF3B3F]/10 to-[#00BCD4]/10" />
                    </div>
                  </motion.div>

                  {/* BROCHURE (foreground page) - Positioned more to the right */}
                  <motion.div
                    className="absolute z-40"
                    initial={{ scale: 0.8, rotate: 5, x: 40, y: 10, opacity: 0 }}
                    animate={{ scale: 1, rotate: 3, x: 0, y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.8,
                      type: "spring",
                      stiffness: 100,
                      damping: 10
                    }}
                    whileHover={{
                      rotate: 5,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      width: "280px",
                      height: "360px",
                      left: "90px" // Positioned further right
                    }}
                  >
                    {/* Brochure label - Now clearly visible */}
                    <motion.div
                      className="flex justify-center mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                      style={{
                        position: 'absolute',
                        top: '-50px',
                        right: '0',
                        left: '0'
                      }}
                    >
                      <motion.div 
                        className="bg-transparent text-white px-6 py-2 rounded-full font-akira font-bold relative overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        />
                        <button onClick={() => window.open("https://drive.google.com/file/d/163STf4jfMOpw54EiizIJmtPM0c2bNeme/view?usp=drive_link", "_blank")}>
                          <span className="relative z-10 text-xs whitespace-nowrap">Tap to see our Brochure!!</span>
                        </button>
                      </motion.div>
                    </motion.div>

                    {/* Brochure content */}
                    <div 
                      className="relative cursor-pointer w-full h-full"
                      onClick={() => window.open("https://drive.google.com/file/d/1_2FG0j1_Q4lrwkAA2K4j-3-1WXSNFqr6/view?usp=drive_link", "_blank")}
                    >
                      <div className="relative bg-white p-4 w-full h-full overflow-hidden shadow-xl rounded-xl border-4 border-white transform rotate-1">
                        <img 
                          src={brochure} 
                          alt="Event Brochure" 
                          className="w-full h-full object-cover rounded-lg" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FF3B3F]/15 to-[#FFEB3B]/25 mix-blend-multiply" />
                        <div className="absolute inset-0 bg-gradient-to-tl from-[#00BCD4]/10 to-transparent mix-blend-screen" />
                        <div className="absolute inset-2 border-2 border-white/50 rounded-md" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-0 right-0 flex justify-center px-4"
        >
          <motion.a
            href="#events"
            className="text-white flex flex-col items-center group cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm font-[Comic Neue] mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
              Scroll for more
            </span>
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={36} className="drop-shadow-lg" />
            </motion.div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
