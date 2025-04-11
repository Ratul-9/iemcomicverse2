import { motion } from "framer-motion";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
          <h2 className="font-[Bangers] text-5xl text-[#FF3B3F] mb-4">EVENTS & SCHEDULE</h2>
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
          {eventsData.map((day, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                <CardHeader className={`${day.color} text-${day.textColor === 'dark' ? '[#212121]' : 'white'} p-4`}>
                  <h3 className="font-[Bangers] text-3xl">{day.title}</h3>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-6">
                    {day.schedule.map((event, idx) => (
                      <li key={idx}>
                        <div className="flex gap-3">
                          <span className={`font-bold text-${day.accentColor}`}>{event.time}</span>
                          <div>
                            <h4 className="font-[Comic Neue] font-bold">{event.title}</h4>
                            <p className="text-sm text-[#424242]">{event.location} • {event.duration}</p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className={`text-${day.accentColor} font-[Comic Neue] font-bold`}>
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
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
            <a href="#fullschedule">Download Full Schedule</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
