import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from 'path';

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for ComicFest app
  
  // Route to retrieve event schedule
  app.get('/api/events', (req, res) => {
    res.json({
      events: [
        {
          title: "DAY 1: MAY 15",
          color: "bg-[#FF3B3F]",
          textColor: "white",
          accentColor: "[#FF3B3F]",
          schedule: [
            {
              time: "10:00 AM",
              title: "Opening Ceremony",
              location: "Main Hall",
              duration: "45 min"
            },
            // More events...
          ]
        },
        // More days...
      ]
    });
  });
  
  // Route to retrieve collaborators
  app.get('/api/collaborators', (req, res) => {
    res.json({
      collaborators: [
        {
          name: "Comic Publisher",
          logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format",
        },
        // More collaborators...
      ]
    });
  });
  
  // Route to retrieve guests
  app.get('/api/guests', (req, res) => {
    res.json({
      guests: [
        {
          name: "JOHN ARTIST",
          role: "Comic Artist",
          image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&auto=format",
          bio: "Award-winning comic artist known for \"Super Squad\" and \"Midnight Heroes\" series.",
          twitter: "#",
          instagram: "#",
          website: "#",
          panel: "Comic Art Masterclass",
          panelTime: "May 15",
          panelLocation: "2:00 PM • Room A"
        },
        // More guests...
      ]
    });
  });
  
  // Route to retrieve team members
  app.get('/api/team', (req, res) => {
    res.json({
      team: [
        {
          name: "ALEX CHEN",
          role: "Event Director",
          image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=300&h=300&fit=crop&auto=format",
          details: "Senior, Graphic Design",
          linkedin: "#",
          twitter: "#",
          email: "alex@comicfest.edu"
        },
        // More team members...
      ]
    });
  });
  
  // Handle contact form submissions
  app.post('/api/contact', (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Validate form data
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    
    // In a real app, you would process this data (store in database, send email, etc.)
    
    // Send success response
    res.status(200).json({ 
      success: true, 
      message: "Your message has been received. We'll get back to you soon!" 
    });
  });
  
  // Handle newsletter subscriptions
  app.post('/api/subscribe', (req, res) => {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }
    
    // In a real app, you would add this email to a mailing list
    
    res.status(200).json({ 
      success: true, 
      message: "You have been successfully subscribed to our newsletter!" 
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
