import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../components/Home/Home';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
      <Layout>
        <Route exact path='/' component={Home} />

      </Layout>
      </BrowserRouter>
      </div>
    );
  }
}
