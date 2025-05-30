import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";

const TeamSection = () => {
  const teamData = [
    {
      name: "Alex Johnson",
      role: "Event Director",
      details: "Passionate event organizer with 8+ years of experience bringing comic communities together.",
      image: "https://via.placeholder.com/200x250/cccccc/666666?text=Team+1",
      linkedin: "#",
      twitter: "#",
      email: "alex@comicverse.com"
    },
    {
      name: "Maria Garcia",
      role: "Creative Director",
      details: "Visual designer and comic enthusiast who crafts the magical atmosphere of ComicVerse.",
      image: "https://via.placeholder.com/200x250/cccccc/666666?text=Team+2",
      linkedin: "#",
      twitter: "#",
      email: "maria@comicverse.com"
    },
    {
      name: "David Chen",
      role: "Guest Relations",
      details: "Comic industry veteran who coordinates our amazing lineup of creators and special guests.",
      image: "https://via.placeholder.com/200x250/cccccc/666666?text=Team+3",
      linkedin: "#",
      twitter: "#",
      email: "david@comicverse.com"
    },
    {
      name: "Sarah Williams",
      role: "Logistics Manager",
      details: "Detail-oriented organizer ensuring every aspect of the event runs smoothly and efficiently.",
      image: "https://via.placeholder.com/200x250/cccccc/666666?text=Team+4",
      linkedin: "#",
      twitter: "#",
      email: "sarah@comicverse.com"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="team" className="py-20 bg-transparent relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `radial-gradient(circle at 25% 25%, #2E3192 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, #FF3B3F 1px, transparent 1px),
                         radial-gradient(circle at 50% 50%, #FFEB3B 1.5px, transparent 1.5px)`,
        backgroundSize: '50px 50px, 30px 30px, 40px 40px',
        opacity: 0.1
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-purple-950 bg-opacity-60 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-6xl md:text-7xl lg:text-8xl text-white mb-4 relative z-10 
                           drop-shadow-[4px_4px_0px_#000000] font-black uppercase tracking-wider">
                Team
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {teamData.map((member, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="w-full h-full"
                >
                  <div className="relative group cursor-pointer h-full">
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border-4 border-black p-6
                                   transform transition-all duration-300 ease-out
                                   hover:scale-105 hover:-translate-y-3
                                   shadow-[6px_6px_0px_0px_#000000]
                                   hover:shadow-[10px_10px_0px_0px_#000000]
                                   flex flex-col h-full"
                                   style={{ minHeight: '520px' }}>
                      
                      {/* Image container with role badge */}
                      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl border-3 border-black
                                     group-hover:border-[#FF3B3F] transition-colors duration-300">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        {/* Role badge */}
                        <div className="absolute top-3 left-3 bg-[#FFEB3B] py-1 px-3 
                                       rounded-full font-bold text-xs transform -rotate-3 
                                       shadow-[2px_2px_0_#000] border-2 border-black text-[#212121]
                                       transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                          {member.role}
                        </div>
                      </div>
                      
                      <div className="flex flex-col flex-1">
                        <h3 className="font-black text-xl text-[#FF3B3F] mb-2 text-center
                                       group-hover:text-[#2E3192] transition-colors uppercase">
                          {member.name}
                        </h3>
                        
                        <p className="font-bold text-[#2E3192] mb-3 text-center text-sm">
                          {member.role}
                        </p>
                        
                        <p className="text-sm text-[#424242] leading-relaxed text-center flex-1 mb-4">
                          {member.details}
                        </p>
                        
                        {/* Social links */}
                        <div className="flex justify-center space-x-3 mb-4">
                          <a 
                            href={member.linkedin} 
                            className="w-8 h-8 rounded-full flex items-center justify-center 
                                       bg-gray-100 text-[#424242] border-2 border-black
                                       hover:bg-[#FF3B3F] hover:text-white transition-all duration-200
                                       transform hover:scale-110
                                       shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000]"
                          >
                            <Linkedin size={14} />
                          </a>
                          <a 
                            href={member.twitter} 
                            className="w-8 h-8 rounded-full flex items-center justify-center 
                                       bg-gray-100 text-[#424242] border-2 border-black
                                       hover:bg-[#2E3192] hover:text-white transition-all duration-200
                                       transform hover:scale-110
                                       shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000]"
                          >
                            <Twitter size={14} />
                          </a>
                          <a 
                            href={`mailto:${member.email}`} 
                            className="w-8 h-8 rounded-full flex items-center justify-center 
                                       bg-gray-100 text-[#424242] border-2 border-black
                                       hover:bg-[#FFEB3B] hover:text-black transition-all duration-200
                                       transform hover:scale-110
                                       shadow-[2px_2px_0_#000] hover:shadow-[3px_3px_0_#000]"
                          >
                            <Mail size={14} />
                          </a>
                        </div>
                        
                        <div className="mt-auto">
                          <div className="w-4 h-4 bg-[#2E3192] border border-black rounded-full 
                                         transform rotate-45 mx-auto transition-transform duration-300 
                                         group-hover:rotate-90"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-purple-800 bg-opacity-60 rounded-2xl
                                   transform rotate-1 transition-transform duration-300
                                   group-hover:rotate-2 -z-10"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 
        Join Team Card 
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10"
        >
          <div className="max-w-2xl mx-auto">
            <div className="relative group">
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl border-4 border-black p-8
                             transform transition-all duration-300 ease-out
                             hover:scale-105 hover:-translate-y-3
                             shadow-[6px_6px_0px_0px_#000000]
                             hover:shadow-[10px_10px_0px_0px_#000000]
                             relative z-10">
                
                <div className="text-center">
                  <h3 className="text-4xl md:text-5xl text-[#FF3B3F] mb-4 relative z-10 
                                 drop-shadow-[3px_3px_0px_#000000] font-black uppercase tracking-wider">
                    Join Our Team
                  </h3>
                  
                  <p className="text-lg text-[#424242] mb-6 leading-relaxed">
                    We're always looking for passionate volunteers to help make ComicVerse even better. 
                    If you love comics and events, we want you!
                  </p>
                  
                  <div className="relative inline-block group">
                    <button className="px-8 py-4 bg-white text-[#2E3192] border-4 border-black
                                     font-black text-xl rounded-2xl uppercase tracking-wide
                                     hover:bg-[#FFEB3B] hover:scale-105
                                     transform transition-all duration-300 ease-out
                                     shadow-[4px_4px_0px_0px_#000000]
                                     hover:shadow-[6px_6px_0px_0px_#000000]
                                     z-10 relative">
                      VOLUNTEER SIGN-UP
                    </button>
                    <div className="absolute inset-0 bg-[#FF3B3F] rounded-2xl border-4 border-black
                                   transform rotate-2 transition-transform duration-300
                                   group-hover:rotate-3 -z-10"></div>
                    <div className="absolute inset-0 bg-[#2E3192] rounded-2xl border-4 border-black
                                   transform -rotate-1 transition-transform duration-300
                                   group-hover:-rotate-2 -z-20"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-purple-800 bg-opacity-60 rounded-3xl
                             transform rotate-1 transition-transform duration-300
                             group-hover:rotate-2 -z-10"></div>
            </div>
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
};

export default TeamSection;