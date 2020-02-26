import * as ActionTypes from "./actionTypes";

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
