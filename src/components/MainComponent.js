import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from "./Menu.component";
import Dishdetail from "./Dishdetail.component";
import { DISHES } from "../shared/dishes";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Home from "./homeComponent";

class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      // selectedDish: null
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }

  render() {
    const Homepage = () => {
      return <Home />
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={ Homepage } />
          <Route exact path='/menu' component={() => < Menu dishes={this.state.dishes} />} />
          <Redirect to='/home' />
        </Switch>
        {/* <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
        {/* <Dishdetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} /> */}
        <Footer />
      </div>
    );
  }
}

export default MainComponent;
