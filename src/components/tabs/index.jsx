import React from "react"
import { Layout, Tabs } from 'antd'
import Routers from '../../router'
import store from '../../store'

const { TabPane } = Tabs;

// class ToTabContent extends React.Component {
//     constructor (props) {
//         super(props)
//     }
//     render() {
//         //通过传入的name属性动态得到自己需要注入的组件，MyComponent首字母要大写
//         // const MyComponent = pages[this.props.name]
//         console.log(this.props.name);
//         return <MyComponent {...this.props} />
//     }
// }
class JmTabs extends React.Component {
    constructor (props) {
        super(props);
        // 当页面刷新 panes 为空时 读取本地数据遍历路由规则 重新组装
        const panes = store.getState().action.pages // store.getState().pages.length ? store.getState().pages : arr;
        const activeKey = store.getState().activeKey;
        this.state = {
            activeKey: activeKey,
            panes,
            storePages: Routers.filter(item => item.name === activeKey)[0]
        };
        // console.log(store.getState().action);
        // console.log(activeKey)
        // console.log(store.getState().action);
        // console.log(Routers);
        // Routers.forEach(item => {
        //     if (item.name === activeKey) {
        //         this.setState({storePages: item});
        //         // console.log(this.state.storePages, 'storePages');
        //         console.log(item, 'item');
        //     }
        // });
        console.log(Routers[0], 'Routers');
        store.subscribe(() => {
            this.setState({
                panes: store.getState().action.pages, // store.getState().pages.length ? store.getState().pages : arr,
                activeKey: store.getState().activeKey
            });
        });
    }
    onChange = activeKey => {
        this.setState({ activeKey, storePages: Routers.filter(item => item.name === activeKey)[0] });
        console.log(activeKey)
        store.dispatch({type: "PAGES_ADD", pages: store.getState().pages, activeKey: activeKey});
    };
    onEdit = (targetKey, action) => {
        this[action](targetKey);
    };
    remove = targetKey => {
        let { activeKey } = this.state;
        const panes = this.state.panes.filter(pane => pane.name !== targetKey);
        panes.length && (activeKey = panes[panes.length - 1 > 0 ? panes.length - 1 : 0].name);
        store.dispatch({type: "PAGES_ADD", pages: panes, activeKey: activeKey})
    };
    render () {
        return (
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
                    key={pane.name}
                    data-url={pane.name}
                    tab={pane.title}
                    style={{
                    minHeight: 280,
                    backgroundColor: '#fff',
                    padding: '10px'
                    }}
                >
                {/* <ToTabContent name={pane.name} /> */}
                { this.state.storePages.content }
                {/* {pane ? (pane.content ? pane.content : this.state.storePages.content) : null} */}
                </TabPane>
            ))}
            </Tabs>
        );
    }
}

export default JmTabs;