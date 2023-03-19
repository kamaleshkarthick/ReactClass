import { createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import combinedRed from './Reducer/index';

import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const store = createStore(combinedRed,composedEnhancer);

export default store;