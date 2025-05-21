import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-[#2E3192] overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-40" style={{ 
        background: "url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?fit=crop&w=1920&h=1080&auto=format')",
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#2E3192] to-transparent opacity-70"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h4 className="font-[Comic Neue] font-bold text-[#FFEB3B] mb-2">July 20-21, 2025</h4>
            <h1 className="font-[Bangers] text-5xl md:text-7xl mb-4 text-white">IEM<br /><span className="text-[#FF3B3F]">COMIC</span><span className="text-[#FFEB3B]">VERSE</span></h1>
            <p className="font-[Comic Neue] text-lg mb-6">Join us for the most exciting comic convention on campus! Three days filled with amazing guests, panels, cosplay contests, and much more!</p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="px-6 py-6 h-auto bg-[#FF3B3F] text-white font-bold rounded-md hover:bg-opacity-90 transition-colors">
                <a href="#events">Explore Events</a>
              </Button>
              <Button asChild className="px-6 py-6 h-auto bg-[#FFEB3B] text-[#212121] font-bold rounded-md hover:bg-opacity-90 transition-colors">
                <a href="#tickets">Register Now</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="comic-border bg-white p-1"
            style={{ 
              clipPath: "polygon(0% 3%, 3% 0%, 97% 0%, 100% 3%, 100% 97%, 97% 100%, 3% 100%, 0% 97%)" 
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1534809027769-b00d750a6bac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="ComicFest Poster" 
              className="w-full h-auto"
            />
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-0 right-0 flex justify-center"
        >
          <a href="#events" className="text-white">
            <ChevronDown size={36} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
