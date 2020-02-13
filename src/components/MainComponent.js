import React, { Component } from "react";
import Menu from "./Menu.component";
import Dishdetail from "./Dishdetail.component";
import { DISHES } from "../shared/dishes";
import Header from "./headerComponent";
import Footer from "./footerComponent";

class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <Dishdetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default MainComponent;
