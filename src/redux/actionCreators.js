import * as ActionTypes from "./actionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = (dishId, rating, author, comment) => {
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

  return fetch(baseUrl + 'dishes')
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)));
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

export const fetchComments = () => dispatch => {
  return fetch(baseUrl + 'comments')
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)));
};

export const addComments = comment => {
  return {
    type: ActionTypes.ADD_COMMENTS,
    payload: comment
  };
};
export const commentsFailed = errMsg => {
  return {
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMsg
  }
};

export const fetchPromos = () => dispatch => {
  dispatch(promosLoading(true));

  return fetch(baseUrl + 'promotions')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
};

export const promosLoading = () => {
  return {
    type: ActionTypes.PROMOS_LOADING
  }
};

export const promosFailed = errMsg => {
  return {
    type: ActionTypes.PROMOS_FAILED,
    payload: errMsg
  }
};

export const addPromos = promos => {
  return {
    type: ActionTypes.ADD_PROMOS,
    payload: promos
  }
};