import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { eventsData } from "@/data/comicfest";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const EventsSection = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    loop: true,
    slidesToScroll: 1
  });
  
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  
  // Auto-play functionality
  useEffect(() => {
    if (!embla) return;
    
    const autoplay = setInterval(() => {
      if (!hoveredId) { // Only auto-scroll if user is not hovering over any card
        embla.scrollNext();
      }
    }, 4000);
    
    return () => clearInterval(autoplay);
  }, [embla, hoveredId]);
  
  // Update the selected index when the carousel scrolls
  useEffect(() => {
    if (!embla) return;
    
    const onSelect = () => {
      setSelectedIndex(embla.selectedScrollSnap());
    };
    
    embla.on("select", onSelect);
    onSelect(); // Call once to initialize
    
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

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
        
        <div className="relative max-w-[1200px] mx-auto">
          {/* Carousel Navigation */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 z-10">
            <Button 
              onClick={scrollPrev} 
              variant="outline" 
              size="icon" 
              className="rounded-full w-12 h-12 bg-white shadow-lg text-[#FF3B3F] hover:bg-[#FF3B3F] hover:text-white border-none transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 z-10">
            <Button 
              onClick={scrollNext} 
              variant="outline" 
              size="icon" 
              className="rounded-full w-12 h-12 bg-white shadow-lg text-[#FF3B3F] hover:bg-[#FF3B3F] hover:text-white border-none transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Carousel */}
          <div className="overflow-hidden" ref={viewportRef}>
            <div className="flex">
              {eventsData.map((event) => (
                <div 
                  key={event.id} 
                  className="flex-[0_0_33.333%] min-w-0 pl-4 first:pl-0 md:flex-[0_0_33.333%] sm:flex-[0_0_50%] xs:flex-[0_0_100%]"
                  onMouseEnter={() => setHoveredId(event.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className={`transition-all duration-300 ${hoveredId !== null && hoveredId !== event.id ? 'opacity-40 scale-95' : ''}`}>
                    <Card className="h-full bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 flex flex-col mx-2">
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
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6">
            {eventsData.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                onClick={() => embla && embla.scrollTo(index)}
                className={`w-3 h-3 mx-1 p-0 rounded-full ${
                  selectedIndex === index 
                    ? 'bg-[#FF3B3F]' 
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
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
