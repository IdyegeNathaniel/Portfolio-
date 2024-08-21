import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProjectListings from "./Components/ProjectListings";
import SkillsList from "./Components/SkillsList";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <SkillsList />
      <ProjectListings />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
