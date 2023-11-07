import React from "react";
import Navbar from "./components/nav/Navbar";
import Main from "./components/main/Main";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div>
      <Navbar />
      <Main />
      </div>
    </div>
  );
}

export default App;