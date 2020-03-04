import * as ActionTypes from './actionTypes';

export const CommentsReducer = (state = {
    errMsg: null,
    comments: []
  }, action) => {
  switch(action.type) {
    case ActionTypes.ADD_COMMENTS:
        return {...state, isLoading: false, errMsg: null, comments: action.payload};

    case ActionTypes.COMMENTS_FAILED:
        return {...state, isLoading: false, errMsg: action.payload, comments: []};

    case ActionTypes.ADD_COMMENT:
        const comment = action.payload;
        return {...state, comments: state.comments.concat(comment)};
        
    default:
        return state;
  }
}