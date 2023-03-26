import { createStore,applyMiddleware} from 'redux';
import addReducer from './CounterReducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))

const store = createStore(addReducer,composedEnhancer);

export default store;