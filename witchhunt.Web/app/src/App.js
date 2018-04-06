import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import {Row, Col} from 'antd';
import NameForm from './NameForm';

class App extends Component {
    onClick = () => {
        this.props.history.push("/play")
    }
  render() {
    return (
        <Row type="flex" justify="center">
            <Col sm={12} xs={23} md={8}>
                <NameForm onClick={this.onClick} />
            </Col>
        </Row>
    );
  }
}

export default App;
