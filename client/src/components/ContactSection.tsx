import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you soon!",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#212121] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-[Bangers] text-5xl text-[#FFEB3B] mb-6">CONTACT US</h2>
            <p className="font-[Comic Neue] text-lg mb-8">
              Have questions about ComicFest? We're here to help! Reach out to us through any of these channels.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#FF3B3F] flex items-center justify-center mr-4">
                  <Mail className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-[Comic Neue] font-bold text-xl">Email</h3>
                  <p>info@collegecomicfest.edu</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#FF3B3F] flex items-center justify-center mr-4">
                  <Phone className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-[Comic Neue] font-bold text-xl">Phone</h3>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-[#FF3B3F] flex items-center justify-center mr-4">
                  <MapPin className="text-2xl" />
                </div>
                <div>
                  <h3 className="font-[Comic Neue] font-bold text-xl">Location</h3>
                  <p>Institute of Engineering and Management, Management House</p>
                  <p>D -1, Street No. 13, EP Block, Sector V, Bidhannagar, Kolkata, West Bengal 700091, Kolkata, INDIA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="font-[Comic Neue] font-bold text-xl mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-[#FF3B3F] flex items-center justify-center hover:bg-opacity-80 transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#FF3B3F] flex items-center justify-center hover:bg-opacity-80 transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#FF3B3F] flex items-center justify-center hover:bg-opacity-80 transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#FF3B3F] flex items-center justify-center hover:bg-opacity-80 transition-colors">
                  <FaTiktok size={20} />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white text-[#212121] p-6 rounded-lg shadow-lg">
              <CardHeader className="p-0 pb-6">
                <h3 className="font-[Bangers] text-3xl text-[#FF3B3F] mb-6 text-center">SEND US A MESSAGE</h3>
              </CardHeader>
              <CardContent className="p-0">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <Label htmlFor="name" className="block font-[Comic Neue] font-bold mb-2">Name</Label>
                    <Input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3B3F]"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="email" className="block font-[Comic Neue] font-bold mb-2">Email</Label>
                    <Input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3B3F]"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="subject" className="block font-[Comic Neue] font-bold mb-2">Subject</Label>
                    <Select onValueChange={handleSelectChange} value={formData.subject}>
                      <SelectTrigger id="subject" className="w-full">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tickets">Ticket Information</SelectItem>
                        <SelectItem value="program">Program Questions</SelectItem>
                        <SelectItem value="vendors">Vendor Opportunities</SelectItem>
                        <SelectItem value="sponsors">Sponsorship</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="message" className="block font-[Comic Neue] font-bold mb-2">Message</Label>
                    <Textarea 
                      id="message" 
                      rows={5} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FF3B3F]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full py-3 bg-[#FF3B3F] text-white font-bold rounded-md hover:bg-opacity-90 transition-colors">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-[#2E3192] p-4 rounded-lg">
            <h3 className="font-[Bangers] text-2xl text-center text-white mb-4">EVENT LOCATION</h3>
            <div className="bg-gray-300 w-full h-80 rounded-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1729990665267!2d88.43483987507773!3d22.572632079491672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a90e337bc3%3A0x83415f007fc5f363!2sInstitute%20of%20Engineering%20and%20Management%20Block-GP!5e0!3m2!1sen!2sin!4v1747723691025!5m2!1sen!2sin"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Event Location"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
