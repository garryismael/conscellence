import "./App.css";
import AboutUs from "./sections/AboutUs";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Questions from "./sections/Questions";
import Services from "./sections/Services";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Questions />
      <Services />
      <AboutUs />
      <Testimonials />
    </>
  );
}

export default App;
