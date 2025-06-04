import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import sovan from './sovan.jpg';
import singharup from './singharup.png';
import ratul from './ratul.jpg';
import ankita from './ankita.png';
import himel from './himel.jpg';
import md from './md.jpg';
import { Key } from "react";

const TeamSection = () => {
  const teamData = [
    { name: "Alex Johnson", role: "Event Director", image: sovan },
    { name: "Maria Garcia", role: "Creative Director", image: singharup },
    { name: "David Chen", role: "Guest Relations", image: ratul },
    { name: "Sarah Williams", role: "Logistics Manager", image: himel },
    { name: "Mike Thompson", role: "Marketing Head", image: md },
    { name: "Emma Rodriguez", role: "Tech Lead", image: ankita },
    { name: "James Wilson", role: "PR Manager", image: "https://via.placeholder.com/150x150/FF3B3F/ffffff?text=JW" },
    { name: "Lisa Park", role: "Design Head", image: "https://via.placeholder.com/150x150/FFEB3B/2E3192?text=LP" },
    { name: "Tom Anderson", role: "Content Writer", image: "https://via.placeholder.com/150x150/2E3192/ffffff?text=TA" },
    { name: "Rachel Green", role: "Operations", image: "https://via.placeholder.com/150x150/FF3B3F/ffffff?text=RG" },
    { name: "Kevin Lee", role: "Social Media", image: "https://via.placeholder.com/150x150/FF3B3F/ffffff?text=KL" },
    { name: "Sophie Miller", role: "Finance Head", image: "https://via.placeholder.com/150x150/2E3192/ffffff?text=SM" },
    { name: "Chris Evans", role: "HR Manager", image: "https://via.placeholder.com/150x150/FFEB3B/2E3192?text=CE" },
    { name: "Maya Patel", role: "Logistics", image: "https://via.placeholder.com/150x150/2E3192/ffffff?text=MP" },
    { name: "Ryan Clark", role: "Volunteer Coord", image: "https://via.placeholder.com/150x150/FF3B3F/ffffff?text=RC" },
    { name: "Zoe Walker", role: "Sponsorship", image: "https://via.placeholder.com/150x150/2E3192/ffffff?text=ZW" },
    { name: "Ben Cooper", role: "Media Relations", image: "https://via.placeholder.com/150x150/FF3B3F/ffffff?text=BC" },
    { name: "Natalie Hall", role: "Web Developer", image: "https://via.placeholder.com/150x150/FFEB3B/2E3192?text=NH" },
    { name: "Grace Kim", role: "Photographer", image: "https://via.placeholder.com/150x150/2E3192/ffffff?text=GK" },
    { name: "Daniel Brown", role: "Security Head", image: "https://via.placeholder.com/150x150/FF3B3F/ffffff?text=DB" }
  ];

  const facultyData = [
    { name: "Dr. Sarah Mitchell", role: "Dean of Students", image: "https://via.placeholder.com/150x150/2E3192/ffffff?text=SM" },
    { name: "Prof. John Davis", role: "Academic Head", image: "https://via.placeholder.com/150x150/FF3B3F/ffffff?text=JD" },
    { name: "Dr. Lisa Chen", role: "Research Director", image: "https://via.placeholder.com/150x150/FFEB3B/2E3192?text=LC" },
    { name: "Prof. Mark Wilson", role: "Department Chair", image: "https://via.placeholder.com/150x150/2E3192/ffffff?text=MW" }
  ];

  const advisoryData = [
    { name: "Mr. Robert Taylor", role: "Industry Expert", image: "https://via.placeholder.com/150x150/FF3B3F/ffffff?text=RT" },
    { name: "Ms. Jennifer Lee", role: "Alumni Representative", image: "https://via.placeholder.com/150x150/2E3192/ffffff?text=JL" },
    { name: "Dr. Michael Brown", role: "External Advisor", image: "https://via.placeholder.com/150x150/FFEB3B/2E3192?text=MB" },
    { name: "Ms. Patricia White", role: "Community Leader", image: "https://via.placeholder.com/150x150/2E3192/ffffff?text=PW" },
    { name: "Mr. David Johnson", role: "Board Member", image: "https://via.placeholder.com/150x150/FF3B3F/ffffff?text=DJ" }
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

        {/* Faculty Section */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-7xl mx-auto mt-12">
          <div className="bg-purple-950 bg-opacity-60 rounded-3xl p-4 md:p-8 lg:p-12 backdrop-blur-sm relative overflow-hidden">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8 md:mb-12">
              <h2 className="text-4xl md:text-6xl lg:text-5xl text-white mb-4 relative z-10 drop-shadow-[4px_4px_0px_#000000] font-black uppercase tracking-wider"
              style={{ fontFamily: "'Akira Expanded Demo', sans-serif" }}>
                Faculty
              </h2>
            </motion.div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-center">
              {facultyData.map((member, index) => renderMemberCard(member, `faculty-${index}`))}
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {advisoryData.map((member, index) => renderMemberCard(member, `advisory-${index}`))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;