// 
import { render } from 'react-dom';
import React, { Component, Fragment } from 'react';
// import Hello from './Hello';
import TopBar from './TopBar';
import ProductList from './ProductList';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Fragment>
        <TopBar />
        <div className="container">
          <ProductList />
        </div>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('root'));
