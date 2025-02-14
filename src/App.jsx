import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Features from "./pages/Features";
import Hero from "./pages/Hero";
import Story from "./pages/Story";

function App() {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
    </main>
  );
}

export default App;
