import React from 'react'
// import DocumentTitle from 'react-document-title';
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd'
import JmSider from './components/sider'
import JmHeader from './components/header'
import JmTabs from './components/tabs'
import Routers from './router'
import store from './store'
import './styles/app.scss'

class App extends React.Component {
    constructor(props) {
        super(props);
        let pageEnum = {};
        Routers.forEach(page => {
            if (page.isTab) {
                pageEnum[page.name] = page.component;
            }
        });
        store.dispatch({type: "INIT_PAGE", pageEnum: pageEnum});
    }
    render() {
        return (
            <Layout>
                <BrowserRouter>
                <JmSider />
                <Layout className="site-layout">
                    <JmHeader />
                    <JmTabs />
                </Layout>
                </BrowserRouter>
            </Layout>
        );
    }
}

export default App;
