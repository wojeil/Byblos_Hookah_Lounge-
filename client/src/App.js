import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import SectionEvents from "./SectionEvents/SectionEvents";

function App() {
  return (
    <div className="App">
      {/* about section */}
      <section id="about">
      <Navbar/>
      <Jumbotron/>
      </section>

      {/* events section */}
      <section id="events">
        <SectionEvents/>
      </section>

      {/* menue section */}
      <section id="menue">

      </section>

      {/* contact section */}
      <section id="contact">

      </section>
    
    </div>
  );
}


export default App;
