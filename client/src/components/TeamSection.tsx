import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import sovan from './sovan.jpg';
import singharup from './singharup.png';
import ankita from "./AnkitaK.png"
import himel from './Himel.png';
import aniruddha from './ANIRUDDHA GHOSH.png';
import ankitaM from "./AnkitaM.jpg";
import saurya from "./Saurya Das (1).jpg";
import md from './md.jpg';
import ratul from './Ratul.jpg'
import soumyajeet from './Soumyajeet.png .png'
import archisman from "./archis.png";
import trishan from './Trishan.jpg'
import paramartha from './paramartha.jpg'
import ayush from './Ayush Beraaa.jpg'
import megha from './Megha Biswas .jpg'
import atri from './AtriP.jpg'
import spandan from './Spandan-Samanta.jpeg'
import adrika from './Adrika K.jpg'
import deboleena from './Deboleena .jpg'
import sdb from './SDB.jpg'
import atreyee from './Atreyi.jpg'
import saheb from './Sahrb.jpg'
import director from './Director3.jpg .jpg'
import ayushB from  './Ayush Bekar.jpg'
import pkd from './PKD.jpg'
import sridatri from './SRIDATRI-PURAKAIT.jpeg'

import sounak from './SOUNAK MAJI.png'
import { Key } from "react";

const TeamSection = () => {
  const teamData = [
    { name: "Debnath Mukherjee", role: "", image: saheb },
    { name: "Ayush Banerjee", role: "", image: ayushB },
    { name: "Trishan Manna", role: "", image: trishan },
    { name: "Paramartha Ghosh", role: "", image: paramartha },
    { name: "Adrika Kundu", role: "", image: adrika },
    { name: "Singharup Bagchi", role: "", image: singharup },
    { name: "Sovan Ghosh", role: "", image: sovan },
    { name: "Himel Jana", role: "", image: himel },
    { name: "Aniruddha Ghosh", role: "", image: aniruddha },
    { name: "Ankita Karmakar", role: "", image: ankita },
    { name: "MD. Akram Islam", role: "", image: md },
    { name: "Ankita Mandal", role: "", image: ankitaM },
    { name: "Archisman Saha", role: "", image: archisman },
    { name: "Ratul Mukherjee", role: "", image:ratul},
    { name: "Saurya Das", role: "", image: saurya },
    { name: "Soumyajeet Chowdhury", role: "", image: soumyajeet },
    { name: "Sridatri Purakait", role: "", image: sridatri },
    { name: "Sounak Maji", role: "", image: sounak },
    
  ];

  const facultyData = [
    { name: "Prof. Dr. Satyajit Chakrabarti", role: "Director of IEM-UEM Group", image: director },
    { name: "Prof. Dr. Prabir Kumar Das", role: "HOD - BSH", image: pkd },
    { name: "Dr. Samapika Das Biswas", role: "Asst. HOD - BSH", image: sdb },
    { name: "Deboleena Chakraborty", role: "Faculty Coordinator", image: deboleena },
    { name: "Atreyee Chaudhuri", role: "Faculty Coordinator", image: atreyee }
  ];

  const advisoryData = [
    { name: "Spandan Sarkar", role: "  ", image: spandan },
    { name: "Megha Biswas", role: "", image: megha},
    { name: "Ayush Bera", role: "", image: ayush },
    { name: "Atri Panda", role: "", image: atri },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const memberRows = [];
  for (let i = 0; i < teamData.length; i += 5) {
    memberRows.push(teamData.slice(i, i + 5));
  }

  const renderMemberCard = (member: { name: any; role: any; image: any; }, index: Key | null | undefined) => (
    <motion.div key={index} variants={item} className="w-full h-full">
      <div className="relative group cursor-pointer h-full">
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl border-4 border-black p-2
                       transform transition-all duration-300 ease-out
                       hover:scale-105 hover:-translate-y-3
                       shadow-[6px_6px_0px_0px_#000000]
                       hover:shadow-[10px_10px_0px_0px_#000000]
                       flex flex-col h-full"
                       style={{ minHeight: '220px' }}>
          <div className="flex-1 w-full overflow-hidden border-3 border-black mb-2 rounded-xl
                         group-hover:border-[#FF3B3F] transition-colors duration-300 aspect-square">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="text-center px-1">
            <h3 className="font-black text-xs text-[#FF3B3F] mb-0.5
                           group-hover:text-[#2E3192] transition-colors uppercase leading-tight">
              {member.name}
            </h3>
            <p className="font-bold text-[#2E3192] text-xs">
              {member.role}
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-purple-800 bg-opacity-60 rounded-2xl
                       transform rotate-1 transition-transform duration-300
                       group-hover:rotate-2 -z-10"></div>
      </div>
    </motion.div>
  );

  return (
    <section id="team" className="py-20 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0" style={{ 
        backgroundImage: `radial-gradient(circle at 25% 25%, #2E3192 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, #FF3B3F 1px, transparent 1px),
                         radial-gradient(circle at 50% 50%, #FFEB3B 1.5px, transparent 1.5px)`,
        backgroundSize: '50px 50px, 30px 30px, 40px 40px',
        opacity: 0.1
      }}></div>

      {/* Faculty Section */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-7xl mx-auto mt-12">
          <div className="bg-purple-950 bg-opacity-60 rounded-3xl p-4 md:p-8 lg:p-12 backdrop-blur-sm relative overflow-hidden">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 md:mb-12">
              <h2 className="text-4xl md:text-6xl lg:text-5xl text-white mb-4 relative z-10 drop-shadow-[4px_4px_0px_#000000] font-black uppercase tracking-wider"
              style={{ fontFamily: "'Akira Expanded Demo', sans-serif" }}>
                Faculty
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center">
              {facultyData.map((member, index) => renderMemberCard(member, `faculty-${index}`))}
            </div>
          </div>
        </motion.div>

        <br></br>
        <br></br>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-7xl mx-auto">
          <div className="bg-purple-950 bg-opacity-60 rounded-3xl p-4 md:p-8 lg:p-12 backdrop-blur-sm relative overflow-hidden">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 md:mb-12">
              <h2 className="text-4xl md:text-6xl lg:text-5xl text-white mb-4 relative z-10 drop-shadow-[4px_4px_0px_#000000] font-black uppercase tracking-wider"
              style={{ fontFamily: "'Akira Expanded Demo', sans-serif" }}>
                Meet Our Team
              </h2>
            </motion.div>

            <div className="space-y-6">
              {memberRows.map((row, rowIndex) => (
                <div key={rowIndex} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {row.map((member, memberIndex) => renderMemberCard(member, `${rowIndex}-${memberIndex}`))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        

        {/* Advisory Committee Section */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-7xl mx-auto mt-12">
          <div className="bg-purple-950 bg-opacity-60 rounded-3xl p-4 md:p-8 lg:p-12 backdrop-blur-sm relative overflow-hidden">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 md:mb-12">
              <h2 className="text-4xl md:text-6xl lg:text-5xl text-white mb-4 relative z-10 drop-shadow-[4px_4px_0px_#000000] font-black uppercase tracking-wider"
              style={{ fontFamily: "'Akira Expanded Demo', sans-serif" }}>
                Advisory Committee
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
              {advisoryData.map((member, index) => renderMemberCard(member, `advisory-${index}`))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;