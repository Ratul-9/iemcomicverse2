import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Layers, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You're now on our mailing list.",
    });
    setEmail("");
  };

  return (
    <footer className="bg-[#424242] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-[Bangers] text-2xl text-[#FFEB3B] mb-4">COLLEGE COMICFEST</h4>
            <p className="font-[Comic Neue] mb-4">The ultimate celebration of comics, art, and pop culture on campus!</p>
            <p className="font-[Comic Neue] text-sm">© 2025 IEM ComicVerse. All rights reserved.</p>
          </div>
          
          <div>
            <h4 className="font-[Bangers] text-xl text-[#FFEB3B] mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="font-[Comic Neue] hover:text-[#FFEB3B] transition-colors">Home</a></li>
              <li><a href="#events" className="font-[Comic Neue] hover:text-[#FFEB3B] transition-colors">Events</a></li>
              <li><a href="#collaborators" className="font-[Comic Neue] hover:text-[#FFEB3B] transition-colors">Collaborators</a></li>
              <li><a href="#guests" className="font-[Comic Neue] hover:text-[#FFEB3B] transition-colors">Guests</a></li>
              <li><a href="#team" className="font-[Comic Neue] hover:text-[#FFEB3B] transition-colors">Team</a></li>
              <li><a href="#contact" className="font-[Comic Neue] hover:text-[#FFEB3B] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-[Bangers] text-xl text-[#FFEB3B] mb-4">RESOURCES</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="font-[Comic Neue] hover:text-[#FFEB3B] transition-colors">FAQ</a></li>
              <li><a href="#rules" className="font-[Comic Neue] hover:text-[#FFEB3B] transition-colors">Event Rules</a></li>
              <li><a href="#accessibility" className="font-[Comic Neue] hover:text-[#FFEB3B] transition-colors">Accessibility</a></li>
              <li><a href="#schedule" className="font-[Comic Neue] hover:text-[#FFEB3B] transition-colors">Full Schedule</a></li>
              <li><a href="#press" className="font-[Comic Neue] hover:text-[#FFEB3B] transition-colors">Press Kit</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-[Bangers] text-xl text-[#FFEB3B] mb-4">NEWSLETTER</h4>
            <p className="font-[Comic Neue] mb-4">Subscribe for updates and announcements!</p>
            <form className="flex" onSubmit={handleSubscribe}>
              <Input 
                type="email" 
                placeholder="Your email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none bg-white text-[#212121]"
                required
              />
              <Button type="submit" className="bg-[#FF3B3F] px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
                <Layers className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm">
          <p className="font-[Comic Neue] flex items-center justify-center">
            Designed with <Heart className="text-[#FF3B3F] mx-1 h-4 w-4" /> by the ComicVerse Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
