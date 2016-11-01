import React from 'react'
import ReactDOM from 'react-dom'
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


export default class Nav extends React.Component {
    callback(key) {
        console.log(key);
    }
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="首页" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="主题" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="联系我" key="3">Content of Tab Pane 3</TabPane>
            </Tabs>
        )
    }

}