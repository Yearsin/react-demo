import React from "react"
import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import Routers from '../../router'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class JmSider extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
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
    }
    handleSelect = e => {
        let indexs = e.key.split('-');
        let name = this.state.menus[indexs[0] - 1].children[indexs[1] - 1].router;
        // 获取router规则数据 匹配上后 获取组件也就是 component 后给 tabs 赋值
        console.log(name);
        console.log(Routers);
        // this.$router.push({
        //     name,
        //     query: {menuIndex: e}
        // });
    }
    render () {
        return (
            <Sider>
                <div className="logo" />
                <Menu
                mode="inline"
                theme="dark"
                onSelect={this.handleSelect}
                >
                    {this.state.menus.map((item, index) => (
                        <SubMenu key={String(index + 1)} title={item.parent}>
                            {item.children.map((childItem, childIndex) => (
                                <Menu.Item key={(index + 1) + '-' + (childIndex + 1)} data-url={item.router} >
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