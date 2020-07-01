import React, { Component } from "react";
import "./CardNoneDrink.css";
import hotTeas from "../util/hotTeas.json";
import coffees from "../util/coffees.json";
import beverages from "../util/beverages.json";
import coffeeMenu from "../images/Coffee-menu.pdf";
import coffeeImage from "../images/coffee-image.JPG";

import Li from "../Li/Li";


class CardNoneDrink extends Component {
    state = {
        hotTeas,
        coffees,
        beverages
    }
    render() {
        return (

            <div className="card menu-card">
                <div className="card-header card-title"><h2><strong> Non-Alcoholic Drinks</strong></h2></div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12">
                        <a href={coffeeMenu} target="_blank" rel="noopener noreferrer"> <img className="menu-image" src={coffeeImage} alt="menu"/> </a>
                        </div>
                    </div>
                    <div className="row">
                    
                        <div className="col-sm-4 drink-title"><h4><strong>Hot Tea</strong></h4></div>
                        <div className="col-sm-4 drink-title"><h4><strong>Coffee</strong></h4></div>
                        <div className="col-sm-4 drink-title"><h4><strong>Beverages</strong></h4></div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-4 drink-title">
                            <ul className="tea">
                                {this.state.hotTeas.map(hotTea =>
                                    <Li key={hotTea.id} name={hotTea.name} price={hotTea.price} />
                                )}
                            </ul></div>
                        <div className="col-sm-4 drink-title">
                            <ul className="tea">
                                {this.state.coffees.map(coffee =>
                                    <Li key={coffee.id} name={coffee.name} price={coffee.price} />
                                )}
                            </ul></div>
                        <div className="col-sm-4 drink-title"> <ul className="tea">
                            {this.state.beverages.map(beverage =>
                                <Li key={beverage.id} name={beverage.name} price={beverage.price} />
                            )}
                        </ul></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <img className="nonalch-bev" src="https://fastly.4sqi.net/img/general/width960/545281212_0qJIDwXUIubdbiRr9JDkBkrB4ASVcJ3ADmXjAgcyK8o.jpg" alt="UCF Discount" />
                        </div>
                        <div className="col-sm-4">
                            <img className="nonalch-bev" src="https://fastly.4sqi.net/img/general/width960/545281212_obEFiLCUqnr6DJGTI3oDcXr0E2mw_d25pQUqeB_MymQ.jpg" alt="turkish coffee" />
                        </div>
                        <div className="col-sm-4">
                            <img className="nonalch-bev" src="https://fastly.4sqi.net/img/general/width960/62587005_uDI7hnr8zVmFutZ5CX3cFBK_bfalrocn7pDcdO7eqkk.jpg" alt="chilling" />
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default CardNoneDrink;