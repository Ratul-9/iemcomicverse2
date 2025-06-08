import { motion } from "framer-motion";

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

  const collaborators = [
    { name: "Kolkata Anime Club", logo: collaborator1 },
    { name: "IEM Literary Society", logo: collaborator2 },
    { name: "Otaku Guild", logo: collaborator3 },
    { name: "Lions Club Of Kolkata IEM", logo: collaborator4 },
    { name: "Rotary Club of Salt Lake Silicon Valley", logo: collaborator5 }
  ];

  return (
    <section id="collaborators" className="py-16 sm:py-20 bg-transparent relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #FFEB3B 2px, transparent 2px),
                            radial-gradient(circle at 75% 75%, #FF3B3F 1px, transparent 1px),
                            radial-gradient(circle at 50% 50%, #2E3192 1.5px, transparent 1.5px)`,
          backgroundSize: '50px 50px, 30px 30px, 40px 40px',
          opacity: 0.1
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <div className="bg-purple-950 bg-opacity-60 rounded-3xl p-6 sm:p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8 sm:mb-10 max-w-xs sm:max-w-md mx-auto"
              style={{ whiteSpace: 'normal' }}
            >
              <h2
                className="text-[26px] sm:text-4xl md:text-5xl lg:text-4xl text-white mb-4 relative z-10
                           drop-shadow-[3px_3px_0px_#000000] font-black uppercase tracking-wider leading-tight"
                style={{ fontFamily: "'Akira Expanded Demo', sans-serif", whiteSpace: 'normal' }}
              >
                OUR COLLABORATORS
              </h2>
            </motion.div>

            {/* 👇 Grid adjusted to 2 cards per row on small devices */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {collaborators.map((collaborator, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="w-full h-full"
                >
                  <div
                    className="relative group cursor-pointer h-full flex flex-col justify-center items-center bg-gradient-to-br from-white to-gray-50 rounded-2xl border-4 border-black p-3 sm:p-4
                                transform transition-all duration-300 ease-out
                                hover:scale-105 hover:-translate-y-3
                                shadow-[4px_4px_0px_0px_#000000]
                                hover:shadow-[8px_8px_0px_0px_#000000]"
                    style={{ minHeight: '200px' }}
                  >
                    <div className="flex flex-col items-center justify-center h-full text-center">
                      <div className="mb-4 sm:mb-6 transition-transform duration-300 group-hover:scale-110">
                        <img
                          src={collaborator.logo}
                          alt={collaborator.name}
                          className="max-w-full max-h-16 sm:max-h-20 object-contain filter drop-shadow-md
                                     group-hover:drop-shadow-lg transition-all duration-300"
                        />
                      </div>

                      <h3 className="font-black text-xs sm:text-sm text-[#FF3B3F] text-center
                                     group-hover:text-[#2E3192] transition-colors uppercase leading-snug">
                        {collaborator.name}
                      </h3>
                    </div>

                    <div className="absolute top-3 right-3 w-6 h-6 sm:w-8 sm:h-8 bg-[#FFEB3B] 
                                    border-2 border-black rounded-full transform rotate-12
                                    transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125">
                      <div className="absolute inset-1 bg-[#FF3B3F] rounded-full"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaboratorsSection;
