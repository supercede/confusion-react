import * as ActionTypes from "./actionTypes";
import { DISHES } from "../shared/dishes";

export const addComment = (dishId, rating, author, comment) => {
  console.log(dishId, rating, author, comment);
  
  return {
    type: ActionTypes.ADD_COMMENT,
    payload: {
      dishId,
      rating,
      author,
      comment
    }
  };
};

export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000)
};

export const dishesLoading = () => {
  return {
    type: ActionTypes.DISHES_LOADING
  }
};

export const dishesFailed = errMsg => {
  return {
    type: ActionTypes.DISHES_FAILED,
    payload: errMsg
  }
};

export const addDishes  = (dishes) => {
  return {
    type: ActionTypes.ADD_DISHES,
    payload: dishes
  }
};