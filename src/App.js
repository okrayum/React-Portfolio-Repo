import React from "react";
import Navbar from "./components/nav/Navbar";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;