import React from "react";
import "./Carousel.css";
import omar from "../images/omar.jpg";
import coffeeEvent from "../images/coffee-event.jpeg";
import specials from "../images/specials.jpg";
import soccerEvent from "../images/soccer-event.png";



function Carousel() {

    return (

        <div id="event-carousel" className="carousel slide" data-ride="carousel" data-interval="2500" data-pause="hover">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner" data-pause="hover">
                <div className="carousel-item active">
                    <div className="image-container">
                        <img className="event-image" src={coffeeEvent} alt="party pic" />
                        <div className="content">
                            <h2>Early Study Sesh</h2>
                            <p>Come early and experience a quiet study environment with your peers.</p>
                        </div>
                    </div>

                </div>
                <div className="carousel-item">
                    <div className="image-container">
                        <img className="event-image" src={soccerEvent} alt="party pic" />
                        <div className="content">
                            <h2>Do you watch Sports?</h2>
                            <p>Come through! We have access to multiple channels and more!</p>
                        </div>
                    </div>

                
                </div>
                <div className="carousel-item">
                    <div className="image-container">
                        <img className="event-image" src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/shutterstock_199419065.jpg" alt="party pic" />
                        <div className="content">
                            <h2>Weekends</h2>
                            <p>First come First Serve.</p>
                        </div>
                    </div>

                
                </div>
                <div className="carousel-item">
                    <div className="image-container">
                        <img className="event-image" src= {specials} alt="specials" />
                        <div className="content">
                            <h2>Check out our daily SPECIALS!</h2>
                           
                        </div>
                    </div>

                
                </div>
            </div>
        </div>

    );
}

export default Carousel;