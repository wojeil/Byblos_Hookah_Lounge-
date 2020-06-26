import React from "react";
import "./Carousel.css";
// import Card from "../Card/Card";


function Carousel() {

    return (

        <div id="event-carousel" className="carousel slide" data-ride="false">
            <div className="carouselitem-inner">

                <div className="carousel-item active">
                    <img className="event-image" src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/shutterstock_199419065.jpg" alt="party pic" />
                    <p id="test">first</p>
                </div>

                <div className="carousel-item">
                    <h2 className="testimonial-text">ttttttttttttttttttttttttttt</h2>
                    <img className="testimonial-image" src="images/lady-img.jpg" alt="lady-profile" />
                    <em></em>
                </div>
                <a className="carousel-control-prev" href="#event-carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#event-carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>

    );
}

export default Carousel;