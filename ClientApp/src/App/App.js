import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Home } from '../components/Home/Home';
import { TeacherPortal } from '../components/TeacherPortal/TeacherPortal';
import { StudentPortal } from '../components/StudentPortal/StudentPortal';


export default class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
      <Layout>
        <Switch>
        <Route exact path='/' component={Home} />
      <Route path='/teacherPortal' component={TeacherPortal} />
      <Route path='/studentPortal' component={StudentPortal} />
      </Switch>
      </Layout>
      </BrowserRouter>
      </div>
    );
  }
}
