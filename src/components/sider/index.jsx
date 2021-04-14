import React from "react"
// import { Router, Route, Link } from 'react-router'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import Routers from '../../router'
import store from '../../store'

const { Sider } = Layout;
const { SubMenu } = Menu;

class JmSider extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            activeKey: [],
            menus: [
                {
                    children: [
                        {name: "整车发货", router: "zc", path: '/zc'},
                        {name: "零担发货", router: "ld", path: '/ld'}
                    ],
                    parent: "货源管理"
                },
                {
                    children: [
                        {name: "整车订单", router: "zcOrder", path: '/zcOrder'},
                        {name: "零担订单", router: "ldOrder", path: '/ldOrder'}
                    ],
                    parent: "订单管理"
                }
            ]
        };
        store.subscribe(() => {
            this.setState({
                activeKey: [String(store.getState().activeKey)]
            });
        });
    }
    handleSelect = e => {
        // 获取router规则数据 匹配上后 获取组件也就是 component 后给 tabs 赋值
        let route;
        Routers.map(item => item.name === e.key && (route = item));
        // if (store.getState().action) {
        let list = store.getState().action ? store.getState().action.pages.filter(item => item.name === route.name) : [];
        // 在tabs中没有
        // console.log(list)
        !list.length && store.getState().action.pages.push({name: route.name, title: route.title});
        // // console.log(route.name, store.getState().pageEnum);
        store.dispatch({type: "PAGES_ADD", pages: store.getState().action.pages, activeKey: route.name})
        // }
    }
    render () {
        return (
            <Sider>
                <div className="logo" />
                <Menu
                mode="inline"
                theme="dark"
                selectedKeys={this.state.activeKey}
                onSelect={this.handleSelect}
                >
                    {this.state.menus.map((item, index) => (
                        <SubMenu key={String(index + 1)} title={item.parent}>
                            {item.children.map(childItem => (
                                <Menu.Item key={childItem.router} data-index={String(index + 1)}>
                                    {/* {childItem.name} */}
                                    <Link to={{pathname: childItem.path}}>{childItem.name}</Link>
                                </Menu.Item>
                            ))}
                        </SubMenu>
                    ))}
                </Menu>
            </Sider>
        );
    }
}

export default JmSider;