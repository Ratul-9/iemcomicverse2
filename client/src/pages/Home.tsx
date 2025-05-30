

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import GuestsSection from "@/components/GuestsSection";
import TeamSection from "@/components/TeamSection";
import CollaboratorsSection from "@/components/CollaboratorsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import logo1 from "@/web bg.png"; 
import mobileBg from "@/mobile1.png";

const Home = () => {
  return (
    <div className="relative">
      {/* Fixed Backgrounds */}
      <div
        className="fixed inset-0 z-[-10] bg-cover bg-center hidden sm:block"
        style={{ backgroundImage: `url(${logo1})` }}
      />
      <div
        className="fixed inset-0 z-[-10] bg-cover bg-center block sm:hidden"
        style={{ backgroundImage: `url(${mobileBg})` }}
      />

      {/* Main Content */}
      <Navbar />
      <HeroSection />
      <EventsSection />
      <CollaboratorsSection />
      <GuestsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;