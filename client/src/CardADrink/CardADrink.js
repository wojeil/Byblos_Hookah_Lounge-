import React, { Component } from "react";
import "./CardADrink.css";
import cocktailsOne from "../util/cocktailsOne.json";
import cocktailsTwo from "../util/cocktailsTwo.json";
import cocktailsThree from "../util/cocktailsThree.json";
import shotsOne from "../util/shotsOne.json";
import shotsTwo from "../util/shotsTwo.json";
import beersOne from "../util/beersOne.json";
import beersTwo from "../util/beersTwo.json";
import beersThree from "../util/beersThree.json";
import winesOne from "../util/winesOne.json";
import winesTwo from "../util/winesTwo.json";
import winePic from "../images/wine.jpg";
import cocktailMenu from "../images/Cocktails-menu.pdf";
import cocktailImage from "../images/cocktail-image.JPG";

import Li from "../Li/Li";


class CardADrink extends Component {
    state = {
        cocktailsOne,
        cocktailsTwo,
        cocktailsThree,
        shotsOne,
        shotsTwo,
        beersOne,
        beersTwo,
        beersThree,
        winesOne,
        winesTwo

    }
    render() {
        return (

            <div className="card menu-card">
                <div className="card-header card-title"><h2><strong>Alcoholic Drinks</strong></h2></div>
                <div className="card-body">
                <a href={cocktailMenu} target="_blank" rel="noopener noreferrer"> <img className="menu-image" src={cocktailImage} alt="menu"/> </a>
                    <h4 className="menu-h4"><strong>Cocktails</strong></h4>
                    <hr />
                    <div className="row">
                        <div className="col-sm-4"><ul className="pinapple-fb">
                            {this.state.cocktailsOne.map(cocktailsOnes =>
                                <Li key={cocktailsOnes.id} name={cocktailsOnes.name} price={cocktailsOnes.price} />
                            )}
                        </ul></div>
                        <div className="col-sm-4"> <ul className="orange-fb">
                            {this.state.cocktailsTwo.map(cocktailsTwos =>
                                <Li key={cocktailsTwos.id} name={cocktailsTwos.name} price={cocktailsTwos.price} />
                            )}
                        </ul></div>
                        <div className="col-sm-4"> <ul className="orange-fb">
                            {this.state.cocktailsThree.map(cocktailsThrees =>
                                <Li key={cocktailsThrees.id} name={cocktailsThrees.name} price={cocktailsThrees.price} />
                            )}
                        </ul></div>
                    </div>
                    <br />
                    <hr/>
                    <h4 className="menu-h4"><strong>Shots</strong></h4>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                            <img className="alchdrinks" src="https://fastly.4sqi.net/img/general/width960/545281212_9qrYNy7UJE9p215bGHoMjn8RmKBw6XVfOv0krRFRK8c.jpg" alt="alchohol" />
                        </div>
                        <div className="col-sm-3"><ul className="pinapple-fb">
                            {this.state.shotsOne.map(shotsOnes =>
                                <Li key={shotsOnes.id} name={shotsOnes.name} price={shotsOnes.price} />
                            )}
                        </ul>
                        </div>
                        <div className="col-sm-3">
                            <img className="partypic-alch" src="https://fastly.4sqi.net/img/general/width960/545281212_F335cI2TUns0ihWCIs0-Yy_nOLMn3ylC2_fWEyvKRyI.jpg" alt="beverage" />
                        </div>
                        <div className="col-sm-3"> <ul className="orange-fb">
                            {this.state.shotsTwo.map(shotsTwos =>
                                <Li key={shotsTwos.id} name={shotsTwos.name} price={shotsTwos.price} />
                            )}
                        </ul>
                        </div>


                    </div>
                    <br />
                    <hr/>
                    <h4 className="menu-h4"><strong>Beer</strong></h4>
                    <hr />
                    <div className="row">
                        <div className="col-sm-4"><ul className="pinapple-fb">
                            {this.state.beersOne.map(beersOnes =>
                                <Li key={beersOnes.id} name={beersOnes.name} price={beersOnes.price} />
                            )}
                        </ul>
                        </div>
                        <div className="col-sm-4"> <ul className="orange-fb">
                            {this.state.beersTwo.map(beersTwos =>
                                <Li key={beersTwos.id} name={beersTwos.name} price={beersTwos.price} />
                            )}
                        </ul>
                        </div>
                        <div className="col-sm-4"> <ul className="orange-fb">
                            {this.state.beersThree.map(beersThrees =>
                                <Li key={beersThrees.id} name={beersThrees.name} price={beersThrees.price} />
                            )}
                        </ul>
                        </div>
                    </div>
                    <br />
                    <hr/>
                    <h4 className="menu-h4"><strong>Wine</strong></h4>
                    <hr />
                    <div className="row">
                        <div className="col-sm-6"><h5>Glass $5.99</h5></div>
                        <div className="col-sm-6"><h5> Bottle $24.99</h5></div>
                    </div>
                    <hr />
                    <div className="row">

                        <div className="col-sm-3"><ul className="pinapple-fb">
                            {this.state.winesOne.map(winesOnes =>
                                <Li key={winesOnes.id} name={winesOnes.name} price={winesOnes.price} />
                            )}
                        </ul>
                        </div>
                        <div className="col-sm-3">
                            <img className="alchdrinks" src={winePic} alt="wine" />
                        </div>
                        <div className="col-sm-3">
                            <img className="alchdrinks" src="https://fastly.4sqi.net/img/general/width960/545281212_iN0jYY7_OT_14I-5xH2PzZrqb7lc9xnPVvWFOLFjI_8.jpg" alt="alchohol" />
                        </div>
                        <div className="col-sm-3"> <ul className="fumariTwo">
                            {this.state.winesTwo.map(winesTwos =>
                                <Li key={winesTwos.id} name={winesTwos.name} price={winesTwos.price} />
                            )}
                        </ul>
                        </div>
                    </div>
                    <br />
                    <h4 className="extra"><strong>Chill?.. Good Times?.. Party?..  Byblos Hookah Lounge!!!</strong> </h4>



                </div>
            </div>
        )
    }

}

export default CardADrink;