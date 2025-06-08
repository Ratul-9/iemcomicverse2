// import React from 'react';
// import b5 from '../assets/b5.png';
// import b6 from '../assets/b6.png';
// import b7 from '../assets/b7.png';
// import art4 from '../assets/art4.png';
// import b3 from '../assets/b3.png';
// import f1 from '../assets/f1.png';
// import rcade from '../assets/rcade.png';


// import logo from '../assets/logo.png';
// import Akira_Expanded_Demo from '../assets/fonts/Akira Expanded Demo.otf';

// const RcadeComponent: React.FC = () => {
//   return (
//     <div className="min-h-screen">
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fredoka+One:wght@400&family=Comic+Neue:wght@400;700&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
//         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

//         :root {
//           --primary-color: #5a5ee3;
//           --accent-color-1: #9f17f3;
//           --accent-color-2: #f80898;
//           --teal-color: #0aeecf;
//           --orange-color: #e9640b;
//           --purple-color: #9207e9;
//           --light-text: #ffffff;
//           --dark-text: #333333;
//           --brown-bg: #8B4513;
//           --anti-color-1: #0AEECF;
//           --anti-color-2: #FFD700;
//           --anime-pink: #ff69b4;
//           --anime-blue: #00bfff;
//           --anime-yellow: #ffd700;
//           --anime-purple: #9966ff;
//           --anime-green: #00ff7f;
//           --neon-glow: 0 0 20px;
//         }

//         .bangers-regular {
//           font-family: "Bangers", system-ui;
//           font-weight: 400;
//           font-style: normal;
//         }

//         * {
//           margin: 0;
//           padding: 0;
//           box-sizing: border-box;
//           font-family: 'Comic Sans MS', 'Chalkboard SE', 'Arial', sans-serif;
//         }

//         body {
//           background-color: #65002e;
//           color: var(--dark-text);
//           overflow-x: hidden;
//         }

//         .header {
//           color: var(--light-text);
//           text-align: center;
//           box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//           position: relative;
//           z-index: 10;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           padding: 1rem 2rem;
//         }

//         .header::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           background: radial-gradient(circle, transparent, rgba(255, 255, 255, 0.15) 10%, transparent 80%);
//           animation: sparkle 10s infinite linear;
//           z-index: -1;
//         }

//         .header-logo {
//           max-width: 100px;
//           height: auto;
//           display: block;
//           margin-left: 150px;
//         }

//         .navbar {
//           display: flex;
//           gap: 3rem;
//         }

//         .nav-link {
//           font-family: 'Akira Expanded Demo';
//           font-size: 1.3rem;
//           color: var(--light-text);
//           text-decoration: none;
//           text-transform: uppercase;
//           font-weight: normal;
//           transition: all 0.3s ease;
//           cursor: pointer;
//         }

//         .nav-link:hover {
//           color: rgb(239, 169, 169);
//           transform: translateY(-3px);
//           text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
//         }

//         .hero {
//           position: relative;
//           height: 699px;
//           margin: 0 auto;
          
//           background: url(${rcade}) no-repeat center center/cover;
//           background-size: cover;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//           text-align: center;
//           color: var(--light-text);
//           overflow: hidden;
//         }

//         .comic-object {
//           position: absolute;
//           width: 50px;
//           height: 50px;
//           background-size: contain;
//           background-repeat: no-repeat;
//           animation: float-object 10s infinite linear;
//           opacity: 0.7;
//         }

//         .hero-content {
//           position: relative;
//           z-index: 2;
//           padding: 2rem;
//           max-width: 900px;
//         }

//         .event-title {
//           font-family: 'Bangers', sans-serif;
//           font-size: 12rem;
//           font-weight: bold;
//           text-transform: uppercase;
//           margin-bottom: 1rem;
//           text-shadow: 5px 5px 0px black;
//           letter-spacing: 12px;
//           animation: pulse 2s infinite, color-cycle 10s infinite;
//         }

//         .event-details {
//           font-size: 1.6rem;
//           margin-bottom: 1.5rem;
//           text-shadow: 2px 2px 4px rgba(228, 15, 15, 0.3);
//         }

//         .event-tagline {
//           font-size: 2rem;
//           font-style: italic;
//           margin-bottom: 2rem;
//           max-width: 700px;
//           margin-left: auto;
//           margin-right: auto;
//           text-shadow: 2px 2px 4px rgba(209, 6, 6, 0.2);
//         }

//         .section {
//           padding: 5rem 2rem;
//           max-width: 1200px;
//           margin: 0 auto;
//           position: relative;
//         }

//         .section-title {
//           font-size: 3.5rem;
//           font-family: 'Akira Expanded Demo', sans-serif;
//           color: white;
//           font-weight: normal;
//           text-align: center;
//           margin-bottom: 2.5rem;
//           position: relative;
//           transition: transform 0.2s ease;
//         }

//         .section-title::after {
//           content: '';
//           display: block;
//           width: 340px;
//           height: 5px;
//           background: linear-gradient(45deg, #65002e, #ff6fb5, #65002e);
//           margin: 0.7rem auto;
//           border-radius: 5px;
//         }

//         .section-title:hover {
//           transform: scale(1.4);
//         }

//         .event-container {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           grid-template-rows: repeat(2, auto);
//           gap: 1rem;
//           max-width: 100%;
//           padding: 2rem;
//           justify-items: center;
//           width: 100%;
//           box-sizing: border-box;
//           margin-left: -14rem;
//         }

//         .anime-card {
//           width: 480px;
//           height: 480px;
//           position: relative;
//           cursor: pointer;
//           transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//           transform-style: preserve-3d;
//         }

//         .anime-card:hover {
//           transform: scale(1.1) rotate(5deg) translateZ(50px);
//           filter: drop-shadow(0 20px 40px rgba(253, 251, 252, 0.4));
//         }

//         .card-inner {
//           width: 100%;
//           height: 100%;
//           position: relative;
//           background-blend-mode: overlay;
//           border-radius: 25px;
//           padding: 20px;
//           box-sizing: border-box;
//           border: 5px solid #fff;
//           overflow: hidden;
//         }

//         .anime-card-1 .card-inner {
          
//           background: url(${b7}) no-repeat center center/cover;
//           margin-left: 20px;
//         }

//         .anime-card-2 .card-inner {
          
//           background: url(${b6}) no-repeat center center/cover;
//           margin-left: 17px;
//         }

//         .anime-card-3 .card-inner {
          
//           background: url(${b5}) no-repeat center center/cover;
//           margin-left: 15px;
//         }

//         .anime-card-4 .card-inner {
          
//           background: url(${b3}) no-repeat center center/cover;
//           margin-left: 260px;
//         }

//         .anime-card-5 .card-inner {
          
//           background: url(${f1}) no-repeat center center/cover;
//           margin-left: 260px;
//         }

//         .anime-card:hover .card-inner {
          
//           background: url(${art4}) no-repeat center center/cover;
//           box-shadow: 0 0 10px 3px white;
//           animation: glow-pulse 0.6s ease-in-out;
//         }

//         .anime-card-title {
//           font-family: 'Bropella', sans-serif;
//           font-size: 2.5rem;
//           text-align: center;
//           margin-bottom: 5px;
//           position: relative;
//           z-index: 10;
//         }

//         .anime-card:hover .anime-card-title {
//           animation: bounce-letters 0.8s ease-in-out infinite;
//         }

//         @keyframes bounce-letters {
//           0%, 100% { transform: translateY(0); }
//           25% { transform: translateY(-10px) rotate(-2deg); }
//           50% { transform: translateY(-5px) rotate(2deg); }
//           75% { transform: translateY(-15px) rotate(-1deg); }
//         }

//         .speech-bubble {
//           color: white;
//           border-radius: 20px;
//           padding: 20px;
//           margin: 20px 0;
//           position: absolute;
//           bottom: -100px;
//           width: calc(100% - 40px);
//           font-weight: 700;
//           opacity: 0;
//           transform: translateY(100%);
//           z-index: 10;
//         }

//         .anime-card:hover .speech-bubble {
//           animation: slide-up 1s ease-out forwards;
//         }

//         @keyframes slide-up {
//           0% {
//             transform: translateY(100%);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(-225px);
//             opacity: 1;
//           }
//         }

//         .event-details {
//           font-size: 1.1rem;
//           line-height: 1.4;
//         }

//         .event-date {
//           color: var(--purple-color);
//           font-weight: bold;
//           font-size: 1.2rem;
//         }

//         .event-location {
//           color: var(--teal-color);
//           font-weight: bold;
//         }

//         .burst-container {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//           overflow: visible;
//         }

//         .burst-star {
//           position: absolute;
//           font-size: 2rem;
//           opacity: 0;
//           pointer-events: none;
//           border: none;
//         }

//         .anime-card:hover .burst-container .burst-star {
//           animation: burst-out 0.8s ease-out forwards;
//         }

//         @keyframes burst-out {
//           0% {
//             opacity: 1;
//             transform: scale(0) rotate(0deg);
//           }
//           50% {
//             opacity: 1;
//             transform: scale(1.5) rotate(180deg);
//           }
//           100% {
//             opacity: 0;
//             transform: scale(2) rotate(360deg);
//           }
//         }

//         .star1 { top: 10%; left: 10%; animation-delay: 0s; }
//         .star2 { top: 20%; right: 10%; animation-delay: 0.1s; }
//         .star3 { bottom: 30%; left: 5%; animation-delay: 0.2s; }
//         .star4 { bottom: 10%; right: 15%; animation-delay: 0.3s; }
//         .star5 { top: 50%; left: -10%; animation-delay: 0.15s; }
//         .star6 { top: 40%; right: -10%; animation-delay: 0.25s; }

//         .sparkles {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           pointer-events: none;
//         }

//         .sparkle {
//           position: absolute;
//           width: 4px;
//           height: 4px;
//           background: var(--anti-color-2);
//           border-radius: 50%;
//           opacity: 0;
//         }

//         .anime-card:hover .sparkles .sparkle {
//           animation: sparkle-dance 1s ease-in-out infinite;
//         }

//         @keyframes sparkle-dance {
//           0%, 100% { opacity: 0; transform: scale(0); }
//           50% { opacity: 1; transform: scale(1); }
//         }

//         .sparkle1 { top: 15%; left: 20%; animation-delay: 0s; }
//         .sparkle2 { top: 35%; left: 80%; animation-delay: 0.2s; }
//         .sparkle3 { top: 65%; left: 15%; animation-delay: 0.4s; }
//         .sparkle4 { top: 80%; left: 70%; animation-delay: 0.6s; }
//         .sparkle5 { top: 25%; left: 60%; animation-delay: 0.3s; }
//         .sparkle6 { top: 70%; left: 40%; animation-delay: 0.5s; }

//         .anime-card::before {
//           content: '';
//           position: absolute;
//           top: -5px;
//           left: -5px;
//           right: -5px;
//           bottom: -5px;
//           border-radius: 30px;
//           z-index: -1;
//           opacity: 0;
//           transition: opacity 0.3s ease;
//         }

//         .anime-card:hover::before {
//           opacity: 0.7;
//           animation: rotate-trail 2s linear infinite;
//         }

//         .emoji-explosion {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           font-size: 3rem;
//           opacity: 0;
//           pointer-events: none;
//         }

//         .anime-card:hover .emoji-explosion {
//           animation: emoji-burst 0.6s ease-out forwards;
//         }

//         @keyframes emoji-burst {
//           0% {
//             opacity: 1;
//             transform: translate(-50%, -50%) scale(0);
//           }
//           50% {
//             opacity: 1;
//             transform: translate(-50%, -50%) scale(1.5);
//           }
//           100% {
//             opacity: 0;
//             transform: translate(-50%, -50%) scale(2);
//           }
//         }

//         .registration {
//           text-align: center;
//           margin-top: 5rem;
//         }

//         .btn {
//           font-family: 'Akira Expanded Demo', sans-serif;
//           font-weight: normal;
//           display: inline-block;
//           padding: 1.5rem 3.5rem;
//           background: linear-gradient(45deg, #f4f3f1, #efa2bf);
//           color: #65002e;
//           border: none;
//           border-radius: 10px;
//           font-size: 1.3rem;
//           text-decoration: none;
//           margin-top: 1.5rem;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           position: relative;
//           overflow: hidden;
//           box-shadow: 0 5px 15px rgba(65, 0, 20, 0.4);
//         }

//         .btn:hover {
//           background: linear-gradient(45deg, #efa2c2, #e20066);
//           transform: translateY(-5px);
//           box-shadow: 0 10px 20px rgba(62, 0, 21, 0.5);
//           color: white;
//         }

//         .btn::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
//           transition: 0.5s;
//         }

//         .btn:hover::before {
//           left: 100%;
//         }

//         .footer {
//           background: #eee8e0;
//           font-family: 'BourbonGrotesque', sans-serif;
//           color: #b50c5e !important;
//           padding: 3rem 2rem;
//           text-align: left;
//           margin-top: 5rem;
//           position: relative;
//           overflow: hidden;
//           display: flex;
//           justify-content: center;
//         }

//         .footer::before {
//           content: '';
//           position: absolute;
//           top: -50%;
//           left: -50%;
//           width: 200%;
//           height: 200%;
//           background: radial-gradient(circle, transparent, rgba(255, 255, 255, 0.15) 10%, transparent 80%);
//           animation: sparkle 12s infinite linear;
//           z-index: -1;
//         }

//         .footer-content {
//           max-width: 1200px;
//           width: 100%;
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: space-between;
//           gap: 6rem 4rem;
//         }

//         .footer-logo {
//           font-size: 2.5rem;
//           margin-bottom: 1.5rem;
//           text-shadow: 3px 3px 0px var(--accent-color-1);
//         }

//         .footer-column {
//           flex: 1;
//           min-width: 150px;
//           margin-bottom: 2rem;
//         }

//         .footer-column h3 {
//           font-family: 'Akira Expanded Demo', sans-serif;
//           font-size: 1.5rem;
//           margin-bottom: 1rem;
//           color: #65002e;
//           font-weight: normal;
//         }

//         .footer-links a,
//         .resources a {
//           font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//           color: #b50c5e;
//           font-weight: 700;
//           text-decoration: none;
//           display: block;
//           margin: 0.5rem 0;
//           font-size: 1.1rem;
//           transition: all 0.3s ease;
//           cursor: pointer;
//         }

//         .footer-links a:hover,
//         .resources a:hover {
//           color: rgb(255, 0, 183);
//           text-decoration: underline;
//         }

//         .newsletter input[type="email"] {
//           padding: 0.5rem;
//           width: 70%;
//           border: 1px solid #ccc;
//           border-radius: 5px;
//           margin-right: 0.5rem;
//           font-size: 1rem;
//         }

//         .copyright {
//           width: 100%;
//           margin-top: 2rem;
//           font-size: 1.1rem;
//           font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//           color: #b50c5e;
//           font-weight: 700;
//           opacity: 0.9;
//         }

//         .designed-by {
//           width: 100%;
//           text-align: center;
//           font-size: 0.9rem;
//           margin-top: 0.5rem;
//           font-family: 'Bropella', sans-serif;
//           color: #2e0019;
//         }

//         @media (max-width: 1024px) {
//           .event-container {
//             grid-template-columns: repeat(2, 1fr);
//             grid-template-rows: repeat(3, auto);
//             gap: 1rem;
//             margin-left: -1rem;
//           }
//           .anime-card {
//             width: 350px;
//             height: 450px;
//           }
//         }

//         @media (max-width: 768px) {
//           .event-title {
//             font-size: 6rem;
//             letter-spacing: 8px;
//           }
//           .hero {
//             height: 500px;
//           }
//           .event-tagline {
//             font-size: 1.2rem;
//           }
//           .section {
//             padding: 3rem 1.5rem;
//           }
//           .event-container {
//             grid-template-columns: 1fr;
//             grid-template-rows: repeat(6, auto);
//             justify-items: center;
//             gap: 1rem;
//             margin-left: 0;
//           }
//           .anime-card {
//             width: 350px;
//             height: 450px;
//           }
//           .footer-content {
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//           }
//           .navbar {
//             gap: 1rem;
//           }
//           .nav-link {
//             font-size: 1.5rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .event-title {
//             font-size: 4rem;
//             letter-spacing: 5px;
//           }
//           .event-details {
//             font-size: 1.3rem;
//           }
//           .event-tagline {
//             font-size: 1.3rem;
//           }
//           .section-title {
//             font-size: 2.2rem;
//           }
//           .anime-card {
//             width: 300px;
//             height: 400px;
//           }
//           .anime-card-title {
//             font-size: 2rem;
//           }
//           .footer-column {
//             min-width: 100%;
//           }
//           .navbar {
//             gap: 0.8rem;
//           }
//           .nav-link {
//             font-size: 1.2rem;
//           }
//           .header-logo {
//             max-width: 80px;
//           }
//         }
//       `}</style>

//       <div className="animated-bg"></div>
      
//       <header className="header">
//         <img src={logo} alt="ComicVerse 2025 Logo" className="header-logo" />
        
//       </header>

//       <section className="hero"></section>

//       <section className="section events">
//         <h2 className="section-title">Events</h2>
//         <div className="event-container">
//           <div className="anime-card anime-card-1">
//             <div className="card-inner">
//               <h3 className="anime-card-title"></h3>
//               <div className="speech-bubble">
//                 <p style={{ 
//                   fontFamily: "'Bropella', sans-serif", 
//                   fontSize: '2rem', 
//                   textAlign: 'center', 
//                   marginLeft: '20px' 
//                 }}>
//                   Battlegrounds Mobile India is a popular battle royale game where players fight to be the last one standing on a shrinking battlefield.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="anime-card anime-card-2">
//             <div className="card-inner">
//               <h3 className="anime-card-title"></h3>
//               <div className="speech-bubble">
//                 <p style={{ 
//                   fontFamily: "'Bropella', sans-serif", 
//                   fontSize: '2rem', 
//                   textAlign: 'center', 
//                   marginLeft: '20px' 
//                 }}>
//                   Valorant is a tactical first-person shooter where players engage in team-based combat with unique agents and abilities.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="anime-card anime-card-3">
//             <div className="card-inner">
//               <h3 className="anime-card-title"></h3>
//               <div className="speech-bubble">
//                 <p style={{ 
//                   fontFamily: "'Bropella', sans-serif", 
//                   fontSize: '2rem', 
//                   textAlign: 'center', 
//                   marginLeft: '20px' 
//                 }}>
//                   eFootball is a football simulation game offering realistic gameplay and a variety of teams and leagues to compete in.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="anime-card anime-card-4">
//             <div className="card-inner">
//               <h3 className="anime-card-title"></h3>
//               <div className="speech-bubble">
//                 <p style={{ 
//                   fontFamily: "'Bropella', sans-serif", 
//                   fontSize: '2rem', 
//                   textAlign: 'center', 
//                   marginLeft: '20px' 
//                 }}>
//                   Call of Duty: Mobile brings the classic Call of Duty experience to mobile devices with various modes and iconic maps.
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="anime-card anime-card-5">
//             <div className="card-inner">
//               <h3 className="anime-card-title"></h3>
//               <div className="speech-bubble">
//                 <p style={{ 
//                   fontFamily: "'Bropella', sans-serif", 
//                   fontSize: '2rem', 
//                   textAlign: 'center', 
//                   marginLeft: '20px' 
//                 }}>
//                   Tekken is a renowned fighting game series known for its deep combat mechanics and diverse roster of characters.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="registration">
//           <a href="#" className="btn" onClick={()=> alert("Registrations opening Soon")}>Register Now!</a>
//         </div>
//       </section>

//       <footer className="footer">
//         <div className="footer-content">
//           <div className="footer-column">
//             <h3>COMICVERSE</h3>
//             <p className="copyright">The ultimate celebration of comics, art, and pop culture on campus!</p>
//             <p className="copyright">© 2025 IEM ComicVerse. All rights reserved.</p>
//           </div>

//           <div className="footer-column">
//             <h3>QUICK LINKS</h3>
//             <div className="footer-links">
//               <a href="#">Home</a>
//               <a href="#">Events</a>
//               <a href="#">Collaborators</a>
//               <a href="#">Guests</a>
//               <a href="#">Team</a>
//               <a href="#">Contact</a>
//             </div>
//           </div>

//           <div className="footer-column">
//             <h3>RESOURCES</h3>
//             <div className="resources">
//               <a href="#">FAQ</a>
//               <a href="#">Event Rules</a>
//               <a href="#">Accessibility</a>
//               <a href="#">Full Schedule</a>
//               <a href="#">Press Kit</a>
//             </div>
//           </div>
          
//           <p className="designed-by">Designed with ❤️ by the ComicVerse Team</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default RcadeComponent;


import React from 'react';
import b5 from '../assets/b5.png';
import b6 from '../assets/b6.png';
import b7 from '../assets/b7.png';
import art4 from '../assets/art4.png';
import b3 from '../assets/b3.png';
import f1 from '../assets/f1.png';
import rcade from '../assets/rcade.png';


import logo from '../assets/logo.png';
import Akira_Expanded_Demo from '../assets/fonts/Akira Expanded Demo.otf';

const RcadeComponent: React.FC = () => {
  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fredoka+One:wght@400&family=Comic+Neue:wght@400;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

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

        .bangers-regular {
          font-family: "Bangers", system-ui;
          font-weight: 400;
          font-style: normal;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Comic Sans MS', 'Chalkboard SE', 'Arial', sans-serif;
        }

        body {
          background-color: #65002e;
          color: var(--dark-text);
          overflow-x: hidden;
        }

        .header {
          color: var(--light-text);
          text-align: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 10;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 2rem;
        }

        .header::before {
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

        .navbar {
          display: flex;
          gap: 3rem;
        }

        .nav-link {
          font-family: 'Akira Expanded Demo';
          font-size: 1.3rem;
          color: var(--light-text);
          text-decoration: none;
          text-transform: uppercase;
          font-weight: normal;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .nav-link:hover {
          color: rgb(239, 169, 169);
          transform: translateY(-3px);
          text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5);
        }
.hero {
  width: 100%;
  height: 100vh;
  background-image: url(${rcade});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
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
          width: 340px;
          height: 5px;
          background: linear-gradient(45deg, #65002e, #ff6fb5, #65002e);
          margin: 0.7rem auto;
          border-radius: 5px;
        }

        .section-title:hover {
          transform: scale(1.4);
        }

        .event-container {
          
           display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-left: 0;
  padding: 1rem;
  justify-items: center;
          grid-template-rows: repeat(2, auto);
          gap: 1rem;
          max-width: 100%;
          padding: 2rem;
          justify-items: center;
          width: 100%;
          box-sizing: border-box;
          
        }

        .anime-card {
  width: 320px;
  height: 420px;
  animation: slideInUp 0.6s ease-out;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }

        .anime-card:hover {
          transform: scale(1.1) rotate(5deg) translateZ(50px);
          filter: drop-shadow(0 20px 40px rgba(253, 251, 252, 0.4));
        }
          @keyframes slideInUp {
  0% { transform: translateY(60px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

.speech-text {
  font-family: 'Bropella', sans-serif;
  font-size: 1.1rem;
  line-height: 1.5;
  text-align: center;
  margin: 0;
  padding: 0.5rem;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
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
          
          background: url(${b7}) no-repeat center center/cover;
          
        }

        .anime-card-2 .card-inner {
          
          background: url(${b6}) no-repeat center center/cover;
          
        }

        .anime-card-3 .card-inner {
          
          background: url(${b5}) no-repeat center center/cover;
          
        }

        .anime-card-4 .card-inner {
          
          background: url(${b3}) no-repeat center center/cover;
          
        }

        .anime-card-5 .card-inner {
          
          background: url(${f1}) no-repeat center center/cover;
          
        }

        .anime-card:hover .card-inner {
          
          background: url(${art4}) no-repeat center center/cover;
          box-shadow: 0 0 10px 3px white;
          animation: glow-pulse 0.6s ease-in-out;
        }

        .anime-card-title {
          font-family: 'Bropella', sans-serif;
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
            transform: translateY(-225px);
            opacity: 1;
          }
        }

        .event-details {
          font-size: 1.1rem;
          line-height: 1.4;
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

        .burst-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: visible;
        }

        .burst-star {
          position: absolute;
          font-size: 2rem;
          opacity: 0;
          pointer-events: none;
          border: none;
        }

        .anime-card:hover .burst-container .burst-star {
          animation: burst-out 0.8s ease-out forwards;
        }

        @keyframes burst-out {
          0% {
            opacity: 1;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.5) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: scale(2) rotate(360deg);
          }
        }

        .star1 { top: 10%; left: 10%; animation-delay: 0s; }
        .star2 { top: 20%; right: 10%; animation-delay: 0.1s; }
        .star3 { bottom: 30%; left: 5%; animation-delay: 0.2s; }
        .star4 { bottom: 10%; right: 15%; animation-delay: 0.3s; }
        .star5 { top: 50%; left: -10%; animation-delay: 0.15s; }
        .star6 { top: 40%; right: -10%; animation-delay: 0.25s; }

        .sparkles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: var(--anti-color-2);
          border-radius: 50%;
          opacity: 0;
        }

        .anime-card:hover .sparkles .sparkle {
          animation: sparkle-dance 1s ease-in-out infinite;
        }

        @keyframes sparkle-dance {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }

        .sparkle1 { top: 15%; left: 20%; animation-delay: 0s; }
        .sparkle2 { top: 35%; left: 80%; animation-delay: 0.2s; }
        .sparkle3 { top: 65%; left: 15%; animation-delay: 0.4s; }
        .sparkle4 { top: 80%; left: 70%; animation-delay: 0.6s; }
        .sparkle5 { top: 25%; left: 60%; animation-delay: 0.3s; }
        .sparkle6 { top: 70%; left: 40%; animation-delay: 0.5s; }

        .anime-card::before {
          content: '';
          position: absolute;
          top: -5px;
          left: -5px;
          right: -5px;
          bottom: -5px;
          border-radius: 30px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .anime-card:hover::before {
          opacity: 0.7;
          animation: rotate-trail 2s linear infinite;
        }

        .emoji-explosion {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 3rem;
          opacity: 0;
          pointer-events: none;
        }

        .anime-card:hover .emoji-explosion {
          animation: emoji-burst 0.6s ease-out forwards;
        }

        @keyframes emoji-burst {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.5);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(2);
          }
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
          background: linear-gradient(45deg, #f4f3f1, #efa2bf);
          color: #65002e;
          border: none;
          border-radius: 10px;
          font-size: 1.3rem;
          text-decoration: none;
          margin-top: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(65, 0, 20, 0.4);
        }

        .btn:hover {
          background: linear-gradient(45deg, #efa2c2, #e20066);
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(62, 0, 21, 0.5);
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

        .footer {
          background: #eee8e0;
          font-family: 'BourbonGrotesque', sans-serif;
          color: #b50c5e !important;
          padding: 3rem 2rem;
          text-align: left;
          margin-top: 5rem;
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
        }

        .footer::before {
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
          font-family: 'Akira Expanded Demo', sans-serif;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #65002e;
          font-weight: normal;
        }

        .footer-links a,
        .resources a {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: #b50c5e;
          font-weight: 700;
          text-decoration: none;
          display: block;
          margin: 0.5rem 0;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .footer-links a:hover,
        .resources a:hover {
          color: rgb(255, 0, 183);
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
          font-size: 1.1rem;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: #b50c5e;
          font-weight: 700;
          opacity: 0.9;
        }

        .designed-by {
          width: 100%;
          text-align: center;
          font-size: 0.9rem;
          margin-top: 0.5rem;
          font-family: 'Bropella', sans-serif;
          color: #2e0019;
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
  height: 240px;
  background-size: cover;
  background-position: center;
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
          .navbar {
            gap: 1rem;
          }
          .nav-link {
            font-size: 1.5rem;
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
          .navbar {
            gap: 0.8rem;
          }
          .nav-link {
            font-size: 1.2rem;
          }
          .header-logo {
            max-width: 80px;
          }
        }
      `}</style>

      <div className="animated-bg"></div>
      
      <header className="header">
        <img src={logo} alt="ComicVerse 2025 Logo" className="header-logo" />
        
      </header>

      <section className="hero"></section>

      <section className="section events">
        <h2 className="section-title">Events</h2>
        <div className="event-container">
          <div className="anime-card anime-card-1">
            <div className="card-inner">
              <h3 className="anime-card-title"></h3>
              <div className="speech-bubble">
                               <p className="speech-text">
                  Battlegrounds Mobile India is a popular battle royale game where players fight to be the last one standing on a shrinking battlefield.
                </p>
              </div>
            </div>
          </div>

          <div className="anime-card anime-card-2">
            <div className="card-inner">
              <h3 className="anime-card-title"></h3>
              <div className="speech-bubble">
                              <p className="speech-text">
                  Valorant is a tactical first-person shooter where players engage in team-based combat with unique agents and abilities.
                </p>
              </div>
            </div>
          </div>

          <div className="anime-card anime-card-3">
            <div className="card-inner">
              <h3 className="anime-card-title"></h3>
              <div className="speech-bubble">
                              <p className="speech-text">
                  eFootball is a football simulation game offering realistic gameplay and a variety of teams and leagues to compete in.
                </p>
              </div>
            </div>
          </div>

          <div className="anime-card anime-card-4">
            <div className="card-inner">
              <h3 className="anime-card-title"></h3>
              <div className="speech-bubble">
                
               <p className="speech-text">

                  Call of Duty: Mobile brings the classic Call of Duty experience to mobile devices with various modes and iconic maps.
                </p>
              </div>
            </div>
          </div>

          <div className="anime-card anime-card-5">
            <div className="card-inner">
              <h3 className="anime-card-title"></h3>
              <div className="speech-bubble">
               <p className="speech-text">
                  Tekken is a renowned fighting game series known for its deep combat mechanics and diverse roster of characters.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="registration">
          <a href="#" className="btn" onClick={()=> alert("Registrations opening Soon")}>Register Now!</a>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>COMICVERSE</h3>
            <p className="copyright">The ultimate celebration of comics, art, and pop culture on campus!</p>
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
          
          <p className="designed-by">Designed with ❤️ by the ComicVerse Team</p>
        </div>
      </footer>
    </div>
  );
};

export default RcadeComponent;