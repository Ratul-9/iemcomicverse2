import React from 'react';
import art7 from '../assets/art7.png';
import Bg5 from '../assets/Bg5.png';
import m5 from '../assets/m5.png';
import m6 from '../assets/m6.png';
import m7 from '../assets/m7.png';
import logo from '../assets/logo.png';
import { Link } from 'wouter';


const ComicVerse = () => {
  const styles = `
    :root {
      --primary-color: #5a5ee3;
      --accent-color-1: #9f17f3;
      --accent-color-2: #f80898;
      --teal-color: #0aeecf;
      --orange-color: #e9640b;
      --purple-color: #9207e9;
      --light-text: #ffffff;
      --dark-text: #333333;
      --brown-bg: #8B4513;
      --anti-color-1: #0AEECF;
      --anti-color-2: #FFD700;
      --anime-pink: #ff69b4;
      --anime-blue: #00bfff;
      --anime-yellow: #ffd700;
      --anime-purple: #9966ff;
      --anime-green: #00ff7f;
      --neon-glow: 0 0 20px;
    }

    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fredoka+One:wght@400&family=Comic+Neue:wght@400;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

    .bangers-regular {
      font-family: "Bangers", system-ui;
      font-weight: 400;
      font-style: normal;
    }

    .comicverse-container * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Comic Sans MS', 'Chalkboard SE', 'Arial', sans-serif;
    }

    .comicverse-container {
      background-color: #20044a;
      color: var(--dark-text);
      overflow-x: hidden;
      min-height: 100vh;
    }

    .comicverse-header {
      color: var(--light-text);
      text-align: center;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      position: relative;
      z-index: 10;
    }

    .comicverse-header::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      background: radial-gradient(circle, transparent, rgba(255, 255, 255, 0.15) 10%, transparent 80%);
      animation: sparkle 10s infinite linear;
      z-index: -1;
    }

    .header-logo {
      max-width: 100px;
      height: auto;
      display: block;
      margin-left: 150px;
    }

    .hero {
      position: relative;
      height: 699px;
      margin: 0 auto;
      
      background: url(${Bg5}) no-repeat center center/cover;
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: var(--light-text);
      overflow: hidden;
    }

    .comic-object {
      position: absolute;
      width: 50px;
      height: 50px;
      background-size: contain;
      background-repeat: no-repeat;
      animation: float-object 10s infinite linear;
      opacity: 0.7;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      padding: 2rem;
      max-width: 900px;
    }

    .event-title {
      font-family: 'Bangers', sans-serif;
      font-size: 12rem;
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 1rem;
      text-shadow: 5px 5px 0px black;
      letter-spacing: 12px;
      animation: pulse 2s infinite, color-cycle 10s infinite;
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }

    @keyframes color-cycle {
      0% { color: #ff69b4; }
      25% { color: #00bfff; }
      50% { color: #ffd700; }
      75% { color: #9966ff; }
      100% { color: #ff69b4; }
    }

    .event-details {
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
      text-shadow: 2px 2px 4px rgba(228, 15, 15, 0.3);
    }

    .event-tagline {
      font-size: 2rem;
      font-style: italic;
      margin-bottom: 2rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
      text-shadow: 2px 2px 4px rgba(209, 6, 6, 0.2);
    }

    .section {
      padding: 5rem 2rem;
      max-width: 1200px;
      margin: 0 auto;
      position: relative;
    }

    @font-face {
  font-family: 'Akira Expanded Demo';
  src: url('../assets/Akira Expanded Demo.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
}

    .section-title {
      font-size: 3.5rem;
      font-family: 'Akira Expanded Demo', sans-serif;
      color: white;
      font-weight: normal;
      text-align: center;
      margin-bottom: 2.5rem;
      position: relative;
      transition: transform 0.2s ease;
    }

    .section-title::after {
      content: '';
      display: block;
      width: 350px;
      height: 5px;
      background: linear-gradient(45deg, #5b1fa5, #e8d6c2, #5b1fa5);
      margin: 0.7rem auto;
      border-radius: 5px;
    }

    .section-title:hover {
      transform: scale(1.4);
    }

    .event-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, auto);
      gap: 1rem;
      max-width: 100%;
      padding: 2rem;
      justify-items: center;
      width: 100%;
      box-sizing: border-box;
      margin-left: -14rem;
    }

    .anime-card {
      width: 500px;
      height: 500px;
      position: relative;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform-style: preserve-3d;
    }

    .anime-card:hover {
      transform: scale(1.1) rotate(5deg) translateZ(50px);
      filter: drop-shadow(0 20px 40px rgba(253, 251, 252, 0.4));
    }

    .card-inner {
      width: 100%;
      height: 100%;
      position: relative;
      background-blend-mode: overlay;
      border-radius: 25px;
      padding: 20px;
      box-sizing: border-box;
      border: 5px solid #fff;
      overflow: hidden;
    }

    .anime-card-1 .card-inner {
      
      background: url(${m5}) no-repeat center center/cover;
    }

    .anime-card-2 .card-inner {
      
      background: url(${m6}) no-repeat center center/cover;
    }

    .anime-card-3 .card-inner {
      
      background: url(${m7}) no-repeat center center/cover;
    }

    .anime-card:hover .card-inner {
      
      background: url(${art7}) no-repeat center center/cover;
      box-shadow: 0 0 10px 3px white;
      animation: glow-pulse 0.6s ease-in-out;
    }

    @keyframes glow-pulse {
      0%, 100% { box-shadow: 0 0 10px 3px white; }
      50% { box-shadow: 0 0 20px 5px white; }
    }

    .anime-card-title {
      font-family: 'Bangers', sans-serif;
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 5px;
      position: relative;
      z-index: 10;
    }

    .anime-card:hover .anime-card-title {
      animation: bounce-letters 0.8s ease-in-out infinite;
    }

    @keyframes bounce-letters {
      0%, 100% { transform: translateY(0); }
      25% { transform: translateY(-10px) rotate(-2deg); }
      50% { transform: translateY(-5px) rotate(2deg); }
      75% { transform: translateY(-15px) rotate(-1deg); }
    }

    .speech-bubble {
      color: white;
      border-radius: 20px;
      padding: 20px;
      margin: 20px 0;
      position: absolute;
      bottom: -100px;
      width: calc(100% - 40px);
      font-weight: 700;
      opacity: 0;
      transform: translateY(100%);
      z-index: 10;
    }

    .anime-card:hover .speech-bubble {
      animation: slide-up 1s ease-out forwards;
    }

    @keyframes slide-up {
      0% {
        transform: translateY(100%);
        opacity: 0;
      }
      100% {
        transform: translateY(-280px);
        opacity: 1;
      }
    }

    .event-date {
      color: var(--purple-color);
      font-weight: bold;
      font-size: 1.2rem;
    }

    .event-location {
      color: var(--teal-color);
      font-weight: bold;
    }

    .registration {
      text-align: center;
      margin-top: 5rem;
    }

    .btn {
      font-family: 'Akira Expanded Demo', sans-serif;
      font-weight: normal;
      display: inline-block;
      padding: 1.5rem 3.5rem;
      background: linear-gradient(45deg, #f4f3f1, #d3a2ef);
      color: #20044a;
      border: none;
      border-radius: 10px;
      font-size: 1.3rem;
      text-decoration: none;
      margin-top: 1.5rem;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
      box-shadow: 0 5px 15px rgba(255, 165, 0, 0.4);
    }

    .btn:hover {
      background: linear-gradient(45deg, #cfa2ef, #8400ff);
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 115, 255, 0.5);
      color: white;
    }

    .btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
      transition: 0.5s;
    }

    .btn:hover::before {
      left: 100%;
    }

    .comicverse-footer {
      background: #eee8e0;
      color: #9d00ff;
      padding: 3rem 2rem;
      text-align: left;
      margin-top: 5rem;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
    }

    .comicverse-footer::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, transparent, rgba(255, 255, 255, 0.15) 10%, transparent 80%);
      animation: sparkle 12s infinite linear;
      z-index: -1;
    }

    @keyframes sparkle {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .footer-content {
      max-width: 1200px;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 6rem 4rem;
    }

    .footer-logo {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      text-shadow: 3px 3px 0px var(--accent-color-1);
    }

    .footer-column {
      flex: 1;
      min-width: 150px;
      margin-bottom: 2rem;
    }

    .footer-column h3 {
      font-family: "Akira Expanded Demo", system-ui;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #20044a;
      font-weight: normal;
    }

    .footer-links a, .resources a {
      color: #9d00ff;
      text-decoration: none;
      display: block;
      margin: 0.5rem 0;
      font-size: 1.1rem;
      transition: all 0.3s ease;
      font-weight: normal;
    }

    .footer-links a:hover, .resources a:hover {
      color: var(--accent-color-1);
      text-decoration: underline;
    }

    .newsletter input[type="email"] {
      padding: 0.5rem;
      width: 70%;
      border: 1px solid #ccc;
      border-radius: 5px;
      margin-right: 0.5rem;
      font-size: 1rem;
    }

    .copyright {
      width: 100%;
      margin-top: 2rem;
      font-size: 1rem;
      opacity: 0.9;
    }

    .designed-by {
      width: 100%;
      text-align: center;
      font-size: 0.9rem;
      margin-top: 0.5rem;
      color: #ccc;
    }

    @media (max-width: 1024px) {
      .event-container {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, auto);
        gap: 1rem;
        margin-left: -1rem;
      }
      .anime-card {
        width: 350px;
        height: 450px;
      }
    }

    @media (max-width: 768px) {
      .event-title {
        font-size: 6rem;
        letter-spacing: 8px;
      }
      .hero {
        height: 500px;
      }
      .event-tagline {
        font-size: 1.2rem;
      }
      .section {
        padding: 3rem 1.5rem;
      }
      .event-container {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(6, auto);
        justify-items: center;
        gap: 1rem;
        margin-left: 0;
      }
      .anime-card {
        width: 350px;
        height: 450px;
      }
      .footer-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }

    @media (max-width: 480px) {
      .event-title {
        font-size: 4rem;
        letter-spacing: 5px;
      }
      .event-details {
        font-size: 1.3rem;
      }
      .event-tagline {
        font-size: 1.3rem;
      }
      .section-title {
        font-size: 2.2rem;
      }
      .anime-card {
        width: 300px;
        height: 400px;
      }
      .anime-card-title {
        font-size: 2rem;
      }
      .footer-column {
        min-width: 100%;
      }
    }
  `;

  return (
    <div className="comicverse-container">
      <style>{styles}</style>
      
      <div className="animated-bg"></div>
      
      <header className="comicverse-header">
        <img src={logo} alt="ComicVerse 2025 Logo" className="header-logo" />
      </header>

      <section className="hero">
        {/* Hero content can be added here */}
      </section>

      <section className="section events">
        <h2 className="section-title">Events</h2>
        <div className="event-container">
          <div className="anime-card anime-card-1">
            <div className="card-inner">
              <h3 className="anime-card-title"></h3>
              <div className="speech-bubble">
                <p style={{ 
                  fontFamily: "'Bropella', sans-serif", 
                  fontSize: '2rem', 
                  textAlign: 'center', 
                  marginLeft: '20px' 
                }}>
                  A captivating showcase of digital art inspired by anime and comics!
                </p>
              </div>
            </div>
          </div>

          <div className="anime-card anime-card-2">
            <div className="card-inner">
              <h3 className="anime-card-title"></h3>
              <div className="speech-bubble">
                <p style={{ 
                  fontFamily: "'Bropella', sans-serif", 
                  fontSize: '2rem', 
                  textAlign: 'center', 
                  marginLeft: '20px' 
                }}>
                  Showcase your creativity and shine in the comic and manga world!
                </p>
              </div>
            </div>
          </div>

          <div className="anime-card anime-card-3">
            <div className="card-inner">
              <h3 className="anime-card-title"></h3>
              <div className="speech-bubble">
                <p style={{ 
                  fontFamily: "'Bropella', sans-serif", 
                  fontSize: '2rem', 
                  textAlign: 'center', 
                  marginLeft: '20px' 
                }}>
                  A short film-making contest showcasing storytelling evolution through the vibrant theme of comics.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="registration">
          <button className="btn" onClick={() => alert('Registration coming soon!')}>
            Register Now!
          </button>
        </div>
      </section>

      <footer className="comicverse-footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>COMICVERSE</h3>
            <p>The ultimate celebration of comics, art, and pop culture on campus!</p>
            <p className="copyright">© 2025 IEM ComicVerse. All rights reserved.</p>
          </div>
          
          <div className="footer-column">
            <h3>QUICK LINKS</h3>
            <div className="footer-links">
              <a href="#">Home</a>
              <a href="#">Events</a>
              <a href="#">Collaborators</a>
              <a href="#">Guests</a>
              <a href="#">Team</a>
              <a href="#">Contact</a>
            </div>
          </div>

          <div className="footer-column">
            <h3>RESOURCES</h3>
            <div className="resources">
              <a href="#">FAQ</a>
              <a href="#">Event Rules</a>
              <a href="#">Accessibility</a>
              <a href="#">Full Schedule</a>
              <a href="#">Press Kit</a>
            </div>
          </div>

          <p className="designed-by">Designed with ❤ by the ComicVerse Team</p>
        </div>
      </footer>
    </div>
  );
};

export default ComicVerse;