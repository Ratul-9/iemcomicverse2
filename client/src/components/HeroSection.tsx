import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Star, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import logo1 from './logo1.png';
import bg1 from './bg1.png';
import cmcLogo from './cmc.png';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'scroll'
      }}
    >
      {/* Animated Grid Pattern */}
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
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Interactive Light Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,235,59,0.1) 0%, transparent 50%)`
        }}
      />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT TEXT BLOCK */}
          <motion.div style={{ y: textY }} className="text-white relative">
            <motion.div
              initial={{ opacity: 0, y: -30, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-4"
            >
              <div className="bg-[#FFEB3B] text-[#212121] px-6 py-2 rounded-full font-[Comic Neue] font-bold relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
                <span className="relative z-10">July 19 to 20, 2025</span>
              </div>
            </motion.div>

            <motion.div
              className="mb-6 cursor-pointer flex justify-start"
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
              <div className="relative -ml-10 md:-ml-12 flex items-center justify-center">
                <motion.img
                  src={cmcLogo}
                  alt="CMC Logo"
                  className="h-32 md:h-40 w-auto object-contain"
                  style={{
                    filter: isHovered
                      ? "drop-shadow(0 0 30px rgba(255,235,59,0.6)) drop-shadow(3px 3px 0 rgba(0,0,0,0.3))"
                      : "drop-shadow(0 0 15px rgba(255,235,59,0.3)) drop-shadow(2px 2px 0 rgba(0,0,0,0.2))",
                    transition: "filter 0.3s ease"
                  }}
                  animate={{
                    filter: [
                      "drop-shadow(0 0 15px rgba(255,235,59,0.3))",
                      "drop-shadow(0 0 25px rgba(255,235,59,0.5))",
                      "drop-shadow(0 0 15px rgba(255,235,59,0.3))"
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
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="font-akira text-lg mb-8 leading-relaxed"
            >
              {/* Join us for the most <span className="text-[#FFEB3B] font-bold">exciting</span> comic carnival on campus!
              Two days filled with <span className="text-[#FFEB3B] font-bold">amazing guests</span>, panels,
              cosplay contests, and <span className="text-[#00BCD4] font-bold">much more!</span> */}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div whileHover={{ scale: 1.05, rotate: 1 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="px-8 py-6 h-auto bg-gradient-to-r from-[#FF3B3F] to-[#FF6B6F] text-white font-bold rounded-xl hover:from-[#FF6B6F] hover:to-[#FF3B3F] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group">
                  <a href="#events">
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                    />
                    <span className="font-akira relative z-10 flex items-center gap-2">
                      Explore Events
                    </span>
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, rotate: -1 }} whileTap={{ scale: 0.95 }}>
                <Button asChild className="px-8 py-6 h-auto bg-gradient-to-r from-[#FFEB3B] to-[#FFF176] text-[#212121] font-bold rounded-xl hover:from-[#FFF176] hover:to-[#FFEB3B] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group">
                  <a onClick={()=>alert('Coming Soon')} target="_blank" rel="noreferrer">
                    <motion.div
                      className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                    />
                    <span className="font-akira relative z-10 flex items-center gap-2">
                      Register Now
                    </span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE BLOCK */}
          <motion.div
            className="relative h-[600px] md:h-[700px] w-full group mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="absolute top - 0 left-1/2 transform -translate-x-1/2 z-30"
              initial={{ scale: 0, rotate: -20, y: 1, rotateY: 45 }}
              animate={{ scale: 1, rotate: 0, y: 0, rotateY: 0 }}
              transition={{
                duration: 1,
                delay: 0.6,
                type: "spring",
                stiffness: 80,
                damping: 12
              }}
              whileHover={{
                scale: 1.08,
                rotate: 3,
                y: -10,
                zIndex: 40,
                rotateY: 5,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
              style={{ height: "450px" }}
            >

              <motion.div
                  className="mt-8 flex justify-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  <div className="bg-[#FFEB3B] text-[#212121] px-6 py-2 mb-3 rounded-full font-[Comic Neue] font-bold relative overflow-hidden cursor-pointer hover:scale-105 transition-transform">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <button onClick={()=>window.open("#", "_blank")}><span className="relative z-10">Tap to see our comic book!!</span></button>
                  </div>
                </motion.div>
              <div className="relative">
                <div className="relative bg-white p-4 w-80 h-96 overflow-hidden shadow-2xl rounded-2xl border-4 border-white transform -rotate-3">
                  <img src={logo1} alt="Main Comic Event" className="w-full h-full object-cover rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FF3B3F]/15 to-[#FFEB3B]/25 mix-blend-multiply rounded-xl" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#00BCD4]/10 to-transparent mix-blend-screen rounded-xl" />
                  <div className="absolute inset-2 border-2 border-white/50 rounded-lg" />
                </div>
              </div>

                

            </motion.div>

            
          </motion.div>

          

          
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
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
