import * as ActionTypes from "./actionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = comment => {
  return {
    type: ActionTypes.ADD_COMMENT,
    payload: comment
  };
};

export const postComment = (dishId, rating, author, comment) => dispatch => {
  const newComment = {
    dishId,
    rating,
    author,
    comment
  }
  newComment.date = new Date().toISOString();

  return fetch(baseUrl + 'comments', {
    method: 'POST',
    body: JSON.stringify(newComment),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })
  .then(response => {
    if(response.ok) return response;
    else {
      const error = new Error('Error' + response.status + ': ' + response.statusText);error.response = response;
      throw error;
    }
  },
  error => {
    const errMsg = new Error(error.message);
    throw errMsg
  })
  .then(response => response.json())
  .then(response => dispatch(addComment(response)))
  .catch(error => {
    console.log(error.message);
    alert('Your comment could not be posted' + error.message);
  });
} 

export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + 'dishes')
    .then(response => {
      if(response.ok) return response;
      else {
        const error = new Error('Error' + response.status + ': ' + response.statusText);error.response = response;
        throw error;
      }
    },
    error => {
      const errMsg = new Error(error.message);
      throw errMsg
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
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
    .then(response => {
      if(response.ok) return response;
      else {
        const error = new Error('Error' + response.status + ': ' + response.statusText);error.response = response;
        throw error;
      }
    },
    error => {
      const errMsg = new Error(error.message);
      throw errMsg
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
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
    .then(response => {
      if (response.ok) return response;
      else {
        const error = new Error('Error' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
      const errMsg = new Error(error.message);
      throw errMsg
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
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