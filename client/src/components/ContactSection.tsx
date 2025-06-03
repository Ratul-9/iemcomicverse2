import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
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
      description: "We'll get back to you shortly.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#4b1c8b] via-[#381662] to-[#2d114f] text-white font-sans">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-[akira-expanded] font-extrabold tracking-wider text-yellow-400 mb-4 uppercase drop-shadow-xl"
            style={{ fontFamily: "'Akira Expanded Demo', sans-serif" }}>Contact Us</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-md">
              Have any questions or feedback? We're here to assist you anytime.
            </p>

            <div className="space-y-6 text-gray-100">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                  <Mail className="text-purple-800" size={20} />
                </div>
                <p className="text-base">iemcomicverse@gmail.com</p>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                  <Phone className="text-purple-800" size={20} />
                </div>
                <p className="text-base">+91 7908448126, 7076573303</p>
              </div>
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-4">
                  <MapPin className="text-purple-800" size={20} />
                </div>
                <div>
                  <p className="text-base font-semibold">Institute of Engineering and Management</p>
                  <p className="text-sm">D-1, Street No. 13, EP Block, Sector V, Kolkata, India</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="text-lg font-semibold mb-3">Follow us</p>
              <div className="flex space-x-4 text-white">
                <a href="#" className="hover:text-red-400"><Instagram size={20} /></a>
                <a href="#" className="hover:text-yellow-400"><Facebook size={20} /></a>
                <a href="#" className="hover:text-red-400"><Twitter size={20} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-[#f8f6ff] text-black shadow-xl p-8 rounded-lg border border-purple-200">
              <CardHeader className="pb-4">
                <h3 className="text-3xl font-bold text-center text-red-600 tracking-wide">Send a Message</h3>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={formData.name} onChange={handleChange} required className="bg-white text-black border-gray-300" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={formData.email} onChange={handleChange} required className="bg-white text-black border-gray-300" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Select onValueChange={handleSelectChange} value={formData.subject}>
                      <SelectTrigger id="subject" className="bg-white text-black border-gray-300">
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
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" rows={5} value={formData.message} onChange={handleChange} required className="bg-white text-black border-gray-300" />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold">Send Message</Button>
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
          <div className="bg-[#f8f6ff] border border-purple-200 p-4 rounded-lg">
            <h3 className="text-xl font-bold text-center text-yellow-600 mb-4">Event Location</h3>
            <div className="w-full h-80 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.1729990665267!2d88.43483987507773!3d22.572632079491672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a90e337bc3%3A0x83415f007fc5f363!2sInstitute%20of%20Engineering%20and%20Management%20Block-GP!5e0!3m2!1sen!2sin!4v1747723691025!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
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