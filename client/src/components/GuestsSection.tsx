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

  return (
    <section id="guests" className="py-20 bg-gradient-to-r from-[#2E3192] to-[#FF3B3F]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[Bangers] text-5xl text-white mb-4">SPECIAL GUESTS</h2>
          <p className="font-[Comic Neue] text-lg text-white max-w-2xl mx-auto">
            Meet the incredible artists, writers, and creators who will be joining us this year!
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
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
                  className="w-full h-80 object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#FFEB3B] text-[#212121] py-1 px-3 rounded-full font-[Comic Neue] font-bold">
                  {guest.role}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-[Bangers] text-3xl text-[#FF3B3F] mb-2">{guest.name}</h3>
                <p className="font-[Comic Neue] text-[#424242] mb-4">{guest.bio}</p>
                <div className="flex space-x-3">
                  <a href={guest.twitter} className="text-[#2E3192] hover:text-[#FF3B3F] transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href={guest.instagram} className="text-[#2E3192] hover:text-[#FF3B3F] transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href={guest.website} className="text-[#2E3192] hover:text-[#FF3B3F] transition-colors">
                    <Globe size={20} />
                  </a>
                </div>
              </div>
              <div className="bg-[#F5F5F5] p-4">
                <p className="font-[Comic Neue]">Panel: {guest.panel}</p>
                <p className="font-[Comic Neue] font-bold">{guest.panelTime} • {guest.panelLocation}</p>
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
          <Button asChild className="px-8 py-4 h-auto bg-white text-[#FF3B3F] font-bold rounded-md hover:bg-opacity-90 transition-colors">
            <a href="#allguests">View All Guests</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestsSection;
