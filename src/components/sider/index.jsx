import React from "react"
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
                        {name: "整车发货", router: "zc"},
                        {name: "零担发货", router: "ld"}
                    ],
                    parent: "货源管理"
                },
                {
                    children: [
                        {name: "整车订单", router: "zcOrder"},
                        {name: "零担订单", router: "ldOrder"}
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
        let currentRoute;
        Routers.map(route => route.name === e.key && (currentRoute = route));
        let list = store.getState().pages.filter(item => item.name === currentRoute.name);
        // 在tabs中没有
        !list.length && store.getState().pages.push(currentRoute);
        store.dispatch({type: "PAGES_ADD", pages: store.getState().pages, activeKey: currentRoute.name})
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
                                    {childItem.name}
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