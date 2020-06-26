import React from "react";
import "./Card.css";
import fruitBowls from "../util/fruitBowls";

function Card (){

    return(
       
        <div className="card menu-card">
            <div className="card-header card-title"><h2> Hookah Menue</h2></div>
            <div className="card-body">
                <h4>Fruit Bowls</h4>
                <hr/>
                <ul className="pinapple-fb"></ul>
                <ul className="orange-fb"></ul>

             
            </div>
        </div>
    )
}

export default Card;