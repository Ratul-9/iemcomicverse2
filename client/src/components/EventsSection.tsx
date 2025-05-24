import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, MapPin, Clock, ChevronLeft, ChevronRight, Zap, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";

// Sample events data (5 cards)
const eventsData = [
  {
    id: 1,
    name: "Comic Creator Panel",
    venue: "Main Hall",
    time: "10:00 AM - 12:00 PM",
    date: "Day 1",
    description: "Meet your favorite comic creators and learn about their creative process. Q&A session included with industry professionals.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=300",
    color: "bg-[#FF3B3F]"
  },
  {
    id: 2,
    name: "Cosplay Competition",
    venue: "Arena Stage",
    time: "2:00 PM - 5:00 PM",
    date: "Day 1",
    description: "Show off your best costume! Prizes for best original, best craftsmanship, and fan favorite categories.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?fit=crop&w=400&h=300",
    color: "bg-[#2E3192]"
  },
  {
    id: 3,
    name: "Digital Art Workshop",
    venue: "Workshop Room A",
    time: "11:00 AM - 1:00 PM",
    date: "Day 2",
    description: "Learn digital illustration techniques from professional artists. Tablets provided for hands-on experience.",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?fit=crop&w=400&h=300",
    color: "bg-[#FFEB3B] text-[#2E3192]"
  },
  {
    id: 4,
    name: "Superhero Movie Marathon",
    venue: "Cinema Hall",
    time: "6:00 PM - 11:00 PM",
    date: "Day 2",
    description: "Back-to-back screening of classic superhero movies with director commentary and trivia games.",
    image: "https://images.unsplash.com/photo-1489599162715-27e6b82659d2?fit=crop&w=400&h=300",
    color: "bg-[#FF3B3F]"
  },
  {
    id: 5,
    name: "Comic Trading Fair",
    venue: "Exhibition Floor",
    time: "9:00 AM - 6:00 PM",
    date: "Both Days",
    description: "Buy, sell, and trade rare comics. Special appearances by comic shop owners and collectors worldwide.",
    image: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?fit=crop&w=400&h=300",
    color: "bg-[#2E3192]"
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

  // Comic book sound effects for cards
  const ComicSoundEffect = ({ text, className }: { text: string, className: string }) => (
    <motion.div 
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      className={`absolute ${className} z-20 pointer-events-none`}
    >
      <div className="bg-[#FFEB3B] text-[#2E3192] font-[Bangers] text-sm px-2 py-1 rounded-full border-2 border-[#2E3192] shadow-lg transform -rotate-12">
        {text}
      </div>
    </motion.div>
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
              {eventsData.map((event, index) => (
                <div 
                  key={event.id} 
                  className="flex-[0_0_20%] min-w-0 pl-4 first:pl-0 lg:flex-[0_0_25%] md:flex-[0_0_33.333%] sm:flex-[0_0_50%] xs:flex-[0_0_100%]"
                  onMouseEnter={() => setHoveredId(event.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <motion.div 
                    className={`transition-all duration-500 ${hoveredId !== null && hoveredId !== event.id ? 'opacity-40 scale-95' : ''}`}
                    whileHover={{ 
                      y: -8,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                  >
                    <Card className="h-full bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col mx-2 relative border-4 border-[#2E3192] group hover:border-[#FF3B3F] transition-all duration-300">
                      
                      {/* Comic book speech bubble */}
                      {hoveredId === event.id && (
                        <ComicSoundEffect 
                          text="ZOOM!" 
                          className="top-2 right-2" 
                        />
                      )}
                      
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                           style={{
                             backgroundImage: "repeating-linear-gradient(45deg, #FFEB3B 0px, #FFEB3B 10px, transparent 10px, transparent 20px)",
                           }}></div>
                      
                      {/* Comic-style corner decorations */}
                      <div className="absolute top-0 left-0 w-8 h-8 bg-[#FFEB3B] transform rotate-45 -translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-0 right-0 w-8 h-8 bg-[#FF3B3F] transform rotate-45 translate-x-4 -translate-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      <div className="relative overflow-hidden">
                        <motion.img 
                          src={event.image} 
                          alt={event.name}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
                          whileHover={{ scale: 1.1 }}
                        />
                        
                        {/* Comic book halftone overlay */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                             style={{
                               backgroundImage: "radial-gradient(circle, #2E3192 1px, transparent 1px)",
                               backgroundSize: "8px 8px"
                             }}></div>
                        
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-60"></div>
                        
                        {/* Animated badge */}
                        <motion.div
                          initial={{ scale: 1, rotate: 3 }}
                          whileHover={{ scale: 1.1, rotate: -3 }}
                          className="absolute top-4 right-4"
                        >
                          <Badge className={`${event.color} text-white border-2 border-white shadow-lg font-[Bangers] text-sm px-3 py-1`}>
                            {event.date}
                            <Star className="inline-block h-3 w-3 ml-1" />
                          </Badge>
                        </motion.div>
                        
                        {/* Sparkle effects */}
                        <motion.div 
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 1, 0.5]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                          className="absolute top-6 left-6"
                        >
                          <Sparkles className="h-4 w-4 text-[#FFEB3B]" />
                        </motion.div>
                      </div>
                      
                      <CardContent className="p-6 flex-grow relative">
                        {/* Comic book title styling */}
                        <motion.h3 
                          className="font-[Bangers] text-2xl text-[#2E3192] mb-3 relative"
                          whileHover={{ scale: 1.05 }}
                        >
                          {event.name}
                          <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#FFEB3B] transform skew-x-[-12deg] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </motion.h3>
                        
                        {/* Info items with hover animations */}
                        <motion.div 
                          className="flex items-center mb-2 text-[#424242] group/item hover:text-[#FF3B3F] transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <MapPin size={16} className="mr-2 text-[#FF3B3F]" />
                          </motion.div>
                          <span className="font-[Comic Neue] font-bold">{event.venue}</span>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center mb-4 text-[#424242] group/item hover:text-[#FF3B3F] transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Clock size={16} className="mr-2 text-[#FF3B3F]" />
                          </motion.div>
                          <span className="font-[Comic Neue]">{event.time}</span>
                        </motion.div>
                        
                        <p className="text-sm text-[#424242] line-clamp-3 font-[Comic Neue]">{event.description}</p>
                        
                        {/* Comic book dots decoration */}
                        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="flex flex-col space-y-1">
                            <div className="w-2 h-2 bg-[#FFEB3B] rounded-full"></div>
                            <div className="w-2 h-2 bg-[#FF3B3F] rounded-full"></div>
                            <div className="w-2 h-2 bg-[#2E3192] rounded-full"></div>
                          </div>
                        </div>
                      </CardContent>
                      
                      <CardFooter className="border-t-4 border-[#2E3192] p-4 bg-gradient-to-r from-transparent to-[#2E3192] to-opacity-5 relative overflow-hidden">
                        {/* Animated background effect */}
                        <motion.div 
                          className="absolute inset-0 bg-[#FFEB3B] opacity-0 group-hover:opacity-10"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        ></motion.div>
                        
                        <Link href={`/event/${event.id}`}>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button 
                              variant="link" 
                              className="text-[#FF3B3F] p-0 font-[Comic Neue] font-bold text-base hover:text-[#2E3192] transition-colors group/btn relative"
                            >
                              <span className="relative z-10">Event Details</span>
                              <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                                className="inline-block"
                              >
                                <ArrowRight className="ml-1 h-4 w-4" />
                              </motion.div>
                              
                              {/* Underline animation */}
                              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#2E3192] group-hover/btn:w-full transition-all duration-300"></div>
                            </Button>
                          </motion.div>
                        </Link>
                      </CardFooter>
                      
                      {/* Comic book style border effect */}
                      <div className="absolute inset-0 border-4 border-transparent group-hover:border-[#FFEB3B] rounded-2xl transition-all duration-300 pointer-events-none"
                           style={{
                             background: "linear-gradient(45deg, transparent 30%, rgba(255,235,59,0.1) 50%, transparent 70%)",
                             backgroundSize: "200% 200%",
                             animation: hoveredId === event.id ? "shimmer 2s ease-in-out infinite" : "none"
                           }}></div>
                    </Card>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots with comic styling */}
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
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="relative inline-block">
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild 
                className="px-8 py-4 h-auto bg-[#FF3B3F] text-white font-[Bangers] text-lg rounded-xl hover:bg-opacity-90 transition-all duration-300 relative z-10 border-4 border-[#2E3192] shadow-xl"
              >
                <a href="#allevents">
                  View All Events
                  <Zap className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>
            <div className="absolute inset-0 bg-[#FFEB3B] rounded-xl transform rotate-3 translate-x-1 translate-y-1 -z-10"></div>
          </div>
        </motion.div>
      </div>
      
      {/* Add CSS for shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% -200%; }
          100% { background-position: 200% 200%; }
        }
      `}</style>
    </section>
  );
};

export default EventsSection;