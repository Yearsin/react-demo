import React from 'react'
import Routers from './router/index'
// import DocumentTitle from 'react-document-title';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Layout, notification, Icon } from 'antd';
import Home from './components/home'
import NotFound from './components/not-found'
import './styles/app.scss'

console.log(Routers, 'routers');
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to="/index">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home} />
                    {Routers.map(route => (
                        <Route
                            exact
                            path = {route.path}
                            key = {route.path}
                            title = {route.title}
                            render = {() => (
                                <route.component />
                            )}
                        >
                        </Route>
                    ))}
                    <Route component={NotFound} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
