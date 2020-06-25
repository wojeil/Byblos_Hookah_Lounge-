import React from "react";
import "./SectionEvents.css";
import Card from "../Card/Card";


function SectionEvents() {

    return (

        <div className="container">
            <div id="event-carousel" className="carousel slide" data-ride="false">
                <div className="carouselitem-inner">
                    <div className="carousel-item">
                        <Card/>   
                    </div>
                    <a className="carousel-control-prev" href="#testimonial-carousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#testimonial-carousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                </div>
            </div>
        </div>

    );
}

export default SectionEvents;