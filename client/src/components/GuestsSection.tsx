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
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Comic-style decorative elements
  const ComicBurst = ({ className }: { className: string }) => (
    <div className={`absolute z-0 ${className}`}>
      <svg width="150" height="150" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 0L115 70L180 50L130 100L200 130L130 150L160 200L100 170L40 200L70 150L0 130L70 100L20 50L85 70L100 0Z" fill="#FFEB3B" fillOpacity="0.4"/>
      </svg>
    </div>
  );

  return (
    <section id="guests" className="py-20 bg-gradient-to-r from-[#2E3192] to-[#FF3B3F] relative overflow-hidden">
      {/* Comic style decorative elements */}
      <ComicBurst className="top-10 left-10 rotate-12 opacity-20" />
      <ComicBurst className="bottom-20 right-10 -rotate-12 opacity-30" />
      <ComicBurst className="bottom-40 left-1/4 rotate-45 opacity-20" />
      
      <div className="absolute top-0 left-0 w-full h-full" style={{ 
        backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        opacity: 0.1
      }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <h2 className="font-[Bangers] text-5xl text-white mb-4 relative z-10">SPECIAL GUESTS</h2>
            <div className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-black bg-opacity-20 rounded-lg transform -rotate-1 z-0"></div>
          </div>
          <p className="font-[Comic Neue] text-lg text-white max-w-2xl mx-auto mt-6">
            Meet the incredible artists, writers, and creators who will be joining us this year!
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12"
        >
          {guestsData.map((guest, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
              style={{ 
                clipPath: "polygon(0% 3%, 3% 0%, 97% 0%, 100% 3%, 100% 97%, 97% 100%, 3% 100%, 0% 97%)" 
              }}
            >
              <div className="relative">
                <img 
                  src={guest.image} 
                  alt={guest.name} 
                  className="w-full h-56 object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#FFEB3B] text-[#212121] py-1 px-3 rounded-full font-[Comic Neue] font-bold transform rotate-3">
                  {guest.role}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
              <div className="p-4">
                <h3 className="font-[Bangers] text-2xl text-[#FF3B3F] mb-2">{guest.name}</h3>
                <p className="font-[Comic Neue] text-sm text-[#424242] mb-3 line-clamp-2">{guest.bio}</p>
                <div className="flex space-x-3">
                  <a href={guest.twitter} className="text-[#2E3192] hover:text-[#FF3B3F] transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href={guest.instagram} className="text-[#2E3192] hover:text-[#FF3B3F] transition-colors">
                    <Instagram size={18} />
                  </a>
                  <a href={guest.website} className="text-[#2E3192] hover:text-[#FF3B3F] transition-colors">
                    <Globe size={18} />
                  </a>
                </div>
              </div>
              <div className="bg-[#F5F5F5] p-3 border-t border-gray-200">
                <p className="font-[Comic Neue] text-sm">Panel: {guest.panel}</p>
                <p className="font-[Comic Neue] text-sm font-bold">{guest.panelTime} • {guest.panelLocation}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button asChild className="px-8 py-4 h-auto bg-white text-[#FF3B3F] font-bold rounded-md hover:bg-opacity-90 transition-colors transform hover:rotate-2 relative overflow-hidden shadow-lg">
            <a href="#allguests" className="relative z-10">
              <span className="absolute inset-0 bg-yellow-300 opacity-0 hover:opacity-10 transition-opacity"></span>
              View All Guests
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestsSection;
