import Navbar from "./components/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";

function App() {
  return (
    <main className="relative w-screen min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <section className="h-screen bg-blue-200 w-full"></section>
    </main>
  );
}

export default App;
