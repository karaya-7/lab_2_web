import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <Header />
      <main className="max-w-4xl mx-auto px-4">
        <About />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}
export default App;