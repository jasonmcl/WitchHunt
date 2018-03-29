import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Row, Col} from 'antd';
import NameForm from './NameForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Row type="flex" justify="center">
            <Col sm={12} xs={23} md={8}>
                <NameForm />
            </Col>
        </Row>
      </div>
    );
  }
}

export default App;
