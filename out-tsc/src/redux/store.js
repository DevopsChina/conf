import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { appReducer } from './reducer';
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;
const enhancers = compose(applyMiddleware(ReduxThunk), devTools);
export const store = createStore(appReducer, enhancers);
//# sourceMappingURL=store.js.map