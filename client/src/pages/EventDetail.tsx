import { useState, useEffect } from "react";
import { useLocation, useRoute, Link } from "wouter";
import { ArrowLeft, Calendar, MapPin, Clock, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { Badge } from "@/components/ui/badge";
import { eventsData } from "@/data/comicfest";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const EventDetail = () => {
  const [, params] = useRoute("/event/:id");
  const eventId = params?.id ? parseInt(params.id) : null;
  const [, setLocation] = useLocation();

  // In a real app, this would be fetched from the API
  // For this example, we'll use the static data from eventsData
  const event = eventsData.find(e => e.id === eventId);

  if (!event) {
    // If event not found, redirect to home
    useEffect(() => {
      setLocation("/");
    }, [setLocation]);
    return null;
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-12 bg-[#F5F5F5] min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mb-6"
          >
            <Button 
              variant="ghost" 
              className="flex items-center text-[#2E3192] mb-4"
              onClick={() => setLocation("/#events")}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Events
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Event Image and Main Details */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="lg:col-span-2"
            >
              <div className="relative rounded-lg overflow-hidden mb-6">
                <img 
                  src={event.image} 
                  alt={event.name} 
                  className="w-full h-[300px] md:h-[400px] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-6">
                  <Badge className={`${event.color} text-white mb-2`}>
                    {event.date}
                  </Badge>
                  <h1 className="font-[Bangers] text-4xl md:text-5xl text-white">
                    {event.name}
                  </h1>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="font-[Bangers] text-2xl text-[#2E3192] mb-4">About This Event</h2>
                <p className="font-[Comic Neue] text-lg text-[#424242] mb-6">
                  {event.description}
                </p>
                
                <p className="font-[Comic Neue] text-lg text-[#424242]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
                  nisl ac ultrices aliquam, velit nisl aliquam nunc, eget ultricies nunc 
                  nisl eget nunc. Nullam auctor, nisl ac ultrices aliquam, velit nisl aliquam 
                  nunc, eget ultricies nunc nisl eget nunc.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="font-[Bangers] text-2xl text-[#2E3192] mb-4">What to Expect</h2>
                <ul className="list-disc pl-6 space-y-2 font-[Comic Neue] text-[#424242]">
                  <li>Interactive sessions with industry experts</li>
                  <li>Exclusive merchandise available only at this event</li>
                  <li>Opportunities to network with fellow enthusiasts</li>
                  <li>Photo opportunities with special props and backdrops</li>
                  <li>Special event-only discounts and offers</li>
                </ul>
              </div>
            </motion.div>

            {/* Event Details Sidebar */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="lg:col-span-1"
            >
              <Card className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <CardContent className="p-0">
                  <div className={`${event.color} p-4 text-white`}>
                    <h3 className="font-[Bangers] text-2xl">Event Details</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-start">
                      <Calendar className="h-5 w-5 text-[#FF3B3F] mr-3 mt-1" />
                      <div>
                        <h4 className="font-[Comic Neue] font-bold text-[#212121]">Date & Time</h4>
                        <p className="text-[#424242]">{event.date} at {event.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-[#FF3B3F] mr-3 mt-1" />
                      <div>
                        <h4 className="font-[Comic Neue] font-bold text-[#212121]">Location</h4>
                        <p className="text-[#424242]">{event.venue}</p>
                        <p className="text-[#424242]">College ComicFest Campus</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-[#FF3B3F] mr-3 mt-1" />
                      <div>
                        <h4 className="font-[Comic Neue] font-bold text-[#212121]">Duration</h4>
                        <p className="text-[#424242]">2 hours</p>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-[#FF3B3F] text-white hover:bg-opacity-90 mt-4">
                      Register for Event
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <CardContent className="p-6">
                  <h3 className="font-[Bangers] text-xl text-[#2E3192] mb-4">Share This Event</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white rounded-lg shadow-md overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="font-[Bangers] text-xl text-[#2E3192] mb-4">Need Help?</h3>
                  <p className="font-[Comic Neue] text-[#424242] mb-4">
                    Have questions about this event? Contact our event organizers:
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <a href="#contact">Contact Us</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Related Events */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="mt-12"
          >
            <h2 className="font-[Bangers] text-3xl text-[#2E3192] mb-6">Related Events</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {eventsData
                .filter(e => e.id !== event.id)
                .slice(0, 3)
                .map(relatedEvent => (
                  <Link key={relatedEvent.id} href={`/event/${relatedEvent.id}`}>
                    <Card className="cursor-pointer h-full bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all hover:scale-105">
                      <div className="relative">
                        <img 
                          src={relatedEvent.image} 
                          alt={relatedEvent.name}
                          className="w-full h-48 object-cover" 
                        />
                        <Badge className={`absolute top-4 right-4 ${relatedEvent.color} text-white`}>
                          {relatedEvent.date}
                        </Badge>
                      </div>
                      
                      <CardContent className="p-4">
                        <h3 className="font-[Bangers] text-xl text-[#2E3192] mb-2">{relatedEvent.name}</h3>
                        
                        <div className="flex items-center text-sm mb-1 text-[#424242]">
                          <MapPin size={14} className="mr-1 text-[#FF3B3F]" />
                          <span className="font-[Comic Neue]">{relatedEvent.venue}</span>
                        </div>
                        
                        <div className="flex items-center text-sm text-[#424242]">
                          <Clock size={14} className="mr-1 text-[#FF3B3F]" />
                          <span className="font-[Comic Neue]">{relatedEvent.time}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EventDetail;