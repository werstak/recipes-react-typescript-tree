import {
    createStore,
    combineReducers,
    compose,
    applyMiddleware,
} from 'redux';

import createSagaMiddleware from 'redux-saga';
import {routerMiddleware} from 'react-router-redux';

import history from '../utils/history';

import todosReducer from '../reducers/todosReducer';
import categoriesReducer from '../reducers/categoriresReducer';
import articlesReducer from '../reducers/articlesReducer';
import recipesReducer from '../reducers/recipesReducer'

const rootReducer = combineReducers({
    todos: todosReducer,
    categories: categoriesReducer,
    articles: articlesReducer,
    recipes: recipesReducer
});

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const router = routerMiddleware(history);

export const sagaMiddleware = createSagaMiddleware()


const initStore = () => {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware, router)));
};

export default initStore;
