import React from "react";
import "./Carousel.css";
import omar from "../images/omar.jpg";



function Carousel() {

    return (

        <div id="event-carousel" className="carousel slide" data-ride="carousel" data-interval="3000" data-pause="hover">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="image-container">
                        <img className="event-image" src={omar} alt="party pic" />
                        <div className="content">
                            <h1>Early Study Sesh</h1>
                            <p>Come early and experience a quiet study environment with your peers</p>
                        </div>
                    </div>

                </div>
                <div className="carousel-item">
                    <div className="image-container">
                        <img className="event-image" src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/shutterstock_199419065.jpg" alt="party pic" />
                        <div className="content">
                            <h1>Do you watch Soccer?</h1>
                            <p>We have access and keep you posted with the Champion's League and more!</p>
                        </div>
                    </div>

                
                </div>
                <div className="carousel-item">
                    <div className="image-container">
                        <img className="event-image" src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/shutterstock_199419065.jpg" alt="party pic" />
                        <div className="content">
                            <h1>Weekends</h1>
                            <p>First come First Serve</p>
                        </div>
                    </div>

                
                </div>
            </div>
        </div>

    );
}

export default Carousel;