import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MyNavbar from '../components/Navbar/Navbar';
import { Home } from '../components/Home/Home';
import { TeacherPortal } from '../components/TeacherPortal/TeacherPortal';
import { StudentPortal } from '../components/StudentPortal/StudentPortal';
import { Survey } from '../components/Survey/Survey';
import { StudentSurvey } from '../components/StudentSurvey/StudentSurvey';
import { StudentSurveyResponses } from '../components/StudentSurveyResponses/StudentSurveyResponses';
import { Resources } from '../components/Resources/Resources';
import { StudentResources } from '../components/StudentResources/StudentResources';
import { StudentRepository } from '../components/StudentRepository/StudentRepository';
import { TeacherRepository } from '../components/TeacherRepository/TeacherRepository';
import 'materialize-css/dist/css/materialize.min.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <div>
        <MyNavbar
/>
        <Switch>
        <Route exact path='/' component={Home} />
      <Route path='/teacherPortal' component={TeacherPortal} />
      <Route path='/studentPortal' component={StudentPortal} />
      <Route path='/survey' component={Survey} />
      <Route path='/studentSurvey' component={StudentSurvey} />
      <Route path='/resources' component={Resources} />
      <Route path='/studentSurveyResponses' component={StudentSurveyResponses} />
      <Route path='/studentRepository' component={StudentRepository} />
      <Route path='/teacherRepository' component={TeacherRepository} />
      <Route path='/studentResources' component={StudentResources} />
      </Switch>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}
