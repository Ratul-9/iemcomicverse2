import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, Twitter, Instagram } from "lucide-react";
import { guestsData } from "@/data/comicfest";

const GuestsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const ComicBurst = ({ className, color }: { className: string, color: string }) => (
    <div className={`absolute z-0 ${className} animate-pulse`}>
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L60 25L85 15L70 40L100 50L70 60L85 85L60 75L50 100L40 75L15 85L30 60L0 50L30 40L15 15L40 25L50 0Z" 
              fill={color} fillOpacity="0.3" stroke={color} strokeWidth="2"/>
      </svg>
    </div>
  );

  const ComicZap = ({ className }: { className: string }) => (
    <div className={`absolute z-0 ${className} transform rotate-12`}>
      <div className="font-[Bangers] text-4xl text-[#FFEB3B] opacity-30 
                      drop-shadow-[0_0_10px_rgba(255,235,59,0.5)] animate-bounce">
        POW!
      </div>
    </div>
  );

  return (
    <section id="guests" className="py-20 bg-gradient-to-b from-[#2E3192] to-[#FF3B3F] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{
        background: "url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?fit=crop&w=1920&h=1080&auto=format')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}></div>

      {/* Enhanced comic halftone pattern */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `radial-gradient(circle at 25% 25%, #FFEB3B 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, #FF1744 1px, transparent 1px),
                         radial-gradient(circle at 50% 50%, #1E1F7A 1.5px, transparent 1.5px)`,
        backgroundSize: '50px 50px, 30px 30px, 40px 40px',
        opacity: 0.1
      }}></div>

      {/* Enhanced decorative elements */}
      <ComicBurst className="top-10 left-10" color="#FFEB3B" />
      <ComicBurst className="top-32 right-16" color="#FF1744" />
      <ComicBurst className="bottom-20 left-1/4" color="#1E1F7A" />
      <ComicZap className="top-1/4 right-1/3" />
      <ComicZap className="bottom-1/3 left-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="relative inline-block mb-8">
            <h2 className="font-[Bangers] text-6xl text-white mb-4 relative z-10 transform -rotate-1
                           drop-shadow-[4px_4px_0px_#000000] 
                           hover:drop-shadow-[6px_6px_0px_#000000] 
                           transition-all duration-300">
              💥 SPECIAL GUESTS 💥
            </h2>
            {/* Multiple underline layers for comic effect */}
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#FFEB3B] transform rotate-1"></div>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-2 bg-[#FF1744] transform -rotate-1"></div>
            <div className="absolute -bottom-6 left-1/3 right-1/3 h-1 bg-black transform rotate-2"></div>
          </div>
          <p className="font-[Comic Neue] text-xl text-white text-opacity-95 max-w-3xl mx-auto mt-6 
                       bg-black bg-opacity-20 p-4 rounded-2xl border-2 border-white border-opacity-30">
            Meet the legendary creators, artists, and stars coming to blow your mind!
            <span className="font-[Bangers] text-[#FFEB3B] ml-2">BOOM!</span>
          </p>
        </motion.div>

        {/* Enhanced Guest Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {guestsData.map((guest, index) => (
            <motion.div
              key={index}
              variants={item}
              className="w-full max-w-sm mx-auto"
            >
              {/* Enhanced comic-style card with modern hover effects */}
              <div className="relative group cursor-pointer">
                {/* Main card */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border-4 border-black
                               transform transition-all duration-300 ease-out
                               hover:scale-105 hover:-translate-y-2
                               shadow-[8px_8px_0px_0px_#000000]
                               hover:shadow-[12px_12px_0px_0px_#000000,_16px_16px_0px_0px_#FF1744,_20px_20px_0px_0px_#FFEB3B]
                               relative z-10 overflow-hidden">
                  
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img src={guest.image} alt={guest.name} 
                         className="w-full h-56 object-cover border-b-4 border-black
                                   transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute top-3 right-3 bg-[#FFEB3B] text-black text-xs py-1 px-2 
                                   rounded-full font-bold font-[Bangers] transform rotate-6 
                                   shadow-[2px_2px_0_#000] border-2 border-black
                                   transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                      {guest.role}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-[Bangers] text-2xl text-[#FF1744] 
                                   drop-shadow-[2px_2px_0_#000] mb-3 transform 
                                   group-hover:-rotate-1 transition-transform duration-300">
                      {guest.name}
                    </h3>
                    <p className="text-sm text-[#333] mb-4 font-medium line-clamp-2 font-[Comic Neue]">
                      {guest.bio}
                    </p>
                    <div className="flex space-x-3 mb-4">
                      {guest.twitter && (
                        <a href={guest.twitter} target="_blank" rel="noopener noreferrer" 
                           className="hover:text-[#FF1744] transition-colors transform hover:scale-110 duration-200">
                          <Twitter size={20} />
                        </a>
                      )}
                      {guest.instagram && (
                        <a href={guest.instagram} target="_blank" rel="noopener noreferrer" 
                           className="hover:text-[#FF1744] transition-colors transform hover:scale-110 duration-200">
                          <Instagram size={20} />
                        </a>
                      )}
                      {guest.website && (
                        <a href={guest.website} target="_blank" rel="noopener noreferrer" 
                           className="hover:text-[#FF1744] transition-colors transform hover:scale-110 duration-200">
                          <Globe size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Panel info footer */}
                  <div className="bg-[#FFF9C4] px-6 py-4 border-t-4 border-black font-bold text-sm 
                                 text-[#333] font-[Comic Neue] rounded-b-2xl">
                    <div className="transform group-hover:-rotate-1 transition-transform duration-300">
                      🎤 <span className="font-[Bangers] text-[#FF1744]">{guest.panel}</span><br />
                      ⏰ {guest.panelTime} • 📍 {guest.panelLocation}
                    </div>
                  </div>
                  
                  {/* Comic corner decoration */}
                  <div className="absolute top-3 left-3 w-8 h-8 bg-[#FF1744] 
                                  border-2 border-black rounded-full transform rotate-12
                                  transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125">
                    <div className="absolute inset-1 bg-[#FFEB3B] rounded-full"></div>
                  </div>
                </div>
                
                {/* Background decorative layers */}
                <div className="absolute inset-0 bg-[#FF1744] rounded-3xl border-4 border-black
                               transform rotate-2 transition-transform duration-300
                               group-hover:rotate-3 -z-10"></div>
                <div className="absolute inset-0 bg-[#FFEB3B] rounded-3xl border-4 border-black
                               transform -rotate-1 transition-transform duration-300
                               group-hover:-rotate-2 -z-20"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced View All Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="relative inline-block group">
            <Button
              asChild
              className="px-10 py-6 h-auto bg-white text-[#1E1F7A] border-4 border-black
                         font-[Bangers] text-xl rounded-2xl
                         hover:bg-[#FFEB3B] hover:scale-105
                         transform transition-all duration-300 ease-out
                         shadow-[6px_6px_0px_0px_#000000]
                         hover:shadow-[8px_8px_0px_0px_#000000]
                         z-10 relative"
            >
              <a href="#allguests">🎉 VIEW ALL GUESTS! 🎉</a>
            </Button>
            
            {/* Button background layers */}
            <div className="absolute inset-0 bg-[#FF1744] rounded-2xl border-4 border-black
                           transform rotate-3 transition-transform duration-300
                           group-hover:rotate-6 -z-10"></div>
            <div className="absolute inset-0 bg-[#1E1F7A] rounded-2xl border-4 border-black
                           transform -rotate-2 transition-transform duration-300
                           group-hover:-rotate-4 -z-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestsSection;