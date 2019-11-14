import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/conta/login';
import CriarContaRh from './pages/conta/criar-rh';
import CriarContaProfissional from './pages/conta/criar-profissional';

import AdminDashboard from './pages/admin/dashboard';
import AdminLocais from './pages/admin/locais';

import * as serviceWorker from './serviceWorker';

const Routes = () => (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/conta/rh" component={CriarContaRh} />
                <Route path="/conta/profissional" component={CriarContaProfissional} />
                
                <Route path="/admin/dashboard"  component={AdminDashboard} />
                <Route path="/admin/locais"  component={AdminLocais} />
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
