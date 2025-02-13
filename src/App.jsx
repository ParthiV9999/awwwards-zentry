import Navbar from "./components/Navbar";
import About from "./pages/About";
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
    </main>
  );
}

export default App;
