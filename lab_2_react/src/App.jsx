import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <hr />
      <main>
        <About />
        <Skills />
        <Experience />
      </main>
      <hr />
      <Footer />
    </div>
  );
}

export default App;