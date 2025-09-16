import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import Stack from "./components/Stack";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-[#f5f4f3] ">
      <Header />
      <section id="about">
        <Landing />
      </section>
      <section id="projects">
        <About />
      </section>
      <Stack />
      <section id="contact">
        <Footer />
      </section>
    </div>
  );
}

export default App;
