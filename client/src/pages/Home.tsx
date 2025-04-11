import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import CollaboratorsSection from "@/components/CollaboratorsSection";
import GuestsSection from "@/components/GuestsSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <EventsSection />
      <CollaboratorsSection />
      <GuestsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </>
  );
}
