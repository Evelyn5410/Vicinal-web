import React from "react";
import logo from '../assets/images/logo.svg';
import {Icon} from 'antd';
export class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Comet</h1>
                {
                    this.props.isLogIn ?
                        <a className="logout"
                           onClick={this.props.handleLogout}
                        >
                            <Icon type="logout" />{' '}Logout
                        </a> : null
                }
            </header>
        );
    }
}