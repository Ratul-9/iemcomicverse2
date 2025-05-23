import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { collaboratorsData } from "@/data/comicfest";

const CollaboratorsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };
  
  // Comic style speech bubble
  const SpeechBubble = ({ children, author }: { children: React.ReactNode, author: string }) => (
    <div className="relative bg-white rounded-2xl p-8 shadow-xl border-4 border-[#2E3192] max-w-3xl mx-auto">
      <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-[#FF3B3F] rounded-2xl -z-10 transform rotate-1"></div>
      <div className="font-[Comic Neue] text-lg italic text-[#212121] mb-4 relative z-10">
        {children}
      </div>
      <p className="font-[Bangers] text-lg text-[#2E3192]">{author}</p>
      
      {/* Speech bubble tail */}
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0C20 20 0 20 0 40C20 30 40 30 40 20C30 10 20 0 20 0Z" fill="white"/>
          <path d="M20 4C20 21 4 21 4 38C20 29 36 29 36 20C27 11 20 4 20 4Z" fill="#2E3192" fillOpacity="0.2"/>
        </svg>
      </div>
    </div>
  );
  
  // Comic style decorative elements
  const ComicStar = ({ className }: { className: string }) => (
    <div className={`absolute z-0 ${className}`}>
      <svg width="60" height="60" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 0L50 30L80 30L55 50L65 80L40 60L15 80L25 50L0 30L30 30L40 0Z" fill="#2E3192" fillOpacity="0.1"/>
      </svg>
    </div>
  );
  
  return (
    <section id="collaborators" className="py-20 bg-gradient-to-r from-[#FF3B3F] to-[#2E3192] relative overflow-hidden">
      {/* Background image and overlay like hero section */}
      <div className="absolute inset-0 opacity-30" style={{ 
        background: "url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?fit=crop&w=1920&h=1080&auto=format')",
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF3B3F] to-[#2E3192] opacity-70"></div>
      
      {/* Comic style background pattern */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FFFFFF' fill-opacity='0.07' fill-rule='evenodd'/%3E%3C/svg%3E')",
      }}></div>
      
      {/* Decorative elements */}
      <ComicStar className="top-20 left-10" />
      <ComicStar className="top-40 right-20" />
      <ComicStar className="bottom-20 left-1/3" />
      <ComicStar className="bottom-40 right-1/4" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[Bangers] text-5xl text-white mb-4 relative inline-block">
            OUR COLLABORATORS
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#FFEB3B]"></div>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-1 bg-[#2E3192]"></div>
          </h2>
          <p className="font-[Comic Neue] text-lg text-white text-opacity-90 max-w-2xl mx-auto mt-6">
            ComicFest wouldn't be possible without the support of these amazing partners and sponsors!
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center mb-16"
        >
          {collaboratorsData
            .filter(collab => collab.name.trim() !== "") // Skip empty entries
            .map((collaborator, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="w-full h-40 [perspective:1000px]"
                >
                  <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group hover:rotate-y-180">
                    {/* Front Side */}
                    <div className="absolute w-full h-full backface-hidden bg-white rounded-xl border-4 border-[#2E3192] flex items-center justify-center p-4">
                      <p className="font-[Bangers] text-xl text-center text-[#FF3B3F]">{collaborator.name}</p>
                    </div>

                    {/* Back Side */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#2E3192] rounded-xl flex items-center justify-center p-4">
                      {collaborator.logo ? (
                        <img src={collaborator.logo} alt={collaborator.name} className="max-h-20 object-contain" />
                      ) : (
                        <p className="text-white font-[Comic Neue] text-center">Logo Coming Soon</p>
                      )}
                    </div>
                  </div>
                </motion.div>
        ))}

        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mt-20 mb-24"
        >
          <SpeechBubble author="Tor Baap, ComicVerse Organizing Team">
            "We're proud to support IEM ComicVerse and the incredible creativity of students. This event showcases the amazing talent and passion for comics and pop culture on campus!"
          </SpeechBubble>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="relative inline-block">
            <Button 
              asChild 
              className="px-8 py-4 h-auto bg-[#2E3192] text-white font-bold rounded-md hover:bg-opacity-90 transition-colors z-10 relative"
            >
              <a href="#becomepartner">Become a Partner</a>
            </Button>
            <div className="absolute inset-0 bg-[#FF3B3F] rounded-md transform rotate-3 translate-x-1 translate-y-1 -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;
