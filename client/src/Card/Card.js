import React, { Component } from "react";
import "./Card.css";
import fruitBowls from "../util/fruitBowls.json";
import orangeFruitBowls from "../util/orangeFruitBowls.json";
import Li from "../Li/Li";


class CardHookah extends Component {
    state = {
        fruitBowls,
        orangeFruitBowls
    }
    render() {
        return (

            <div className="card menu-card">
                <div className="card-header card-title"><h2><strong> Hookah Menu</strong></h2></div>
                <div className="card-body">
                    <h4>Fruit Bowls</h4>
                    <hr />
                    <div className="row">
                        <div className="col-sm-6"><ul className="pinapple-fb">
                            {this.state.fruitBowls.map(fruitBowl =>
                                <Li key={fruitBowl.id} name={fruitBowl.name} price={fruitBowl.price} />
                            )}
                        </ul></div>
                        <div className="col-sm-6"> <ul className="orange-fb">
                            {this.state.orangeFruitBowls.map(orangeFruitBowl =>
                                <Li key={orangeFruitBowl.id} name={orangeFruitBowl.name} price={orangeFruitBowl.price} />
                            )}
                        </ul></div>
                    </div>
                    <br />
                    <h4><strong>Al Fakher</strong> $14.99 <strong>Refill</strong> $6</h4>
                    <hr />
                    <div className="row">
                        <div className="col-sm-6"><ul className="pinapple-fb">
                            {this.state.fruitBowls.map(fruitBowl =>
                                <Li key={fruitBowl.id} name={fruitBowl.name} price={fruitBowl.price} />
                            )}
                        </ul></div>
                        <div className="col-sm-6"> <ul className="orange-fb">
                            {this.state.orangeFruitBowls.map(orangeFruitBowl =>
                                <Li key={orangeFruitBowl.id} name={orangeFruitBowl.name} price={orangeFruitBowl.price} />
                            )}
                        </ul></div>
                    </div>




                </div>
            </div>
        )
    }

}

export default CardHookah;