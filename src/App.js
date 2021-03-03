import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Button } from 'antd';
import './App.css';
import './styles/app.scss';
import Home from './pages/home'
import Login from './pages/login'
import NotFound from './pages/not-found'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
