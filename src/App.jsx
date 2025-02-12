import Navbar from "./components/Navbar";
import About from "./pages/About";
import Features from "./pages/Features";
import Hero from "./pages/Hero";

function App() {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
}

export default App;
