import React from "react"
import { BrowserRouter, Switch, Route, Link, NavLink, Redirect } from 'react-router-dom'
import { Layout, Menu, Tabs, Icon, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

class Sider extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            menus: [
                {
                    children: [{name: "线路管理", router: "route"}, {name: "专线管理", router: "dedicatedLine"}],
                    parent: "基础管理"
                }
            ]
        };
    }
    render () {
        <Sider>
            <div className="logo" />
            {this.state.menus.map((item, index) => (
                <Menu>
                    {/* <Menu.Item key={index} data-url={item.} onClick={this.handleItem}></Menu.Item> */}
                </Menu>
            ))}
        </Sider>
    }
}

export default App;