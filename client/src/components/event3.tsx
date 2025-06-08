// import React from 'react';
// import talent from '../assets/talent.png';
// import iemtalent from '../assets/iemtalent.png';
// import m19 from '../assets/m19.png';
// import logo from '../assets/logo.png';
// import Akira_Expanded_Demo from '../assets/fonts/Akira Expanded Demo.otf';

// const ComicVerse: React.FC = () => {
//   const styles = `
//     :root {
//       --primary-color: #5a5ee3;
//       --accent-color-1: #9f17f3;
//       --accent-color-2: #f80898;
//       --teal-color: #0aeecf;
//       --orange-color: #e9640b;
//       --purple-color: #9207e9;
//       --light-text: #ffffff;
//       --dark-text: #333333;
//       --brown-bg: #8B4513;
//       --anti-color-1: #0AEECF;
//       --anti-color-2: #FFD700;
//       --anime-pink: #ff69b4;
//       --anime-blue: #00bfff;
//       --anime-yellow: #ffd700;
//       --anime-purple: #9966ff;
//       --anime-green: #00ff7f;
//       --neon-glow: 0 0 20px;
//     }

//     .bangers-regular {
//       font-family: "Bangers", system-ui;
//       font-weight: 400;
//       font-style: normal;
//     }

//     * {
//       margin: 0;
//       padding: 0;
//       box-sizing: border-box;
//       font-family: 'Comic Sans MS', 'Chalkboard SE', 'Arial', sans-serif;
//     }

//     body {
//       background-color: #013345;
//       color: var(--dark-text);
//       overflow-x: hidden;
//     }

//     header {
//       color: var(--light-text);
//       text-align: center;
//       box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
//       position: relative;
//       z-index: 10;
//     }

//     header::before {
//       content: '';
//       position: absolute;
//       top: -50%;
//       left: -50%;
//       background: radial-gradient(circle, transparent, rgba(255, 255, 255, 0.15) 10%, transparent 80%);
//       animation: sparkle 10s infinite linear;
//       z-index: -1;
//     }

//     .header-logo {
//       max-width: 100px;
//       height: auto;
//       display: block;
//       margin-left: 150px;
//     }

//     .hero {
//       position: relative;
//       height: 699px;
//       margin: 0 auto;
      
//       background: url(${talent}) no-repeat center center/cover;
//       background-size: cover;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       text-align: center;
//       color: var(--light-text);
//       overflow: hidden;
//     }

//     .comic-object {
//       position: absolute;
//       width: 50px;
//       height: 50px;
//       background-size: contain;
//       background-repeat: no-repeat;
//       animation: float-object 10s infinite linear;
//       opacity: 0.7;
//     }

//     .hero-content {
//       position: relative;
//       z-index: 2;
//       padding: 2rem;
//       max-width: 900px;
//     }

//     .event-title {
//       font-family: 'Bangers', sans-serif;
//       font-size: 12rem;
//       font-weight: bold;
//       text-transform: uppercase;
//       margin-bottom: 1rem;
//       text-shadow: 5px 5px 0px black;
//       letter-spacing: 12px;
//       animation: pulse 2s infinite, color-cycle 10s infinite;
//     }

//     @keyframes pulse {
//       0%, 100% { transform: scale(1); }
//       50% { transform: scale(1.05); }
//     }

//     @keyframes color-cycle {
//       0% { color: #ff69b4; }
//       20% { color: #00bfff; }
//       40% { color: #ffd700; }
//       60% { color: #9966ff; }
//       80% { color: #00ff7f; }
//       100% { color: #ff69b4; }
//     }

//     @keyframes sparkle {
//       0% { transform: rotate(0deg); }
//       100% { transform: rotate(360deg); }
//     }

//     @keyframes float-object {
//       0% { transform: translateY(0px) rotate(0deg); }
//       50% { transform: translateY(-20px) rotate(180deg); }
//       100% { transform: translateY(0px) rotate(360deg); }
//     }

//     .event-details {
//       font-size: 1.6rem;
//       margin-bottom: 1.5rem;
//       text-shadow: 2px 2px 4px rgba(228, 15, 15, 0.3);
//     }

//     .event-tagline {
//       font-size: 2rem;
//       font-style: italic;
//       margin-bottom: 2rem;
//       max-width: 700px;
//       margin-left: auto;
//       margin-right: auto;
//       text-shadow: 2px 2px 4px rgba(209, 6, 6, 0.2);
//     }

//     .section {
//       padding: 5rem 2rem;
//       max-width: 1200px;
//       margin: 0 auto;
//       position: relative;
//     }

//     .section-title {
//       font-size: 3.5rem;
//       font-family: 'Akira Expanded Demo', sans-serif;
//       color: white;
//       font-weight: normal;
//       text-align: center;
//       margin-bottom: 2.5rem;
//       position: relative;
//       transition: transform 0.2s ease;
//     }

//     .section-title::after {
//       content: '';
//       display: block;
//       width: 350px;
//       height: 5px;
//       background: linear-gradient(45deg, #1f4da5, #e8d6c2, #1f4da5);
//       margin: 0.7rem auto;
//       border-radius: 5px;
//     }

//     .section-title:hover {
//       transform: scale(1.4);
//     }

//     .event-container {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//       grid-template-rows: repeat(2, auto);
//       gap: 1rem;
//       max-width: 100%;
//       padding: 2rem;
//       justify-items: center;
//       width: 100%;
//       box-sizing: border-box;
//       margin-left: -14rem;
//     }

//     .anime-card {
//       width: 1500px;
//       height: 500px;
//       position: relative;
//       cursor: pointer;
//       transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//       transform-style: preserve-3d;
//     }

//     .anime-card:hover {
//       transform: scale(1.05);
//       filter: drop-shadow(0 20px 40px rgba(253, 251, 252, 0.4));
//     }

//     .card-inner {
//       width: 100%;
//       height: 100%;
//       position: relative;
//       background-blend-mode: overlay;
//       border-radius: 25px;
//       padding: 20px;
//       box-sizing: border-box;
//       border: 5px solid #fff;
//       overflow: hidden;
//     }

//     .anime-card-1 .card-inner {
      
//       background: url(${iemtalent}) no-repeat center center/cover;
//     }

//     .anime-card:hover .card-inner {
      
//       background: url(${m19}) no-repeat center center/cover;
//       box-shadow: 0 0 10px 3px white;
//       animation: glow-pulse 0.6s ease-in-out;
//     }

//     @keyframes glow-pulse {
//       0%, 100% { box-shadow: 0 0 10px 3px white; }
//       50% { box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.8); }
//     }

//     .anime-card-title {
//       font-family: 'Arial Black', sans-serif;
//       font-size: 2.5rem;
//       text-align: center;
//       margin-bottom: 5px;
//       position: relative;
//       z-index: 10;
//     }

//     .anime-card:hover .anime-card-title {
//       transform: scale(1.4);
//     }

//     .speech-bubble {
//       color: white;
//       border-radius: 20px;
//       padding: 20px;
//       margin: 20px 0;
//       position: absolute;
//       bottom: -100px;
//       width: calc(100% - 40px);
//       font-weight: 700;
//       opacity: 0;
//       transform: translateY(100%);
//       z-index: 10;
//     }

//     .anime-card:hover .speech-bubble {
//       animation: slide-up 1s ease-out forwards;
//     }

//     @keyframes slide-up {
//       0% {
//         transform: translateY(100%);
//         opacity: 0;
//       }
//       100% {
//         transform: translateY(-190px);
//         opacity: 1;
//       }
//     }

//     .event-date {
//       color: var(--purple-color);
//       font-weight: bold;
//       font-size: 1.2rem;
//     }

//     .event-location {
//       color: var(--teal-color);
//       font-weight: bold;
//     }

//     .burst-container {
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       height: 100%;
//       pointer-events: none;
//       overflow: visible;
//     }

//     .burst-star {
//       position: absolute;
//       font-size: 2rem;
//       opacity: 0;
//       pointer-events: none;
//       border: none;
//     }

//     .anime-card:hover .burst-container .burst-star {
//       transform: scale(1.4);
//     }

//     .anime-card:hover .sparkles .sparkle {
//       animation: sparkle-dance 1s ease-in-out infinite;
//     }

//     @keyframes sparkle-dance {
//       0%, 100% { opacity: 0; transform: scale(0); }
//       50% { opacity: 1; transform: scale(1); }
//     }

//     .sparkle1 { top: 15%; left: 20%; animation-delay: 0s; }
//     .sparkle2 { top: 35%; left: 80%; animation-delay: 0.2s; }
//     .sparkle3 { top: 65%; left: 15%; animation-delay: 0.4s; }
//     .sparkle4 { top: 80%; left: 70%; animation-delay: 0.6s; }
//     .sparkle5 { top: 25%; left: 60%; animation-delay: 0.3s; }
//     .sparkle6 { top: 70%; left: 40%; animation-delay: 0.5s; }

//     .anime-card::before {
//       content: '';
//       position: absolute;
//       top: -5px;
//       left: -5px;
//       right: -5px;
//       bottom: -5px;
//       border-radius: 30px;
//       z-index: -1;
//       opacity: 0;
//       transition: opacity 0.3s ease;
//     }

//     .anime-card:hover::before {
//       opacity: 0.7;
//       transform: scale(1.4);
//     }

//     .emoji-explosion {
//       position: absolute;
//       top: 50%;
//       left: 50%;
//       transform: translate(-50%, -50%);
//       font-size: 3rem;
//       opacity: 0;
//       pointer-events: none;
//     }

//     .anime-card:hover .emoji-explosion {
//       transform: scale(1.4);
//     }

//     @keyframes emoji-burst {
//       0% {
//         opacity: 1;
//         transform: translate(-50%, -50%) scale(0);
//       }
//       50% {
//         opacity: 1;
//         transform: translate(-50%, -50%) scale(1.5);
//       }
//       100% {
//         opacity: 0;
//         transform: translate(-50%, -50%) scale(2);
//       }
//     }

//     .registration {
//       text-align: center;
//       margin-top: 5rem;
//     }

//     .btn {
//       font-family: 'Akira Expanded Demo', sans-serif;
//       font-weight: normal;
//       display: inline-block;
//       padding: 1.5rem 3.5rem;
//       background: linear-gradient(45deg, #f4f3f1, #a2d6ef);
//       color: #0084ff;
//       border: none;
//       border-radius: 10px;
//       font-size: 1.3rem;
//       text-decoration: none;
//       margin-top: 1.5rem;
//       cursor: pointer;
//       transition: all 0.3s ease;
//       position: relative;
//       overflow: hidden;
//       box-shadow: 0 5px 15px rgba(255, 165, 0, 0.4);
//     }

//     .btn:hover {
//       background: linear-gradient(45deg, #a2d6ef, #0084ff);
//       transform: translateY(-5px);
//       box-shadow: 0 10px 20px rgba(0, 115, 255, 0.5);
//       color: white;
//     }

//     .btn::before {
//       content: '';
//       position: absolute;
//       top: 0;
//       left: -100%;
//       width: 100%;
//       height: 100%;
//       background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
//       transition: 0.5s;
//     }

//     .btn:hover::before {
//       left: 100%;
//     }

//     footer {
//       background: #eee8e0;
//       color: #0084ff;
//       padding: 3rem 2rem;
//       text-align: left;
//       margin-top: 5rem;
//       position: relative;
//       overflow: hidden;
//       display: flex;
//       justify-content: center;
//     }

//     footer::before {
//       content: '';
//       position: absolute;
//       top: -50%;
//       left: -50%;
//       width: 200%;
//       height: 200%;
//       background: radial-gradient(circle, transparent, rgba(255, 255, 255, 0.15) 10%, transparent 80%);
//       animation: sparkle 12s infinite linear;
//       z-index: -1;
//     }

//     .footer-content {
//       max-width: 1200px;
//       width: 100%;
//       display: flex;
//       flex-wrap: wrap;
//       justify-content: space-between;
//       gap: 14rem 12rem;
//     }

//     .footer-logo {
//       font-size: 2.5rem;
//       margin-bottom: 1.5rem;
//       text-shadow: 3px 3px 0px var(--accent-color-1);
//     }

//     .footer-column {
//       flex: 1;
//       min-width: 150px;
//       margin-bottom: 2rem;
//     }

//     .footer-column h3 {
//       font-family: "Akira Expanded Demo", system-ui;
//       font-size: 1.5rem;
//       margin-bottom: 1rem;
//       color: #0b378a;
//       font-weight: normal;
//     }

//     .footer-links a, .resources a {
//     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//       color: #0084ff;
//       text-decoration: none;
//       display: block;
//       margin: 0.5rem 0;
//       font-size: 1.1rem;
//       transition: all 0.3s ease;
//       font-weight: normal;
//     }

//     .footer-links a:hover, .resources a:hover {
//       color: var(--accent-color-1);
//       text-decoration: underline;
//     }

//     .newsletter input[type="email"] {
//       padding: 0.5rem;
//       width: 70%;
//       border: 1px solid #ccc;
//       border-radius: 5px;
//       margin-right: 0.5rem;
//       font-size: 1rem;
//     }

//     .copyright {
//     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//       width: 100%;
//       margin-top: 2rem;
//       font-size: 1rem;
//       opacity: 0.9;
//     }

//     .designed-by {
//       width: 100%;
//       text-align: center;
//       font-size: 0.9rem;
//       margin-top: 0.5rem;
//       color: #ccc;
//     }

//     @media (max-width: 1024px) {
//       .event-container {
//         grid-template-columns: repeat(2, 1fr);
//         grid-template-rows: repeat(3, auto);
//         gap: 1rem;
//         margin-left: -1rem;
//       }
//       .anime-card {
//         width: 350px;
//         height: 450px;
//       }
//     }

//     @media (max-width: 768px) {
//       .event-title {
//         font-size: 6rem;
//         letter-spacing: 8px;
//       }
//       .hero {
//         height: 500px;
//       }
//       .event-tagline {
//         font-size: 1.2rem;
//       }
//       .section {
//         padding: 3rem 1.5rem;
//       }
//       .event-container {
//         grid-template-columns: 1fr;
//         grid-template-rows: repeat(6, auto);
//         justify-items: center;
//         gap: 1rem;
//         margin-left: 0;
//       }
//       .anime-card {
//         width: 350px;
//         height: 450px;
//       }
//       .footer-content {
//         flex-direction: column;
//         align-items: center;
//         text-align: center;
//       }
//     }

//     @media (max-width: 480px) {
//       .event-title {
//         font-size: 4rem;
//         letter-spacing: 5px;
//       }
//       .event-details {
//         font-size: 1.3rem;
//       }
//       .event-tagline {
//         font-size: 1.3rem;
//       }
//       .section-title {
//         font-size: 2.2rem;
//       }
//       .anime-card {
//         width: 300px;
//         height: 400px;
//       }
//       .anime-card-title {
//         font-size: 2rem;
//       }
//       .footer-column {
//         min-width: 100%;
//       }
//     }
//   `;

//   return (
//     <>
//       <style>{styles}</style>
//       <link 
//         href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fredoka+One:wght@400&family=Comic+Neue:wght@400;700&display=swap" 
//         rel="stylesheet" 
//       />
//       <link 
//         href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" 
//         rel="stylesheet" 
//       />
      
//       <div style={{ backgroundColor: '#013345', color: '#333333', overflowX: 'hidden' }}>
//         <div className="animated-bg"></div>
        
//         <header>
//           <img src={logo} alt="ComicVerse 2025 Logo" className="header-logo" />
//         </header>
        
//         <section className="hero">
//         </section>
        
//         <section className="section events">
//           <h2 className="section-title">Information</h2>
//           <div className="event-container">
//             <div className="anime-card anime-card-1">
//               <div className="card-inner">
//                 <h3 className="anime-card-title"></h3>
//                 <div className="speech-bubble">
//                   <p style={{
//                     fontFamily: "Bropella, sans-serif",
//                     fontSize: '2rem',
//                     textAlign: 'center',
//                     marginLeft: '20px',
//                     letterSpacing: '0.01em'
//                   }}>
//                     Iem's got talent is an electrifying talent hunt event that showcases the diverse skills of participants, from mesmerizing dance routines to soulful musical performances. This annual celebration of creativity and innovation invites students to shine on stage, fostering a spirit of community and inspiring future stars to pursue their passions.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="registration">
//             <a href="#" className="btn" onClick={()=> alert("Registrations opening Soon")}>Register Now!</a>
//           </div>
//         </section>
        
//         <footer>
//           <div className="footer-content">
//             <div className="footer-column">
//               <h3>COMICVERSE</h3>
//               <p>The ultimate celebration of comics, art, and pop culture on campus!</p>
//               <p className="copyright">© 2025 IEM ComicVerse. All rights reserved.</p>
//             </div>
//             <div className="footer-column">
//               <h3>QUICK LINKS</h3>
//               <div className="footer-links">
//                 <a href="#">Home</a>
//                 <a href="#">Events</a>
//                 <a href="#">Collaborators</a>
//                 <a href="#">Guests</a>
//                 <a href="#">Team</a>
//                 <a href="#">Contact</a>
//               </div>
//             </div>
//             <div className="footer-column">
//               <h3>RESOURCES</h3>
//               <div className="resources">
//                 <a href="#">FAQ</a>
//                 <a href="#">Event Rules</a>
//                 <a href="#">Accessibility</a>
//                 <a href="#">Full Schedule</a>
//                 <a href="#">Press Kit</a>
//               </div>
//             </div>
            
//             <p className="designed-by">Designed with ❤️ by the ComicVerse Team</p>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };

// export default ComicVerse;

import React from 'react';
import talent from '../assets/talent.png';
import iemtalent from '../assets/iemtalent.png';
import m19 from '../assets/m19.png';
import logo from '../assets/logo.png';
import Akira_Expanded_Demo from '../assets/fonts/Akira Expanded Demo.otf';

const ComicVerse: React.FC = () => {
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
      background-color: #013345;
      color: var(--dark-text);
      overflow-x: hidden;
    }

    header {
      color: var(--light-text);
      text-align: center;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      position: relative;
      z-index: 10;
    }

    header::before {
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
  width: 100vw;
  height: 100vh;
  background-image: url(${talent});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
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
      20% { color: #00bfff; }
      40% { color: #ffd700; }
      60% { color: #9966ff; }
      80% { color: #00ff7f; }
      100% { color: #ff69b4; }
    }

    @keyframes sparkle {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    @keyframes float-object {
      0% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
      100% { transform: translateY(0px) rotate(360deg); }
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
      width: 350px;
      height: 5px;
      background: linear-gradient(45deg, #1f4da5, #e8d6c2, #1f4da5);
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
      width: 1500px;
      height: 500px;
      position: relative;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transform-style: preserve-3d;
    }

    .anime-card:hover {
      transform: scale(1.05);
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
      
      background: url(${iemtalent}) no-repeat center center/cover;
    }

    .anime-card:hover .card-inner {
      
      background: url(${m19}) no-repeat center center/cover;
      box-shadow: 0 0 10px 3px white;
      animation: glow-pulse 0.6s ease-in-out;
    }

    @keyframes glow-pulse {
      0%, 100% { box-shadow: 0 0 10px 3px white; }
      50% { box-shadow: 0 0 20px 8px rgba(255, 255, 255, 0.8); }
    }

    .anime-card-title {
      font-family: 'Arial Black', sans-serif;
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 5px;
      position: relative;
      z-index: 10;
    }

    .anime-card:hover .anime-card-title {
      transform: scale(1.4);
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
        transform: translateY(-190px);
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
      transform: scale(1.4);
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
      transform: scale(1.4);
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
      transform: scale(1.4);
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
      background: linear-gradient(45deg, #f4f3f1, #a2d6ef);
      color: #0084ff;
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
      background: linear-gradient(45deg, #a2d6ef, #0084ff);
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

    footer {
      background: #eee8e0;
      color: #0084ff;
      padding: 3rem 2rem;
      text-align: left;
      margin-top: 5rem;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
    }

    footer::before {
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
      gap: 14rem 12rem;
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
      color: #0b378a;
      font-weight: normal;
    }

    .footer-links a, .resources a {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      color: #0084ff;
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
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
    height: 280px;
    background-size: cover;
    background-position: center;
  }

  .hero-content {
    padding: 1rem;
  }

  .speech-bubble {
    bottom: -20px !important;
    transform: translateY(0%) !important;
    padding: 10px;
    font-size: 1rem;
    width: 90% !important;
  }

  .speech-bubble p {
    font-size: 0.9rem !important;
    margin-left: 0 !important;
    padding: 0.5rem !important;
    line-height: 1.4rem;
    text-align: center !important;
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
    <>
      <style>{styles}</style>
      <link 
        href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fredoka+One:wght@400&family=Comic+Neue:wght@400;700&display=swap" 
        rel="stylesheet" 
      />
      <link 
        href="https://fonts.googleapis.com/css2?family=Bangers&display=swap" 
        rel="stylesheet" 
      />
      
      <div style={{ backgroundColor: '#013345', color: '#333333', overflowX: 'hidden' }}>
        <div className="animated-bg"></div>
        
        <header>
          <img src={logo} alt="ComicVerse 2025 Logo" className="header-logo" />
        </header>
        
        <section className="hero">
        </section>
        
        <section className="section events">
          <h2 className="section-title">Information</h2>
          <div className="event-container">
            <div className="anime-card anime-card-1">
              <div className="card-inner">
                <h3 className="anime-card-title"></h3>
                <div className="speech-bubble">
                  <p style={{
                    fontFamily: "Bropella, sans-serif",
                    fontSize: '2rem',
                    textAlign: 'center',
                    marginLeft: '20px',
                    letterSpacing: '0.01em'
                  }}>
                    Iem's got talent is an electrifying talent hunt event that showcases the diverse skills of participants, from mesmerizing dance routines to soulful musical performances. This annual celebration of creativity and innovation invites students to shine on stage, fostering a spirit of community and inspiring future stars to pursue their passions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="registration">
            <a href="#" className="btn" onClick={()=> alert("Registrations opening Soon")}>Register Now!</a>
          </div>
        </section>
        
        <footer>
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
            
            <p className="designed-by">Designed with ❤️ by the ComicVerse Team</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ComicVerse;