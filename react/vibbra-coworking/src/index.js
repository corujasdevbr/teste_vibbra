import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Login from './pages/conta/login';
import CriarContaRh from './pages/conta/criar-rh';
import CriarContaProfissional from './pages/conta/criar-profissional';

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/Conta/Rh" component={CriarContaRh} />
                <Route path="/Conta/Profissional" component={CriarContaProfissional} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(<Login />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
