import { createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import addReducer from '../Reducer/AppReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))


const store = createStore(addReducer,composedEnhancer);

export default store;