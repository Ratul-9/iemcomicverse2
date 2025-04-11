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
  
  return (
    <section id="collaborators" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[Bangers] text-5xl text-[#2E3192] mb-4">OUR COLLABORATORS</h2>
          <p className="font-[Comic Neue] text-lg text-[#424242] max-w-2xl mx-auto">
            ComicFest wouldn't be possible without the support of these amazing partners and sponsors!
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center mb-12"
        >
          {collaboratorsData.map((collaborator, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="p-4 w-full h-full flex items-center justify-center transform transition-transform hover:scale-110"
            >
              <img 
                src={collaborator.logo} 
                alt={collaborator.name} 
                className="max-w-full max-h-24" 
              />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative p-6 max-w-3xl mx-auto text-center bg-white rounded-lg mb-12"
          style={{
            borderRadius: "1rem",
            position: "relative",
            "&:after": {
              content: '""',
              position: "absolute",
              bottom: 0,
              left: "50%",
              width: 0,
              height: 0,
              border: "20px solid transparent",
              borderTopColor: "#ffffff",
              borderBottom: 0,
              marginLeft: "-20px",
              marginBottom: "-20px",
            }
          }}
        >
          <p className="text-lg font-[Comic Neue] italic">
            "We're proud to support College ComicFest and the incredible creativity of students. This event showcases the amazing talent and passion for comics and pop culture on campus!"
          </p>
          <p className="mt-4 font-bold">Jane Smith, CEO of Comic Publishers International</p>
          
          <div className="absolute w-0 h-0" style={{
            left: "50%",
            bottom: "-20px",
            marginLeft: "-20px",
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderTop: "20px solid white"
          }}></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button asChild className="px-8 py-4 h-auto bg-[#2E3192] text-white font-bold rounded-md hover:bg-opacity-90 transition-colors">
            <a href="#becomepartner">Become a Partner</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;
