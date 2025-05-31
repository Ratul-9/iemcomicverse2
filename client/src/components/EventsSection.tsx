import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Zap, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";
import segment1 from './segment1.png';
import segment2 from './segment2.png';
import segment3 from './segment3.png';
import segment4 from './segment4.png';
import segment5 from './segment5.png';
import segment6 from './segment6.png';
import segment7 from './segment7.png';
// Sample events data (5 cards)
const eventsData = [
  {
    id: 1,
    
    image: segment1,
    color: "bg-[#FF3B3F]"
  },
  {
    id: 2,
    
    image: segment2,
    color: "bg-[#2E3192]"
  },
  {
    id: 3,
   
    image: segment3,
    color: "bg-[#FFEB3B] text-[#2E3192]"
  },
  {
    id: 4,
   
    image: segment4,
    color: "bg-[#FF3B3F]"
  },
  {
    id: 5,
 
    image:segment5,
    color: "bg-[#2E3192]"
  },
  {
    id: 6,
  
    image: segment6,
    color: "bg-[#2E3192]"
  },
  {
    id: 7,
   
    image: segment7,
    color: "bg-[#FF3B3F]"
  }
];

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
      if (!hoveredId) {
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
    onSelect();
    
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
    <section id="events" className="py-20 bg-transparent relative overflow-hidden">

    
      
      
      
      <div className="absolute inset-0" style={{ 
        backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFEB3B' fill-opacity='0.07'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      }}></div>
      
     
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
        </motion.div>
        
        <div className="relative max-w-[1200px] mx-auto">
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
              {eventsData.map((event, index) => (
                <div 
                  key={`${event.id}-${index}`} 
                  className="flex-[0_0_25%] min-w-0 py-8 pl-4 first:pl-0 lg:flex-[0_0_33.333%] md:flex-[0_0_50%] sm:flex-[0_0_66.666%] xs:flex-[0_0_100%]"
                  onMouseEnter={() => setHoveredId(event.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <Link href={`/event/${event.id}`}>
                    <motion.div
  className="transition-all duration-500 cursor-pointer mx-2 overflow-visible"
  whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
  whileTap={{ scale: 0.95 }}
>

                      <div className="relative h-80 bg-white rounded-2xl overflow-hidden shadow-2xl border-4 border-[#2E3192] group hover:border-[#FF3B3F] transition-all duration-300">
                        
                        {/* Image */}
                        <div className="relative h-full overflow-hidden">
                          <motion.img 
                            src={event.image} 
                            alt={`Event ${event.id}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                          />
                          
                          {/* Comic book halftone overlay */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                               style={{
                                 backgroundImage: "radial-gradient(circle, #2E3192 1px, transparent 1px)",
                                 backgroundSize: "8px 8px"
                               }}></div>
                          
                          {/* Gradient overlay for date visibility */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                          
                         
                          
                          
                          
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-[#FF3B3F] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        </div>
                        
                        {/* Comic book style border effect */}
                        <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#FFEB3B] rounded-2xl transition-all duration-300 pointer-events-none"
                             style={{
                               background: "linear-gradient(45deg, transparent 30%, rgba(255,235,59,0.1) 50%, transparent 70%)",
                               backgroundSize: "200% 200%",
                               animation: hoveredId === event.id ? "shimmer 2s ease-in-out infinite" : "none"
                             }}></div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8">
            {eventsData.map((_, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 0.8 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => embla && embla.scrollTo(index)}
                  className={`w-4 h-4 mx-2 p-0 rounded-full border-2 transition-all duration-300 ${
                    selectedIndex === index 
                      ? 'bg-[#FFEB3B] border-[#2E3192] shadow-lg' 
                      : 'bg-white bg-opacity-30 border-white border-opacity-50 hover:bg-opacity-60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS for shimmer animation */}
     
    </section>
  );
};

export default EventsSection;