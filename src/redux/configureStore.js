import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { DishesReducer } from './dishes';
import { CommentsReducer } from './comments';
import { PromotionsReducer } from './promotions';
import { LeadersReducer } from './leaders';

const Reducer = combineReducers({
    dishes: DishesReducer,
    comments: CommentsReducer,
    promotions: PromotionsReducer,
    leaders: LeadersReducer
})

export const configureStore = () => {
    const store = createStore(Reducer, applyMiddleware(thunk, logger));

    return store;
};