import React from 'react'
import Routers from './router/index'
// import DocumentTitle from 'react-document-title';
import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom'
import { Layout, Menu, Tabs, Icon, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
import Home from './components/home'
import Login from './components/login'
import Hh from './components/hh'
import NotFound from './components/not-found'
import './styles/app.scss'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { TabPane } = Tabs;
const initialPanes = [
    { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
    { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
    {
      title: 'Tab 3',
      content: 'Content of Tab 3',
      key: '3',
      closable: false,
    },
    {
      title: 'Tab 4',
      content: 'Content of Tab 4',
      key: '4',
      closable: false,
    },
];

class App extends React.Component {
    state = {
        collapsed: false,
        pages: []
    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: '首页', content: <Home/>, key: '1', name: 'Home' },
            { title: '登录', content: <Login/>, key: '2', name: 'Login'  },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes,
        };
    }
    handleItem = e => {
        const { panes } = this.state;
        // panes.map(i => {
        //     if (e.item.props['data-url'] === i.name) {
        //         this.setState({activeKey: i.key});
        //         return true;
        //     }
        // })
        console.log(e.item.props);
        let flag = panes.find(i => i.name === e.item.props['data-url']);
        if (!flag) {
            console.log('add');
            panes.push({ title: 'hh', content: `<${e.item.props['data-url']}>`, key: 7, name: ''})
            this.setState({ panes })
        }
        // panes.map(i => {});
    }
    onChange = activeKey => {
        this.setState({ activeKey });
        // console.log(activeKey);
    };
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };
    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey, name: ''});
        this.setState({ panes, activeKey });
    };
    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    };
    render() {
        return (
            <Layout>
                <BrowserRouter>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" data-url="Home" data-p={<Home />} icon={<UserOutlined />} onClick={this.handleItem}>
                            <Link to="/index">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2" data-url="Login" icon={<VideoCameraOutlined />} onClick={this.handleItem}>
                            <Link to="/login">Login</Link>
                        </Menu.Item>
                        <Menu.Item key="6" data-url="Hh" icon={<UploadOutlined />} onClick={this.handleItem}>
                            <Link to="/hh">hh</Link>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                        })}
                    </Header>
                    <div style={{ marginBottom: 16 }}>
                        <Button onClick={this.add}>ADD</Button>
                    </div>
                    <Tabs
                        hideAdd
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        style={{
                        margin: '15px 16px 10px 16px',
                        }}
                    onEdit={this.onEdit}
                    >
                    {this.state.panes.map(pane => (
                        <TabPane
                            tab={pane.title}
                            key={pane.key}
                            data-url={pane.name}
                            style={{
                            minHeight: 280,
                            backgroundColor: '#fff',
                            padding: '10px'
                            }}
                        >
                        {pane.content}
                        </TabPane>
                    ))}
                    </Tabs>
                    {/* <BrowserRouter>
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
                    </BrowserRouter> */}
                    {/* <Content
                        className="site-layout-background"
                        style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        }}
                    >
                        Content
                    </Content> */}
                </Layout>
                </BrowserRouter>
            </Layout>
            // <BrowserRouter>
            //     <ul>
            //         <li><Link to="/index">Home</Link></li>
            //         <li><Link to="/login">Login</Link></li>
            //     </ul>
            //     <Switch>
            //         <Route exact path="/" component={Home} />
            //         {Routers.map(route => (
            //             <Route
            //                 exact
            //                 path = {route.path}
            //                 key = {route.path}
            //                 title = {route.title}
            //                 render = {() => (
            //                     <route.component />
            //                 )}
            //             >
            //             </Route>
            //         ))}
            //         <Route component={NotFound} />
            //     </Switch>
            // </BrowserRouter>
        );
    }
}

{/* <Redirect from="/" to="/index"></Redirect>
<Redirect to="/404"></Redirect> */}
export default App;
