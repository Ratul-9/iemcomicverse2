import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Mail } from "lucide-react";
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

  return (
    <section id="team" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[Bangers] text-5xl text-[#FF3B3F] mb-4">MEET OUR TEAM</h2>
          <p className="font-[Comic Neue] text-lg text-[#424242] max-w-2xl mx-auto">
            The dedicated organizers who make ComicFest possible year after year!
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {teamData.map((member, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-[Bangers] text-2xl text-[#FF3B3F]">{member.name}</h3>
                <p className="font-[Comic Neue] font-bold text-[#2E3192]">{member.role}</p>
                <p className="text-sm text-[#424242] mt-2">{member.details}</p>
                <div className="flex justify-center space-x-3 mt-3">
                  <a href={member.linkedin} className="text-[#424242] hover:text-[#FF3B3F] transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href={member.twitter} className="text-[#424242] hover:text-[#FF3B3F] transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href={`mailto:${member.email}`} className="text-[#424242] hover:text-[#FF3B3F] transition-colors">
                    <Mail size={18} />
                  </a>
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
          className="mt-16 flex justify-center"
        >
          <Card className="bg-white rounded-lg p-6 max-w-2xl shadow-lg">
            <CardContent className="p-0">
              <h3 className="font-[Bangers] text-3xl text-center text-[#FF3B3F] mb-4">JOIN OUR TEAM!</h3>
              <p className="font-[Comic Neue] text-center mb-6">
                We're always looking for passionate volunteers to help make ComicFest even better. If you love comics and events, we want you!
              </p>
              <div className="text-center">
                <Button asChild className="px-6 py-3 h-auto bg-[#2E3192] text-white font-bold rounded-md hover:bg-opacity-90 transition-colors">
                  <a href="#volunteer">Volunteer Sign-up</a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
