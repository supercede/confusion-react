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
import { postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback } from "../redux/actionCreators";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchPromos: () => dispatch(fetchPromos()),
    fetchComments: () => dispatch(fetchComments()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    postFeedback: (firstName, lastName, telNum, email, agree, contactType, message) => dispatch(postFeedback(firstName, lastName, telNum, email, agree, contactType, message))
  }
}

class MainComponent extends Component {
  componentDidMount () {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos(); 
    this.props.fetchLeaders();   
  }
  
  render() {  
    const Homepage = () => {
      return <Home dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
      dishesLoading={this.props.dishes.isLoading}
      dishesErrMsg={this.props.dishes.errMsg}
      promotion={this.props.promotions.promotions.filter(promotion => promotion.featured)[0]}
      promosLoading={this.props.promotions.isLoading}
      promosErrMsg={this.props.promotions.errMsg}      
      leader={this.props.leaders.leaders.filter(leader => leader.featured)[0]}
      leadersLoading={this.props.leaders.isLoading}
      leadersErrMsg={this.props.leaders.errMsg}
      />
    }

    const dishWithId = ({match}) => {
      return (
        <Dishdetail dish={this.props.dishes.dishes.filter(dish => dish.id === parseInt(match.params.dishId))[0]}
        isLoading = { this.props.dishes.isLoading }
        errMsg = { this.props.dishes.errMsg }
        comments={this.props.comments.comments.filter(comment => comment.dishId === parseInt(match.params.dishId))}
        commentsErrMsg={this.props.dishes.errMsg}
        postComment={this.props.postComment}
        />
      )
    }

    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames='page' timeout={300}>
            <Switch>
              <Route path='/home' component={ Homepage } />
              <Route exact path='/menu' component={() => < Menu dishes={this.props.dishes} />} />
              <Route path='/menu/:dishId' component={dishWithId}></Route>
              <Route exact path='/aboutus' component={() => <About leaders={this.props.leaders} isLoading={this.props.leaders.isLoading} errMsg={this.props.leaders.errMsg} />} />
              <Route exact path='/contactus' component={() => <Contact resetFeedbackForm = {this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />  } />
              <Redirect to='/home' />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
