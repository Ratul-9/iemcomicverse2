import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail, ZoomIn } from "lucide-react";
import { teamData } from "@/data/comicfest";

const TeamSection = () => {
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
        TEAM!
      </div>
    </div>
  );

  // Comic-style decorative divider
  const ComicDivider = () => (
    <motion.div 
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="flex justify-center my-16"
    >
      <div className="relative">
        <svg width="300" height="40" viewBox="0 0 300 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20H120L135 10L150 30L165 10L180 30L195 10L210 20H300" 
                stroke="#FF3B3F" strokeWidth="3" strokeDasharray="6 3"/>
          <circle cx="150" cy="20" r="12" fill="#FFEB3B" stroke="#000" strokeWidth="2"/>
          <path d="M150 12L155 18L150 24L145 18Z" fill="#FF3B3F"/>
        </svg>
      </div>
    </motion.div>
  );

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-[#F5F5F5] to-[#E8E8E8] relative overflow-hidden">
      {/* Background image and overlay */}
      <div className="absolute inset-0 opacity-20" style={{ 
        background: "url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?fit=crop&w=1920&h=1080&auto=format')",
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}></div>

      {/* Enhanced comic halftone pattern */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `radial-gradient(circle at 25% 25%, #2E3192 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, #FF3B3F 1px, transparent 1px),
                         radial-gradient(circle at 50% 50%, #FFEB3B 1.5px, transparent 1.5px)`,
        backgroundSize: '50px 50px, 30px 30px, 40px 40px',
        opacity: 0.1
      }}></div>
      
      {/* Enhanced decorative elements */}
      <ComicBurst className="top-10 left-10" color="#2E3192" />
      <ComicBurst className="top-32 right-16" color="#FF3B3F" />
      <ComicBurst className="bottom-20 left-1/4" color="#FFEB3B" />
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
            <h2 className="font-[Bangers] text-6xl text-[#FF3B3F] mb-4 relative z-10 transform -rotate-1
                           drop-shadow-[4px_4px_0px_#000000] 
                           hover:drop-shadow-[6px_6px_0px_#000000] 
                           transition-all duration-300">
              MEET OUR TEAM
            </h2>
            {/* Multiple underline layers for comic effect */}
            <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#FFEB3B] transform rotate-1"></div>
            <div className="absolute -bottom-4 left-1/4 right-1/4 h-2 bg-[#2E3192] transform -rotate-1"></div>
            <div className="absolute -bottom-6 left-1/3 right-1/3 h-1 bg-black transform rotate-2"></div>
          </div>
          <p className="font-[Comic Neue] text-xl text-[#424242] max-w-3xl mx-auto mt-6 
                       bg-white bg-opacity-60 p-4 rounded-2xl border-2 border-[#2E3192] border-opacity-30">
            The dedicated organizers who make ComicVerse possible year after year!
            <span className="font-[Bangers] text-[#FF3B3F] ml-2">HEROES!</span>
          </p>
        </motion.div>
        
        {/* Enhanced Team Cards */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {teamData.map((member, index) => (
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
                               hover:shadow-[12px_12px_0px_0px_#000000,_16px_16px_0px_0px_#FF3B3F,_20px_20px_0px_0px_#FFEB3B]
                               relative z-10 overflow-hidden">
                  
                  {/* Image container */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-56 object-cover border-b-4 border-black
                                transition-transform duration-300 group-hover:scale-110"
                    />
                    {/* Enhanced role badge */}
                    <div className="absolute top-3 left-3 bg-[#FFEB3B] py-1 px-3 
                                   rounded-full font-bold font-[Bangers] transform -rotate-3 
                                   shadow-[2px_2px_0_#000] border-2 border-black text-[#212121]
                                   transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      {member.role}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 text-center">
                    <h3 className="font-[Bangers] text-2xl text-[#FF3B3F] mb-2
                                   drop-shadow-[2px_2px_0_#000] transform 
                                   group-hover:-rotate-1 transition-transform duration-300">
                      {member.name}
                    </h3>
                    <p className="font-[Comic Neue] font-bold text-[#2E3192] mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-[#424242] mb-4 font-[Comic Neue] line-clamp-2">
                      {member.details}
                    </p>
                    
                    {/* Enhanced social links */}
                    <div className="flex justify-center space-x-3">
                      <a 
                        href={member.linkedin} 
                        className="w-10 h-10 rounded-full flex items-center justify-center 
                                   bg-gray-100 text-[#424242] border-2 border-black
                                   hover:bg-[#FF3B3F] hover:text-white transition-all duration-200
                                   transform hover:scale-110 hover:-rotate-12
                                   shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000]"
                      >
                        <Linkedin size={18} />
                      </a>
                      <a 
                        href={member.twitter} 
                        className="w-10 h-10 rounded-full flex items-center justify-center 
                                   bg-gray-100 text-[#424242] border-2 border-black
                                   hover:bg-[#2E3192] hover:text-white transition-all duration-200
                                   transform hover:scale-110 hover:rotate-12
                                   shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000]"
                      >
                        <Twitter size={18} />
                      </a>
                      <a 
                        href={`mailto:${member.email}`} 
                        className="w-10 h-10 rounded-full flex items-center justify-center 
                                   bg-gray-100 text-[#424242] border-2 border-black
                                   hover:bg-[#FFEB3B] hover:text-black transition-all duration-200
                                   transform hover:scale-110 hover:-rotate-6
                                   shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000]"
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                  
                  {/* Comic corner decoration */}
                  <div className="absolute top-3 right-3 w-8 h-8 bg-[#FF3B3F] 
                                  border-2 border-black rounded-full transform rotate-12
                                  transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125">
                    <div className="absolute inset-1 bg-[#2E3192] rounded-full"></div>
                  </div>
                </div>
                
                {/* Background decorative layers */}
                <div className="absolute inset-0 bg-[#2E3192] rounded-3xl border-4 border-black
                               transform rotate-2 transition-transform duration-300
                               group-hover:rotate-3 -z-10"></div>
                <div className="absolute inset-0 bg-[#FFEB3B] rounded-3xl border-4 border-black
                               transform -rotate-1 transition-transform duration-300
                               group-hover:-rotate-2 -z-20"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <ComicDivider />
        
        {/* Enhanced Join Team Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <div className="relative group max-w-2xl">
            {/* Enhanced card with modern styling */}
            <Card className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border-4 border-black
                            shadow-[8px_8px_0px_0px_#000000] 
                            group-hover:shadow-[12px_12px_0px_0px_#000000,_16px_16px_0px_0px_#2E3192,_20px_20px_0px_0px_#FFEB3B]
                            transform transition-all duration-300 ease-out
                            hover:scale-105 hover:-translate-y-2 relative z-10 overflow-hidden">
              
              {/* Enhanced header */}
              <div className="bg-gradient-to-r from-[#2E3192] to-[#FF3B3F] p-2 border-b-4 border-black">
                <div className="bg-[#FFEB3B] p-6 rounded-2xl transform group-hover:-rotate-1 
                               transition-transform duration-300 border-2 border-black">
                  <h3 className="font-[Bangers] text-4xl text-center text-[#FF3B3F] 
                                 drop-shadow-[3px_3px_0_#000] relative z-10">
                    JOIN OUR TEAM!
                  </h3>
                </div>
              </div>
              
              <CardContent className="p-8">
                <p className="font-[Comic Neue] text-center mb-6 text-lg leading-relaxed text-[#424242]">
                  We're always looking for passionate volunteers to help make ComicVerse even better. 
                  If you love comics and events, we want you!
                  <span className="font-[Bangers] text-[#2E3192] block mt-2">BE A HERO!</span>
                </p>
                
                <div className="text-center">
                  <div className="relative inline-block group/button">
                    <Button 
                      asChild 
                      className="px-8 py-4 h-auto bg-white text-[#2E3192] border-4 border-black
                                 font-[Bangers] text-xl rounded-2xl
                                 hover:bg-[#FFEB3B] hover:scale-105
                                 transform transition-all duration-300 ease-out
                                 shadow-[4px_4px_0px_0px_#000000]
                                 hover:shadow-[6px_6px_0px_0px_#000000]
                                 z-1 relative"
                    >
                      <a href="https://forms.gle/hrMsRDH9HWn88taw9" target="_blank">
                        🦸 VOLUNTEER SIGN-UP! 🦸
                      </a>
                    </Button>
                    
                    {/* Button background layers */}
                    <div className="absolute inset-0 bg-[#FF3B3F] rounded-2xl border-4 border-black
                                   transform rotate-3 transition-transform duration-300
                                   group-hover/button:rotate-6 -z-10"></div>
                    <div className="absolute inset-0 bg-[#2E3192] rounded-2xl border-4 border-black
                                   transform -rotate-2 transition-transform duration-300
                                   group-hover/button:-rotate-4 -z-20"></div>
                  </div>
                </div>
              </CardContent>
              
              {/* Enhanced decorative corners */}
              <div className="absolute top-2 left-2 w-6 h-6 bg-[#FF3B3F] border-2 border-black rounded-full
                             transform rotate-45 transition-transform duration-300 group-hover:rotate-90"></div>
              <div className="absolute top-2 right-2 w-6 h-6 bg-[#FFEB3B] border-2 border-black rounded-full
                             transform -rotate-45 transition-transform duration-300 group-hover:-rotate-90"></div>
              <div className="absolute bottom-2 left-2 w-6 h-6 bg-[#2E3192] border-2 border-black rounded-full
                             transform rotate-12 transition-transform duration-300 group-hover:rotate-45"></div>
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-[#FF3B3F] border-2 border-black rounded-full
                             transform -rotate-12 transition-transform duration-300 group-hover:-rotate-45"></div>
            </Card>
            
            {/* Card background decorative layers */}
            <div className="absolute inset-0 bg-[#FF3B3F] rounded-3xl border-4 border-black
                           transform rotate-2 transition-transform duration-300
                           group-hover:rotate-3 -z-10"></div>
            <div className="absolute inset-0 bg-[#2E3192] rounded-3xl border-4 border-black
                           transform -rotate-1 transition-transform duration-300
                           group-hover:-rotate-2 -z-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;