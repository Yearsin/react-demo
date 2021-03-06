import React from 'react'
// import DocumentTitle from 'react-document-title';
import { BrowserRouter } from 'react-router-dom'
import { Layout, Tabs, Button } from 'antd'
import Zc from './components/zc'
import Ld from './components/ld'
import ZcOrder from './components/zc-order'
import LdOrder from './components/ld-order'
import JmSider from './components/sider'
import JmHeader from './components/header'
import './styles/app.scss'

const { TabPane } = Tabs;
class App extends React.Component {
    constructor(props) {
        super(props);
        const panes = [
            { title: '整车发货', content: <Zc/>, key: '1', name: 'zc' },
            { title: '零担发货', content: <Ld/>, key: '2', name: 'ld'  },
        ];
        this.state = {
            activeKey: panes[0].key,
            panes
        };
    }
    handleItem = e => {
        const { panes } = this.state;
        let flag = panes.find(i => i.name === e.item.props['data-url']);
        if (!flag) {
            console.log('add');
            panes.push({ title: 'hh', content: `<${e.item.props['data-url']}>`, key: 7, name: ''})
            this.setState({ panes })
        }
    }
    onChange = activeKey => {
        this.setState({ activeKey });
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
                <JmSider />
                <Layout className="site-layout">
                    <JmHeader />
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
                </Layout>
                </BrowserRouter>
            </Layout>
        );
    }
}

export default App;
