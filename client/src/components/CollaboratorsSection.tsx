import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { collaboratorsData } from "@/data/comicfest";
import collaborator1 from './collaborator1.jpg';
import collaborator2 from './collaborator2.jpg';
import collaborator3 from './collaborator3.jpg';
import collaborator4 from './collaborator4.jpg';
import collaborator5 from './collaborator5.jpg';

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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  // Smaller comic style speech bubble with enhanced design
  const SpeechBubble = ({ children, author }: { children: React.ReactNode, author: string }) => (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative bg-white rounded-2xl p-6 shadow-xl border-3 border-black transform rotate-1 hover:rotate-0 transition-transform duration-300">
        {/* Comic book style background layers */}
        <div className="absolute -top-1 -left-1 -right-1 -bottom-1 bg-[#FF3B3F] rounded-2xl -z-10 transform rotate-2"></div>
        <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FFEB3B] rounded-2xl -z-20 transform -rotate-1"></div>
        
        {/* Content */}
        <div className="font-[Comic Neue] text-lg italic text-[#212121] mb-4 relative z-10 leading-relaxed">
          {children}
        </div>
        <p className="font-[Bangers] text-lg text-[#2E3192] transform -rotate-1">- {author}</p>
        
        {/* Enhanced speech bubble tail */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
          <svg width="35" height="35" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 0C25 25 0 25 0 50C25 37.5 50 37.5 50 25C37.5 12.5 25 0 25 0Z" fill="white"/>
            <path d="M25 0C25 25 0 25 0 50C25 37.5 50 37.5 50 25C37.5 12.5 25 0 25 0Z" stroke="black" strokeWidth="3"/>
          </svg>
        </div>
      </div>
    </div>
  );
  
  // Enhanced comic decorative elements
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
        ZAP!
      </div>
    </div>
  );
  
  return (
    <section id="collaborators" className="py-20 bg-gradient-to-br from-[#FF3B3F] via-[#2E3192] to-[#FF3B3F] relative overflow-hidden">
      {/* Background image and overlay - keeping as requested */}
      <div className="absolute inset-0 opacity-30" style={{ 
        background: "url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?fit=crop&w=1920&h=1080&auto=format')",
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF3B3F] to-[#2E3192] opacity-70"></div>
      
      {/* Enhanced comic halftone pattern */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `radial-gradient(circle at 25% 25%, #FFEB3B 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, #FF3B3F 1px, transparent 1px),
                         radial-gradient(circle at 50% 50%, #2E3192 1.5px, transparent 1.5px)`,
        backgroundSize: '50px 50px, 30px 30px, 40px 40px',
        opacity: 0.1
      }}></div>
      
      {/* Enhanced decorative elements */}
      <ComicBurst className="top-10 left-10" color="#FFEB3B" />
      <ComicBurst className="top-32 right-16" color="#FF3B3F" />
      <ComicBurst className="bottom-20 left-1/4" color="#2E3192" />
      <ComicZap className="top-1/4 right-1/3" />
      <ComicZap className="bottom-1/3 left-1/4" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Enhanced title with comic effects */}
          <div className="relative inline-block mb-8">
            <h2 className="font-[Bangers] text-6xl text-white mb-4 relative z-10 transform -rotate-1
                           drop-shadow-[4px_4px_0px_#000000] 
                           hover:drop-shadow-[6px_6px_0px_#000000] 
                           transition-all duration-300">
              OUR COLLABORATORS
            </h2>
            {/* Multiple underline layers for comic effect */}
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#FFEB3B] transform rotate-1"></div>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-2 bg-[#FF3B3F] transform -rotate-1"></div>
            <div className="absolute -bottom-6 left-1/3 right-1/3 h-1 bg-black transform rotate-2"></div>
          </div>
          
          <p className="font-[Comic Neue] text-xl text-white text-opacity-95 max-w-3xl mx-auto mt-6 
                       bg-black bg-opacity-20 p-4 rounded-2xl border-2 border-white border-opacity-30">
            ComicFest wouldn't be possible without the support of these amazing partners and sponsors! 
            <span className="font-[Bangers] text-[#FFEB3B] ml-2">POW!</span>
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 
                          items-center justify-items-center
                          md:[&>*:nth-child(4)]:col-start-1 md:[&>*:nth-child(4)]:col-end-2
                          md:[&>*:nth-child(5)]:col-start-3 md:[&>*:nth-child(5)]:col-end-4
                          lg:[&>*:nth-child(4)]:col-start-auto lg:[&>*:nth-child(4)]:col-end-auto
                          lg:[&>*:nth-child(5)]:col-start-auto lg:[&>*:nth-child(5)]:col-end-auto">
          {/* Static 5 collaborator cards with image placeholders - Made bigger */}
          {[
            { name: "Kolkata Anime Club", logo: collaborator1 },
            { name: "IEM Literary Society", logo: collaborator2 },
            { name: "Otaku Guild", logo: collaborator3 },
            { name: "Lions Club Of Kolkata IEM", logo: collaborator4 },
            { name: "Rotary Club of Salt Lake Silicon Valley", logo: collaborator5 }
          ].map((collaborator, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="w-full max-w-sm"
            >
              {/* Enhanced comic-style card with modern hover effects - Made bigger */}
              <div className="relative group cursor-pointer">
                {/* Main card - Increased height and padding */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 h-64 border-4 border-black
                               transform transition-all duration-300 ease-out
                               hover:scale-105 hover:-translate-y-2
                               shadow-[8px_8px_0px_0px_#000000]
                               hover:shadow-[12px_12px_0px_0px_#000000,_16px_16px_0px_0px_#FF3B3F,_20px_20px_0px_0px_#FFEB3B]
                               relative z-10">
                  
                  {/* Content container */}
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    {/* Logo container - Made bigger */}
                    <div className="mb-6 transition-transform duration-300 group-hover:scale-110">
                      <img 
                        src={collaborator.logo} 
                        alt={collaborator.name} 
                        className="max-w-full max-h-20 object-contain filter drop-shadow-md
                                   group-hover:drop-shadow-lg transition-all duration-300" 
                      />
                    </div>
                    
                    {/* Name - Larger text */}
                    <h3 className="font-[Bangers] text-xl text-[#2E3192] transform group-hover:-rotate-1 
                                   transition-transform duration-300">
                      {collaborator.name}
                    </h3>
                  </div>
                  
                  {/* Comic corner decoration */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-[#FFEB3B] 
                                  border-2 border-black rounded-full transform rotate-12
                                  transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125">
                    <div className="absolute inset-1 bg-[#FF3B3F] rounded-full"></div>
                  </div>
                </div>
                
                {/* Background decorative layers with deep blue gradient */}
                <div className="absolute inset-0 bg-[#FF3B3F] rounded-3xl border-4 border-black
                               transform rotate-2 transition-transform duration-300
                               group-hover:rotate-3 -z-10"></div>
                <div className="absolute inset-0 bg-[#FFEB3B] rounded-3xl border-4 border-black
                               transform -rotate-1 transition-transform duration-300
                               group-hover:-rotate-2 -z-20"></div>
              </div>
            </motion.div>
          ))}
          </div>
        </motion.div>
        
        {/* Enhanced speech bubble - Made smaller */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative mt-16 mb-16"
        >
          <SpeechBubble author="Jane Smith, CEO of Comic Publishers International">
            "We're proud to support College ComicFest and the incredible creativity of students! 
            <span className="font-[Bangers] text-[#FF3B3F] not-italic">AMAZING!</span>"
          </SpeechBubble>
        </motion.div>
        
        {/* Enhanced CTA button with deep blue theme */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="relative inline-block group">
            <Button 
              asChild 
              className="px-10 py-6 h-auto bg-white text-[#2E3192] border-4 border-black
                         font-[Bangers] text-xl rounded-2xl
                         hover:bg-[#FFEB3B] hover:scale-105
                         transform transition-all duration-300 ease-out
                         shadow-[6px_6px_0px_0px_#000000]
                         hover:shadow-[8px_8px_0px_0px_#000000]
                         z-10 relative"
            >
              <a href="#becomepartner">BECOME A PARTNER!</a>
            </Button>
            
            {/* Button background layers with deep blue gradient */}
            <div className="absolute inset-0 bg-[#FF3B3F] rounded-2xl border-4 border-black
                           transform rotate-3 transition-transform duration-300
                           group-hover:rotate-6 -z-10"></div>
            <div className="absolute inset-0 bg-[#2E3192] rounded-2xl border-4 border-black
                           transform -rotate-2 transition-transform duration-300
                           group-hover:-rotate-4 -z-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;