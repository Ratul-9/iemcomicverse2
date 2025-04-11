import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { eventsData } from "@/data/comicfest";

const EventsSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="events" className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[Bangers] text-5xl text-[#FF3B3F] mb-4">EVENTS</h2>
          <p className="font-[Comic Neue] text-lg text-[#424242] max-w-2xl mx-auto">
            Check out our exciting lineup of events! From panels with your favorite comic creators to cosplay competitions, we've got something for everyone.
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {eventsData.map((event) => (
            <motion.div key={event.id} variants={item}>
              <Card className="h-full bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105 flex flex-col">
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-48 object-cover" 
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
                  <Badge className={`absolute top-4 right-4 ${event.color} text-white`}>
                    {event.date}
                  </Badge>
                </div>
                
                <CardContent className="p-6 flex-grow">
                  <h3 className="font-[Bangers] text-2xl text-[#2E3192] mb-3">{event.name}</h3>
                  
                  <div className="flex items-center mb-2 text-[#424242]">
                    <MapPin size={16} className="mr-2 text-[#FF3B3F]" />
                    <span className="font-[Comic Neue] font-bold">{event.venue}</span>
                  </div>
                  
                  <div className="flex items-center mb-4 text-[#424242]">
                    <Clock size={16} className="mr-2 text-[#FF3B3F]" />
                    <span className="font-[Comic Neue]">{event.time}</span>
                  </div>
                  
                  <p className="text-sm text-[#424242] line-clamp-3">{event.description}</p>
                </CardContent>
                
                <CardFooter className="border-t p-4">
                  <Button variant="link" className="text-[#FF3B3F] p-0 font-[Comic Neue] font-bold">
                    Event Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Button asChild className="px-8 py-4 h-auto bg-[#FF3B3F] text-white font-bold rounded-md hover:bg-opacity-90 transition-colors">
            <a href="#allevents">View All Events</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
