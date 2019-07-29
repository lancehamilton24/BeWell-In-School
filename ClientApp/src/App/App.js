import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MyNavbar from '../components/Navbar/Navbar';
import { Home } from '../components/Home/Home';
import { TeacherPortal } from '../components/TeacherPortal/TeacherPortal';
import { StudentPortal } from '../components/StudentPortal/StudentPortal';
import { Survey } from '../components/Survey/Survey';
import { StudentSurvey } from '../components/StudentSurvey/StudentSurvey';
import { StudentSurveyResponses } from '../components/StudentSurveyResponses/StudentSurveyResponses';
import { TeacherResources } from '../components/TeacherResources/TeacherResources';
import { StudentRepository } from '../components/StudentRepository/StudentRepository';
import { TeacherRepository } from '../components/TeacherRepository/TeacherRepository';

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
      <Route path='/teacherResources' component={TeacherResources} />
      <Route path='/studentSurveyResponses' component={StudentSurveyResponses} />
      <Route path='/studentRepository' component={StudentRepository} />
      <Route path='/teacherRepository' component={TeacherRepository} />
      </Switch>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}
