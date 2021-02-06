import { Fragment } from "react";
import Header from "./sections/Header/Header";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Experence from "./sections/Experience/Experience";
import Projects from "./sections/Projects/Projects";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <Fragment>
      <Header/>
      <Hero/>
      <About/>
      <Experence/>
      <Projects/>
      <Contact/>
      <Footer/>
    </Fragment>
  );
}

export default App;
