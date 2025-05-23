import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Star, Zap, Heart, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  // Parallax transforms
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -100]);
  const floatingY = useTransform(scrollY, [0, 500], [0, -200]);

  // Mouse tracking for interactive effects
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

  // Floating comic elements data
  const floatingElements = [
    { icon: Star, color: "#FFEB3B", delay: 0, duration: 3, scale: 1.2 },
    { icon: Zap, color: "#FF3B3F", delay: 0.5, duration: 2.5, scale: 1 },
    { icon: Heart, color: "#E91E63", delay: 1, duration: 3.5, scale: 0.8 },
    { icon: Sparkles, color: "#00BCD4", delay: 1.5, duration: 2.8, scale: 1.1 },
    { icon: Star, color: "#9C27B0", delay: 2, duration: 3.2, scale: 0.9 },
  ];

  // Comic burst animation variants
  const burstVariants = {
    hidden: { scale: 0, rotate: 0, opacity: 0 },
    visible: { 
      scale: [0, 1.2, 1], 
      rotate: [0, 180, 360], 
      opacity: [0, 1, 0.8],
      transition: { duration: 2, repeat: Infinity, repeatDelay: 3 }
    }
  };

  // Text reveal animation
  const letterVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -90 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    })
  };

  const comicWords = ["IEM", "COMIC", "VERSE"];
  const wordColors = ["text-white", "text-[#FF3B3F]", "text-[#FFEB3B]"];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2E3192] via-[#1A1F71] to-[#0F1357] overflow-hidden pt-16"
    >
      {/* Dynamic Background with Parallax */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ 
          y: backgroundY,
          background: "url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?fit=crop&w=1920&h=1080&auto=format')",
          backgroundSize: "cover", 
          backgroundPosition: "center",
          filter: "hue-rotate(45deg) saturate(1.2)"
        }}
      />
      
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
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Comic Elements */}
      <AnimatePresence>
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <motion.div
              key={index}
              className="absolute pointer-events-none z-5"
              style={{
                left: `${20 + (index * 15)}%`,
                top: `${30 + (index * 10)}%`,
                y: floatingY,
              }}
              initial={{ opacity: 0, scale: 0, rotate: 0 }}
              animate={{ 
                opacity: [0.4, 0.8, 0.4], 
                scale: [element.scale * 0.8, element.scale * 1.2, element.scale],
                rotate: [0, 360],
                y: [-20, 20, -20]
              }}
              transition={{
                duration: element.duration,
                delay: element.delay,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Icon 
                size={32} 
                color={element.color}
                style={{ filter: "drop-shadow(0 0 10px currentColor)" }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>

      {/* Comic Burst Effects */}
      <motion.div
        className="absolute top-20 right-20 pointer-events-none"
        variants={burstVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-24 h-24 bg-gradient-to-r from-[#FF3B3F] to-[#FFEB3B] rounded-full opacity-20 blur-sm" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-16 pointer-events-none"
        variants={burstVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5 }}
      >
        <div className="w-16 h-16 bg-gradient-to-r from-[#00BCD4] to-[#9C27B0] rounded-full opacity-30 blur-sm" />
      </motion.div>

      {/* Interactive Light Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,235,59,0.1) 0%, transparent 50%)`,
        }}
      />
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h4 className="font-[Comic Neue] font-bold text-[#FFEB3B] mb-2">July 20-21, 2025</h4>
            <h1 className="font-[Bangers] text-5xl md:text-7xl mb-4 text-white transition-transform duration-300 ease-out group cursor-pointer">
              <span className="inline-block group-hover:scale-110 group-hover:drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)] transition-transform duration-300">
                IEM
              </span>
              <br />
              <span className="inline-block group-hover:scale-110 group-hover:drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)] transition-transform duration-300 text-[#FF3B3F]">
                COMIC
              </span>
            <span className="inline-block group-hover:scale-110 group-hover:drop-shadow-[2px_2px_0_rgba(0,0,0,0.4)] transition-transform duration-300 text-[#FFEB3B]">
                VERSE
            </span>
            </h1>

            <p className="font-[Comic Neue] text-lg mb-6">Join us for the most exciting comic convention on campus! Three days filled with amazing guests, panels, cosplay contests, and much more!</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="px-6 py-6 h-auto bg-[#FF3B3F] text-white font-bold rounded-md hover:bg-opacity-90 transition-colors">
                <a href="#events">Explore Events</a>
              </Button>
              <Button asChild className="px-6 py-6 h-auto bg-[#FFEB3B] text-[#212121] font-bold rounded-md hover:bg-opacity-90 transition-colors">
                <a href="#tickets">Register Now</a>
              </Button>
            </div>

            {/* Enhanced Description */}
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="font-[Comic Neue] text-lg mb-8 leading-relaxed"
            >
              Join us for the most <span className="text-[#FFEB3B] font-bold">exciting</span> comic convention on campus! 
              Three days filled with <span className="text-[#FF3B3F] font-bold">amazing guests</span>, panels, 
              cosplay contests, and <span className="text-[#00BCD4] font-bold">much more!</span>
            </motion.p>

            {/* Enhanced Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="px-8 py-6 h-auto bg-gradient-to-r from-[#FF3B3F] to-[#FF6B6F] text-white font-bold rounded-xl hover:from-[#FF6B6F] hover:to-[#FF3B3F] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group">
                  <a href="#events">
                    <motion.div
                      className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      <Zap size={20} />
                      Explore Events
                    </span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, rotate: -1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button asChild className="px-8 py-6 h-auto bg-gradient-to-r from-[#FFEB3B] to-[#FFF176] text-[#212121] font-bold rounded-xl hover:from-[#FFF176] hover:to-[#FFEB3B] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group">
                  <a href="#tickets">
                    <motion.div
                      className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
                    />
                    <span className="relative z-10 flex items-center gap-2">
                      <Star size={20} />
                      Register Now
                    </span>
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Enhanced Three-Image Collage - Positioned Lower */}
          <motion.div 
            className="relative h-[500px] md:h-[600px] w-full group mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Main Center Image - Positioned Lower */}
            <motion.div
              className="absolute top-16 left-1/2 transform -translate-x-1/2 z-30"
              initial={{ scale: 0, rotate: -20, y: 150, rotateY: 45 }}
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
            >
              <div className="relative">
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-6 bg-gradient-to-r from-[#FF3B3F] via-[#FFEB3B] to-[#00BCD4] rounded-3xl opacity-70 blur-2xl animate-pulse" />
                <div className="absolute -inset-4 bg-gradient-to-br from-[#FF3B3F] to-[#FFEB3B] rounded-2xl opacity-60 blur-lg group-hover:opacity-90 transition-opacity duration-300" />
                
                <div 
                  className="relative bg-white p-3 w-72 h-80 overflow-hidden shadow-2xl border-4 border-white"
                  style={{ 
                    clipPath: "polygon(0% 10%, 10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%)",
                    transform: "rotate(-3deg)"
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=700" 
                    alt="Main Comic Event" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                  {/* Enhanced Comic Halftone Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#FF3B3F]/15 to-[#FFEB3B]/25 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#00BCD4]/10 to-transparent mix-blend-screen" />
                  
                  {/* Comic Book Dots Pattern */}
                  <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(255,59,63,0.3) 1px, transparent 1px)",
                      backgroundSize: "12px 12px",
                    }}
                  />
                  
                  {/* Inner Border Effect */}
                  <div className="absolute inset-2 border-2 border-white/50 rounded-lg" />
                </div>
                
                {/* Enhanced "POP!" Text with Animation */}
                <motion.div
                  className="absolute -top-8 -right-8 bg-gradient-to-r from-[#FFEB3B] to-[#FFF176] text-[#212121] px-4 py-2 rounded-full font-[Bangers] text-2xl font-bold shadow-xl transform rotate-15 border-3 border-white"
                  initial={{ scale: 0, rotate: 0, y: -20 }}
                  animate={{ scale: 1, rotate: 15, y: 0 }}
                  transition={{ delay: 1, type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.2, rotate: 20, y: -5 }}
                >
                  <motion.span
                    animate={{ textShadow: ["0 0 0px #FF3B3F", "0 0 20px #FF3B3F", "0 0 0px #FF3B3F"] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    POP!
                  </motion.span>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#FF3B3F] rounded-full animate-bounce" />
                </motion.div>
              </div>
            </motion.div>

            {/* Left Image - Positioned Lower */}
            <motion.div
              className="absolute top-28 -left-8 z-20"
              initial={{ scale: 0, rotate: 30, x: -150, rotateY: -45 }}
              animate={{ scale: 1, rotate: 0, x: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.9, 
                delay: 0.4, 
                type: "spring", 
                stiffness: 100,
                damping: 10
              }}
              whileHover={{ 
                scale: 1.12, 
                rotate: -5,
                x: 15,
                y: -8,
                zIndex: 35,
                rotateY: -8,
                transition: { duration: 0.4, type: "spring", stiffness: 200 }
              }}
            >
              <div className="relative">
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#00BCD4] via-[#9C27B0] to-[#E91E63] rounded-2xl opacity-60 blur-xl animate-pulse" />
                <div className="absolute -inset-3 bg-gradient-to-br from-[#00BCD4] to-[#9C27B0] rounded-xl opacity-50 blur-md" />
                
                <div 
                  className="relative bg-white p-3 w-52 h-64 overflow-hidden shadow-2xl border-3 border-white"
                  style={{ 
                    clipPath: "polygon(0% 8%, 8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%)",
                    transform: "rotate(12deg)"
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=600" 
                    alt="Cosplay Contest" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {/* Enhanced Comic Effects */}
                  <div className="absolute inset-0 bg-gradient-to-tl from-[#00BCD4]/20 to-transparent mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#9C27B0]/15 mix-blend-overlay" />
                  
                  {/* Halftone Pattern */}
                  <div 
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(0,188,212,0.4) 1px, transparent 1px)",
                      backgroundSize: "10px 10px",
                    }}
                  />
                  
                  <div className="absolute inset-2 border-2 border-white/40 rounded-md" />
                </div>
                
                {/* Enhanced "BOOM!" Badge */}
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#FF3B3F] to-[#FF6B6F] text-white px-4 py-2 rounded-full font-[Bangers] text-xl font-bold shadow-xl transform -rotate-15 border-3 border-white"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: -15 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 400 }}
                  whileHover={{ scale: 1.25, rotate: -20 }}
                >
                  <motion.span
                    animate={{ color: ["#FFFFFF", "#FFEB3B", "#FFFFFF"] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    BOOM!
                  </motion.span>
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#FFEB3B] rounded-full animate-ping" />
                </motion.div>
              </div>
            </motion.div>

            {/* Right Image - Positioned Lower */}
            <motion.div
              className="absolute top-40 -right-8 z-20"
              initial={{ scale: 0, rotate: -30, x: 150, rotateY: 45 }}
              animate={{ scale: 1, rotate: 0, x: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.9, 
                delay: 0.8, 
                type: "spring", 
                stiffness: 90,
                damping: 11
              }}
              whileHover={{ 
                scale: 1.12, 
                rotate: 6,
                x: -15,
                y: -8,
                zIndex: 35,
                rotateY: 8,
                transition: { duration: 0.4, type: "spring", stiffness: 200 }
              }}
            >
              <div className="relative">
                {/* Enhanced Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-l from-[#E91E63] via-[#FF9800] to-[#FFEB3B] rounded-2xl opacity-60 blur-xl animate-pulse" />
                <div className="absolute -inset-3 bg-gradient-to-br from-[#E91E63] to-[#FF9800] rounded-xl opacity-50 blur-md" />
                
                <div 
                  className="relative bg-white p-3 w-52 h-64 overflow-hidden shadow-2xl border-3 border-white"
                  style={{ 
                    clipPath: "polygon(0% 8%, 8% 0%, 92% 0%, 100% 8%, 100% 92%, 92% 100%, 8% 100%, 0% 92%)",
                    transform: "rotate(-8deg)"
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=600" 
                    alt="Artist Alley" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                  {/* Enhanced Comic Effects */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#E91E63]/20 to-transparent mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-[#FF9800]/15 mix-blend-overlay" />
                  
                  {/* Halftone Pattern */}
                  <div 
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: "radial-gradient(circle, rgba(233,30,99,0.4) 1px, transparent 1px)",
                      backgroundSize: "8px 8px",
                    }}
                  />
                  
                  <div className="absolute inset-2 border-2 border-white/40 rounded-md" />
                </div>
                
                {/* Enhanced "ZAP!" Badge */}
                <motion.div
                  className="absolute -top-6 -left-6 bg-gradient-to-r from-[#00BCD4] to-[#4FC3F7] text-white px-4 py-2 rounded-full font-[Bangers] text-xl font-bold shadow-xl transform rotate-18 border-3 border-white"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ scale: 1, rotate: 18 }}
                  transition={{ delay: 1.4, type: "spring", stiffness: 350 }}
                  whileHover={{ scale: 1.25, rotate: 25 }}
                >
                  <motion.span
                    animate={{ 
                      textShadow: ["0 0 0px #FFEB3B", "0 0 15px #FFEB3B", "0 0 0px #FFEB3B"],
                      color: ["#FFFFFF", "#FFEB3B", "#FFFFFF"]
                    }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  >
                    ZAP!
                  </motion.span>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#FFEB3B] rounded-full animate-bounce" />
                </motion.div>
              </div>
            </motion.div>

            {/* ... (remaining decorative elements remain the same) */}
          </motion.div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
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

      {/* Comic Book Dots Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;