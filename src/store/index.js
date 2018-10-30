import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk'

import { authReducer, errorReducer, mapReducer, tradeReducer, tradieReducer, userReducer   } from '../reducers'

const reducers = combineReducers({
    auth: authReducer,
    errors: errorReducer,
    mapFromStore: mapReducer,
    tradieFromStore:  tradieReducer,
    trade: tradeReducer,
    user: userReducer
});

const initialState = {}

const middleware = [thunk]

const store = createStore(reducers, initialState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store