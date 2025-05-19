import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, MapPin, Clock, ChevronLeft, ChevronRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { eventsData } from "@/data/comicfest";
import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
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

  // Comic-style decorative elements
  const ComicBurst = ({ className }: { className: string }) => (
    <div className={`absolute z-0 ${className}`}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 0L65 40L100 20L75 60L120 75L75 90L100 120L60 100L20 120L45 90L0 75L45 60L20 20L55 40L60 0Z" fill="#FFEB3B" fillOpacity="0.1"/>
      </svg>
    </div>
  );

  const ActionText = ({ className, text }: { className: string, text: string }) => (
    <div className={`absolute z-0 ${className}`}>
      <div className="bg-[#FF3B3F] text-white font-[Bangers] px-3 py-1 transform rotate-12 rounded-lg text-xl opacity-80">
        {text} <Zap className="inline-block h-4 w-4 ml-1" />
      </div>
    </div>
  );

  return (
    <section id="events" className="py-20 bg-[#2E3192] relative overflow-hidden">
      {/* Comic-style background pattern */}
      <div className="absolute inset-0 opacity-40" style={{ 
        background: "url('https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?fit=crop&w=1920&h=1080&auto=format')",
        backgroundSize: "cover", 
        backgroundPosition: "center" 
      }}></div>
      
      <div className="absolute inset-0 bg-gradient-to-r from-[#2E3192] to-transparent opacity-70"></div>
      
      <div className="absolute inset-0" style={{ 
        backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFEB3B' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      }}></div>
      
      {/* Decorative elements */}
      <ComicBurst className="top-20 left-10" />
      <ComicBurst className="bottom-20 right-10" />
      <ActionText className="top-40 right-20" text="WOW!" />
      <ActionText className="bottom-40 left-20" text="POW!" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <h2 className="font-[Bangers] text-5xl text-white mb-4 relative z-10">
              EVENTS
              <div className="absolute -bottom-2 left-0 right-0 h-2 bg-[#FF3B3F] transform skew-x-[-12deg]"></div>
            </h2>
            <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-[#FFEB3B] rounded-lg opacity-20 transform rotate-2 z-0"></div>
          </div>
          <p className="font-[Comic Neue] text-lg text-white text-opacity-90 max-w-2xl mx-auto mt-6">
            Check out our exciting lineup of events! From panels with your favorite comic creators to cosplay competitions, we've got something for everyone.
          </p>
        </motion.div>
        
        <div className="relative max-w-[1200px] mx-auto">
          {/* Comic-style halftone pattern behind carousel */}
          <div className="absolute -inset-4 rounded-xl" style={{ 
            backgroundImage: "radial-gradient(#FF3B3F 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            opacity: 0.1,
            zIndex: 0
          }}></div>
          
          {/* Carousel Navigation */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 z-10">
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
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 z-10">
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
          <div className="overflow-hidden relative z-10" ref={viewportRef}>
            <div className="flex">
              {eventsData.map((event) => (
                <div 
                  key={event.id} 
                  className="flex-[0_0_33.333%] min-w-0 pl-4 first:pl-0 md:flex-[0_0_33.333%] sm:flex-[0_0_50%] xs:flex-[0_0_100%]"
                  onMouseEnter={() => setHoveredId(event.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className={`transition-all duration-300 ${hoveredId !== null && hoveredId !== event.id ? 'opacity-40 scale-95' : ''}`}>
                    <Card className="h-full bg-white rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-105 flex flex-col mx-2 relative">
                      {/* Comic-style frame */}
                      <div className="absolute inset-0 border-[3px] border-[#2E3192] opacity-0 hover:opacity-10 transition-opacity rounded-lg" style={{
                        clipPath: "polygon(0% 3%, 3% 0%, 97% 0%, 100% 3%, 100% 97%, 97% 100%, 3% 100%, 0% 97%)"
                      }}></div>
                      
                      <div className="relative">
                        <img 
                          src={event.image} 
                          alt={event.name}
                          className="w-full h-48 object-cover" 
                        />
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-50"></div>
                        <Badge className={`absolute top-4 right-4 ${event.color} text-white transform rotate-3`}>
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
                        <Link href={`/event/${event.id}`}>
                          <Button 
                            variant="link" 
                            className="text-[#FF3B3F] p-0 font-[Comic Neue] font-bold"
                          >
                            Event Details <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
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
                    ? 'bg-[#FFEB3B]' 
                    : 'bg-white bg-opacity-30'
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
          <div className="relative inline-block">
            <Button 
              asChild 
              className="px-8 py-4 h-auto bg-[#FF3B3F] text-white font-bold rounded-md hover:bg-opacity-90 transition-colors relative z-10"
            >
              <a href="#allevents">View All Events</a>
            </Button>
            <div className="absolute inset-0 bg-[#FFEB3B] rounded-md transform rotate-3 translate-x-1 translate-y-1 -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventsSection;
