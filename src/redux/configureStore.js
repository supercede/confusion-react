import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { DishesReducer } from './dishes';
import { CommentsReducer } from './comments';
import { PromotionsReducer } from './promotions';
import { LeadersReducer } from './leaders';
import { initialFeedback } from './forms';

const Reducer = combineReducers({
    dishes: DishesReducer,
    comments: CommentsReducer,
    promotions: PromotionsReducer,
    leaders: LeadersReducer,
    ...createForms({
        feedback: initialFeedback
    })
})

export const configureStore = () => {
    const store = createStore(Reducer, applyMiddleware(thunk, logger));

    return store;
};