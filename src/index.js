import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducers             //set to default of false
const feedback = (state = {}, action) => {
    switch(action.type){
        case('SET_FEELINGS'):
            return {...state, feeling: action.payload};
        case('SET_UNDERSTANDING'):
            return {...state, understanding: action.payload};
        case('SET_SUPPORT'):
            return {...state, support: action.payload};
        case('ADD_COMMENTS'):
            return {...state, comments: action.payload};
        case('SET_FLAGGED'):
            return {...state, flagged: action.payload};
        case('CLEAR_FEEDBACK'):
            return {};
        default:
            return state;
    }
}

// Store
const storeInstance = createStore(
    combineReducers({
       feedback
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
