import React, { Component } from "react";
import {
  Switch,
  Route,
  Redirect,
  withRouter 
} from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form'
import Menu from "./Menu.component";
import Dishdetail from "./Dishdetail.component";
import Header from "./headerComponent";
import Footer from "./footerComponent";
import Home from "./homeComponent";
import About from './aboutComponent';
import Contact from "./contactComponent";
import { addComment, fetchDishes, fetchComments, fetchPromos } from "../redux/actionCreators";

export const mapStateToProps = ({ dishes, comments, promotions, leaders }) => {
  return {
    dishes,
    comments,
    promotions,
    leaders
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchPromos: () => dispatch(fetchPromos()),
    fetchComments: () => dispatch(fetchComments())
  }
}

class MainComponent extends Component {
  componentDidMount () {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();    
  }
  render() {
    const Homepage = () => {
      return <Home dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
      dishesLoading={this.props.dishes.isLoading}
      dishesErrMsg={this.props.dishes.errMsg}
      promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
      promosLoading={this.props.dishes.isLoading}
      promosErrMsg={this.props.dishes.errMsg}
      leader={this.props.leaders.filter(leader => leader.featured)[0]}
      />
    }

    const dishWithId = ({match}) => {
      return (
        <Dishdetail dish={this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId))[0]}
        isLoading = { this.props.dishes.isLoading }
        errMsg = { this.props.dishes.errMsg }
        comments={this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId))}
        commentsErrMsg={this.props.dishes.errMsg}
        addComment={this.props.addComment}
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
          <Route exact path='/contactus' component={() => <Contact resetFeedbackForm = {this.props.resetFeedbackForm} />  } />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
