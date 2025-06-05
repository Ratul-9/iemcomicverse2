import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for subscribing!",
      description: "You're now on our mailing list.",
    });
    setEmail("");
  };

  const styles = {
    footer: {
      backgroundColor: "#1C0036",
      color: "white",
      padding: "2.5rem 0",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 1rem",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "12rem",
    },
    sectionTitle: {
      fontFamily: "Akira Expanded Demo",
      fontSize: "1.5rem",
      color: "#FFEB3B",
      marginBottom: "1rem",
    },
    sectionTitleMain: {
      fontFamily: "Akira Expanded Demo",
      fontSize: "1.5rem",
      color: "#FFEB3B",
      marginBottom: "1rem",
    },
    text: {
      fontFamily: "Segoe UI",
      marginBottom: "1rem",
    },
    link: {
      fontFamily: "Segoe UI",
      color: "white",
      textDecoration: "none",
      display: "block",
      marginBottom: "0.5rem",
      transition: "color 0.2s ease",
      cursor: "pointer",
    },
    linkHover: {
      color: "#FFEB3B",
    },
    bottomText: {
      fontFamily: "Comic Neue",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderTop: "1px solidrgb(237, 10, 199)",
      paddingTop: "1.5rem",
      marginTop: "2.5rem",
      fontSize: "0.875rem",
    },
    heartIcon: {
      color: "#FF3B3F",
      margin: "0 0.25rem",
      width: "1rem",
      height: "1rem",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.grid}>
          <div>
            <h4 style={styles.sectionTitleMain}>COMICVERSE</h4>
            <p style={styles.text}>The ultimate celebration of comics, art, and pop culture on campus!</p>
            <p style={{ ...styles.text, fontSize: "0.875rem" }}>© 2025 IEM ComicVerse. All rights reserved.</p>
          </div>

          <div>
            <h4 style={styles.sectionTitle}>QUICK LINKS</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["Home", "Events", "Collaborators", "Guests", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} style={styles.link}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={styles.sectionTitle}>RESOURCES</h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><span onClick={() => alert("Coming Soon")} style={styles.link}>FAQ</span></li>
              <li><span onClick={() => alert("Coming Soon")} style={styles.link}>Event Rules</span></li>
              <li><a href="https://drive.google.com/file/d/1WCoWT4W_zpAIaO_3xuY1BDlSqw-Ev0iB/view?usp=drive_link" style={styles.link}>Event Brochure</a></li>
              <li><span onClick={() => alert("Coming Soon")} style={styles.link}>Full Schedule</span></li>
              <li><span onClick={() => alert("Coming Soon")} style={styles.link}>Press Kit</span></li>
            </ul>
          </div>
        </div>

        <div style={styles.bottomText}>
          Designed with <Heart style={styles.heartIcon} /> by the ComicVerse Team
        </div>
      </div>
    </footer>
  );
};

export default Footer;
