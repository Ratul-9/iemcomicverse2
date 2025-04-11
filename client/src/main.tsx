import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import additional fonts
import "@fontsource/bangers";
import "@fontsource/comic-neue";
import "@fontsource/poppins";

createRoot(document.getElementById("root")!).render(<App />);
