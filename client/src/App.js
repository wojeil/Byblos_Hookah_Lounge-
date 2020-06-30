import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Jumbotron from "./Jumbotron/Jumbotron";
import Carousel from "./Carousel/Carousel";
import CarouselMenu from "./CarouselMenu/CarouselMenu";
import ContactCard from "./ContactCard/ContactCard";
import Footer from "./Footer/Footer";



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
        <div className="row">
          <div className="col-sm-12">
            <h4 className="event-page-title"><em>Featured Events</em></h4>
          </div>
          </div>
          <div className="row">
          <div className="col-sm-12">
          <Carousel/>
          </div>
          </div>
          
        
        
      </section>
      <hr className="hr"/>
      {/* menue section */}
      <section id="menu">
       
        <div className="row">
          <div className="col-sm-12">
          <CarouselMenu/>
           </div>
          
         
         </div>
    
      </section>
      <hr className="hr"/>
      {/* contact section */}
      <section id="contact">
        <div className="row">
          <div className="col-sm-6">
            <div className="wrapper">
            <ContactCard/>
            </div>
            
          </div>
          <div className="col-sm-2">
         
          </div>
          <div id="smoke-pic"className="col-sm-4"> <iframe  className="iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.15722450949!2d-81.20954528491761!3d28.62504958242065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7690ff1fde2a1%3A0x10305d8eddf8afdc!2sByblos%20Hookah%20Lounge!5e0!3m2!1sen!2sus!4v1593407190972!5m2!1sen!2sus"  aria-hidden="false"/></div>
        </div>
        <Footer/>
      </section>

  
    
    </div>
  );
}


export default App;
