import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

// Edit this to personalize the site — it's the only place your name is set.
const NAME = "Vandin TY";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-ink font-sans">
      <Navbar name={NAME} />
      <main>
        <Hero name={NAME} />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer name={NAME} />
    </div>
  );
}
