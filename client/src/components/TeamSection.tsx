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
        staggerChildren: 0.15
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  // Comic-style decorative elements
  const ComicDivider = () => (
    <div className="flex justify-center my-10">
      <svg width="200" height="30" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 15H80L90 5L100 25L110 5L120 25L130 5L140 15H200" stroke="#FF3B3F" strokeWidth="2" strokeDasharray="4 2"/>
        <circle cx="100" cy="15" r="8" fill="#FFEB3B"/>
      </svg>
    </div>
  );

  return (
    <section id="team" className="py-20 bg-[#F5F5F5] relative overflow-hidden">
      {/* Comic-style halftone background */}
      <div className="absolute inset-0 opacity-5" style={{ 
        backgroundImage: "radial-gradient(#2E3192 2px, transparent 2px)",
        backgroundSize: "30px 30px"
      }}></div>
      
      {/* Comic-style frames/borders */}
      <div className="absolute top-0 left-0 w-full h-12 bg-[#FF3B3F] opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-[#FF3B3F] opacity-10"></div>
      <div className="absolute top-12 left-0 w-12 h-[calc(100%-24px)] bg-[#FF3B3F] opacity-10"></div>
      <div className="absolute top-12 right-0 w-12 h-[calc(100%-24px)] bg-[#FF3B3F] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="font-[Bangers] text-5xl text-[#FF3B3F] mb-4 relative">
              MEET OUR TEAM
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-[#FFEB3B] skew-x-[-12deg]"></div>
            </h2>
          </div>
          <p className="font-[Comic Neue] text-lg text-[#424242] max-w-2xl mx-auto mt-8">
            The dedicated organizers who make ComicVerse possible year after year!
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {teamData.map((member, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="group"
            >
              <div className="relative bg-white rounded-lg overflow-hidden shadow-xl transform transition-all hover:rotate-2 hover:scale-105">
                {/* Comic-style frame */}
                <div className="absolute inset-0 border-8 border-[#2E3192] opacity-0 group-hover:opacity-10 transition-opacity rounded-lg"></div>
                
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-56 object-cover transform transition-all group-hover:scale-110"
                  />
                  {/* Comic-style caption */}
                  <div className="absolute top-3 left-3 bg-[#FFEB3B] py-1 px-3 transform -rotate-3 shadow-md">
                    <p className="font-[Bangers] text-sm text-[#212121]">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-4 text-center relative">
                  <h3 className="font-[Bangers] text-2xl text-[#FF3B3F]">{member.name}</h3>
                  <p className="font-[Comic Neue] font-bold text-[#2E3192]">{member.role}</p>
                  <p className="text-sm text-[#424242] mt-2">{member.details}</p>
                  
                  <div className="flex justify-center space-x-3 mt-3">
                    <a 
                      href={member.linkedin} 
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-[#424242] hover:bg-[#FF3B3F] hover:text-white transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a 
                      href={member.twitter} 
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-[#424242] hover:bg-[#FF3B3F] hover:text-white transition-colors"
                    >
                      <Twitter size={16} />
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-[#424242] hover:bg-[#FF3B3F] hover:text-white transition-colors"
                    >
                      <Mail size={16} />
                    </a>
                  </div>
                </div>
                
                {/* Comic-style speech decoration */}
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-[#FF3B3F] rounded-full opacity-0 group-hover:opacity-70 transition-opacity"></div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#FFEB3B] rounded-full opacity-0 group-hover:opacity-80 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <ComicDivider />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex justify-center"
        >
          <Card className="bg-white rounded-lg p-0 max-w-2xl shadow-2xl overflow-hidden">
            <div className="bg-[#2E3192] p-1">
              <div className="bg-[#FFEB3B] p-6 transform -rotate-1">
                <h3 className="font-[Bangers] text-3xl text-center text-[#FF3B3F] relative z-10">
                  JOIN OUR TEAM!
                </h3>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="font-[Comic Neue] text-center mb-6">
                We're always looking for passionate volunteers to help make ComicVerse even better. If you love comics and events, we want you!
              </p>
              <div className="text-center">
                <div className="relative inline-block">
                  <Button 
                    asChild 
                    className="px-6 py-3 h-auto bg-[#2E3192] text-white font-bold rounded-md hover:bg-opacity-90 transition-colors relative z-10"
                  >
                    <a href="https://forms.gle/hrMsRDH9HWn88taw9" target="_blank">
                      Volunteer Sign-up
                    </a>
                  </Button>
                  <div className="absolute inset-0 bg-[#FF3B3F] rounded-md transform rotate-2 translate-x-1 translate-y-1 -z-10"></div>
                </div>
              </div>
            </CardContent>
            
            {/* Comic-style decorative corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#FF3B3F]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#FF3B3F]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#FF3B3F]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#FF3B3F]"></div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
