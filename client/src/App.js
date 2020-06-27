import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Carousel from "./Carousel/Carousel";
import CarouselMenu from "./CarouselMenu/CarouselMenu";



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
        <Carousel/>
      </section>

      {/* menue section */}
      <section id="menu">
       
        <div className="row">
          <div className="col-sm-12">
          <CarouselMenu/>
           </div>
         
         </div>
    
      </section>

      {/* contact section */}
      <section id="contact">

      </section>
    
    </div>
  );
}


export default App;
