import React, { Component } from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter 
} from 'react-router-dom';
import { connect } from 'react-redux';
import Menu from "./Menu.component";
import Dishdetail from "./Dishdetail.component";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Home from "./homeComponent";
import About from './aboutComponent';
import Contact from "./contactComponent";

export const mapStateToProps = ({ dishes, comments, promotions, leaders }) => {
  return {
    dishes,
    comments,
    promotions,
    leaders
  }
}

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Homepage = () => {
      return <Home dish={this.props.dishes.filter(dish => dish.featured)[0]}
      promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
      leader={this.props.leaders.filter(leader => leader.featured)[0]}
      />
    }

    const dishWithId = ({match}) => {
      return (
        <Dishdetail dish={this.props.dishes.filter(dish => dish.id === parseInt(match.params.dishId))[0]}
        comments={this.props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId))}
        />
      )
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={ Homepage } />
          <Route exact path='/menu' component={() => < Menu dishes={this.props.dishes} />} />
          <Route path='/menu/:dishId' component={dishWithId}></Route>
          <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} />} />
          <Route exact path='/contactus' component={ Contact } />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(MainComponent));
