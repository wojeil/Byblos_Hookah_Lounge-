import React from "react";
import CardHookah from "../CardHookah/CardHookah";
import CardNoneDrink from "../CardNoneDrink/CardNoneDrink";
import CardADrink from "../CardADrink/CardADrink";


function CarouselMenu (){

    return(
        <div id="menu-carousel" className="carousel slide" data-ride="carousel" data-interval="20000">
        <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
         
        </ol>
        <div className="carousel-inner">
            <div className="carousel-item active">
              <CardHookah/>

            </div>
            <div className="carousel-item">
            <CardNoneDrink/>
            </div>
            <div className="carousel-item">
            <CardADrink/>
            </div>
            <a className="carousel-control-prev" href="#menu-carousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#menu-carousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>


        </div>
    </div>

    )
}

export default  CarouselMenu;