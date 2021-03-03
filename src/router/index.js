import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import asyncComponent from '../utils/asyncComponent';

const Home = asyncComponent(() => import('../pages/home'));

export default function () {
    return (
        <Router>
            <Switch>
                <Route path='/home' component={Home} />
                {/* <Redirect from='/' to='/home'></Redirect> */}
            </Switch>
        </Router>
    );
}