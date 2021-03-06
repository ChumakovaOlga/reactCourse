import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'fontsource-roboto';
import {BrowserRouter} from 'react-router-dom';
import {createStore} from 'redux'
import rootReducer from './redux/rootReducer'
import {Provider} from 'react-redux'

const store = createStore( rootReducer)
const application = (
    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>
)
ReactDOM.render(application,
    document.getElementById('root'));
reportWebVitals();
