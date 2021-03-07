import React from 'react'
// import DocumentTitle from 'react-document-title';
import { BrowserRouter } from 'react-router-dom'
import { Layout } from 'antd'
import JmSider from './components/sider'
import JmHeader from './components/header'
import JmTabs from './components/tabs'
import './styles/app.scss'

class App extends React.Component {
    constructor(props) {
        super(props);
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
