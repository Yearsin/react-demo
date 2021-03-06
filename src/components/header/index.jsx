import React from "react"
import { Layout } from 'antd';

const { Header } = Layout;

class JmHeader extends React.Component {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <Header className="site-layout-background" style={{ padding: 0}}>
                header
            </Header>
        );
    }
}

export default JmHeader;