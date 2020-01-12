import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider }  from 'react-redux';
import Chat from './components/chat';
import Login from './components/login'
import reducers from './reducers/index';
import {
     BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import {  createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";


const loggerMiddleware = store => next => action => {
    console.log(action);
    return next(action);
};
const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, loggerMiddleware),
        window.devToolsExtension ? window.devToolsExtension(): f => f
    )
);

ReactDOM.render(
    <Provider store ={store}>
        <Router>
            <div>
            <ul>
                <li><Link to="/">LOGIN</Link></li>
                <li><Link to="/chat">CHAT</Link></li>
            </ul>

                <Route path="/" exact component={Login}/>
                <Route path="/chat" exact component={Chat}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);




