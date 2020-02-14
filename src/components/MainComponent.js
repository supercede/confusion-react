import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import Menu from "./Menu.component";
import Dishdetail from "./Dishdetail.component";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Home from "./homeComponent";
import Contact from "./contactComponent";
import { DISHES } from "../shared/dishes";
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';


class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
      // selectedDish: null
    };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }

  render() {
    const Homepage = () => {
      return <Home dish={this.state.dishes.filter(dish => dish.featured)[0]}
      promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
      leader={this.state.leaders.filter(leader => leader.featured)[0]}
      />
    }

    const dishWithId = ({match}) => {
      return (
        <Dishdetail dish={this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId))[0]}
        comments={this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId))}
        />
      )
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={ Homepage } />
          <Route exact path='/menu' component={() => < Menu dishes={this.state.dishes} />} />
          <Route path='/menu/:dishId' component={dishWithId}></Route>
          <Route exact path='/contactus' component={ Contact } />
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
