import React from "react";
import "./Carousel.css";



function Carousel() {

    return (

        <div id="event-carousel" className="carousel slide" data-ride="carousel" data-interval="4000" data-pause="hover">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="image-container">
                        <img className="event-image" src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/shutterstock_199419065.jpg" alt="party pic" />
                        <div className="content">
                            <h1>Heading</h1>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>

                </div>
                <div className="carousel-item">
                    <div className="image-container">
                        <img className="event-image" src="https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/8/shutterstock_199419065.jpg" alt="party pic" />
                        <div className="content">
                            <h1>Heading</h1>
                            <p>Lorem ipsum..</p>
                        </div>
                    </div>
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