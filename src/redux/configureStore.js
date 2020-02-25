import { createStore, combineReducers } from 'redux';
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
    const store = createStore(Reducer);

    return store;
};