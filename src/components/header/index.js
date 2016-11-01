import React from 'react'
import ReactDOM from 'react-dom'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Header extends React.Component {
    constructor() {
        super()

        this.state = {
            current: 'mail',
        }

        this.getInitialState = this.getInitialState.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }
    getInitialState() {
        return {
            current: 'mail',
        };
    }
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
            >
                <Menu.Item key="mail">
                    <Icon type="home" />Home
                </Menu.Item>
                <Menu.Item key="app">
                    <Icon type="appstore" />Install APP
                </Menu.Item>
                <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                    <MenuItemGroup title="technology stack">
                        <Menu.Item key="setting:1">react</Menu.Item>
                        <Menu.Item key="setting:2">webpack</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="main plugins">
                        <Menu.Item key="setting:3">antd</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <Menu.Item key="star">
                    <a href="https://ant.design" target="_blank" rel="noopener "><Icon type="home" />github</a>
                </Menu.Item>
            </Menu>
        )
    }

}