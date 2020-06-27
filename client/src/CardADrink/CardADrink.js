import React, { Component } from "react";
import "./CardADrink.css";

import Li from "../Li/Li";


class CardHookah extends Component {
    state = {
        fruitBowls,
        orangeFruitBowls,
        alFakherOne,
        alFakherTwo,
        alFakherThree,
        starBuzzOne,
        starBuzzTwo,
        starBuzzThree,
        fumariOne,
        fumariTwo,
        fumariThree,
        extraOne,
        extraTwo,
        extraThree
    }
    render() {
        return (

            <div className="card menu-card">
                <div className="card-header card-title"><h2><strong> Hookah Menu</strong></h2></div>
                <div className="card-body">
                    <h4><strong>Fruit Bowls</strong></h4>
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
                        <div className="col-sm-4"><ul className="pinapple-fb">
                            {this.state.alFakherOne.map(alFakherOnes =>
                                <Li key={alFakherOnes.id} name={alFakherOnes.name} price={alFakherOnes.price} />
                            )}
                        </ul>
                        </div>
                        <div className="col-sm-4"> <ul className="orange-fb">
                            {this.state.alFakherTwo.map(alFakherTwos =>
                                <Li key={alFakherTwos.id} name={alFakherTwos.name} price={alFakherTwos.price} />
                            )}
                        </ul>
                        </div>
                        <div className="col-sm-4"> <ul className="orange-fb">
                            {this.state.alFakherThree.map(alFakherThrees =>
                                <Li key={alFakherThrees.id} name={alFakherThrees.name} price={alFakherThrees.price} />
                            )}
                        </ul>
                        </div>
                    </div>
                    <br />
                    <h4><strong>Starbuzz</strong> $16.99 <strong>Refill</strong> $7</h4>
                    <hr />
                    <div className="row">
                        <div className="col-sm-4"><ul className="pinapple-fb">
                            {this.state.starBuzzOne.map(starBuzzOnes =>
                                <Li key={starBuzzOnes.id} name={starBuzzOnes.name} price={starBuzzOnes.price} />
                            )}
                        </ul>
                        </div>
                        <div className="col-sm-4"> <ul className="orange-fb">
                            {this.state.starBuzzTwo.map(starBuzzTwos =>
                                <Li key={starBuzzTwos.id} name={starBuzzTwos.name} price={starBuzzTwos.price} />
                            )}
                        </ul>
                        </div>
                        <div className="col-sm-4"> <ul className="orange-fb">
                            {this.state.starBuzzThree.map(starBuzzThrees =>
                                <Li key={starBuzzThrees.id} name={starBuzzThrees.name} price={starBuzzThrees.price} />
                            )}
                        </ul>
                        </div>
                    </div>
                    <br />
                    <h4><strong>Fumari</strong> $18.99 <strong>Refill</strong> $9</h4>
                    <hr />
                    <div className="row">
                        <div className="col-sm-4"><ul className="pinapple-fb">
                            {this.state.fumariOne.map(fumariOnes =>
                                <Li key={fumariOnes.id} name={fumariOnes.name} price={fumariOnes.price} />
                            )}
                        </ul>
                        </div>
                        <div className="col-sm-4"> <ul className="fumariTwo">
                            {this.state.fumariTwo.map(fumariTwos =>
                                <Li key={fumariTwos.id} name={fumariTwos.name} price={fumariTwos.price} />
                            )}
                        </ul>
                        </div>
                        <div className="col-sm-4"> <ul className="fumariThree">
                            {this.state.fumariThree.map(fumariThrees =>
                                <Li key={fumariThrees.id} name={fumariThrees.name} price={fumariThrees.price} />
                            )}
                        </ul>
                        </div>
                    </div>
                    <br />
                    <h4 className="extra"><strong>Extras</strong> </h4>
                    <hr />
                    <div className="row">
                        <div className="col-sm-4"><ul className="extraOne">
                            {this.state.extraOne.map(extraOnes =>
                                <Li key={extraOnes.id} name={extraOnes.name} price={extraOnes.price} />
                            )}
                        </ul>
                        </div>
                        <div className="col-sm-4"> <ul className="extraTwo">
                            {this.state.extraTwo.map(extraTwos =>
                                <Li key={extraTwos.id} name={extraTwos.name} price={extraTwos.price} />
                            )}
                        </ul>
                        </div>
                        <div className="col-sm-4"> <ul className="extraThree">
                            {this.state.extraThree.map(extraThrees =>
                                <Li key={extraThrees.id} name={extraThrees.name} price={extraThrees.price} />
                            )}
                        </ul>
                        </div>
                    </div>



                </div>
            </div>
        )
    }

}

export default CardHookah;