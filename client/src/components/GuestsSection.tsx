import { motion } from "framer-motion";

const GuestsSection = () => {
  const guestsData = [
    {
      name: "Jane Smith",
      bio: "Award-winning comic book artist known for her vibrant superhero illustrations.",
      image: "https://via.placeholder.com/200x250/cccccc/666666?text=Guest+1"
    },
    {
      name: "Mike Johnson", 
      bio: "Veteran comic writer with over 20 years of experience in creating compelling narratives.",
      image: "https://via.placeholder.com/200x250/cccccc/666666?text=Guest+2"
    },
    {
      name: "Sarah Chen",
      bio: "Digital comic creator and pioneer in interactive storytelling and modern technology.",
      image: "https://via.placeholder.com/200x250/cccccc/666666?text=Guest+3"
    },
    {
      name: "David Rodriguez",
      bio: "Indie comic publisher and advocate for diverse voices in the comic book industry.",
      image: "https://via.placeholder.com/200x250/cccccc/666666?text=Guest+4"
    },
    {
      name: "Lisa Park",
      bio: "Manga artist and illustrator specializing in fantasy and adventure stories.",
      image: "https://via.placeholder.com/200x250/cccccc/666666?text=Guest+5"
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
    <section id="guests" className="py-20 bg-transparent relative overflow-hidden">
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
                           drop-shadow-[4px_4px_0px_#000000] font-black uppercase tracking-wider"
                           style={{ fontFamily: "'Akira Expanded Demo', sans-serif" }}>
                Guests
              </h2>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
              {guestsData.map((guest, index) => (
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
                                   style={{ minHeight: '500px' }}>
                      
                      {/* Image container without number badge */}
                      <div className="w-full h-48 mb-4 overflow-hidden rounded-xl border-3 border-black
                                     group-hover:border-[#FF3B3F] transition-colors duration-300">
                        <img 
                          src={guest.image} 
                          alt={guest.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="flex flex-col flex-1">
                        <h3 className="font-black text-xl text-[#FF3B3F] mb-3 text-center
                                       group-hover:text-[#2E3192] transition-colors uppercase">
                          {guest.name}
                        </h3>
                        
                        <p className="text-sm text-[#424242] leading-relaxed text-center flex-1">
                          {guest.bio}
                        </p>
                        
                        <div className="mt-4">
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

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 text-center"
        >
          <div className="relative inline-block group">
            <a
              href="#all-guests"
              className="px-6 py-3 bg-[#FF3B3F] text-white font-black text-lg uppercase border-4 border-black rounded-2xl shadow-[4px_4px_0px_#000] hover:scale-105 hover:shadow-[6px_6px_0px_#000] transition-transform duration-300"
            >
              View All Guests
            </a>
            <div className="absolute inset-0 bg-[#FF3B3F] rounded-2xl border-4 border-black
                           transform rotate-2 transition-transform duration-300
                           group-hover:rotate-3 -z-10"></div>
            <div className="absolute inset-0 bg-[#2E3192] rounded-2xl border-4 border-black
                           transform -rotate-1 transition-transform duration-300
                           group-hover:-rotate-2 -z-20"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuestsSection;
