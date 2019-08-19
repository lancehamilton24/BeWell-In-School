import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import MyNavbar from '../components/Navbar/Navbar';
import { Home } from '../components/Pages/Home/Home';
import { TeacherPortal } from '../components/Pages/TeacherPortal/TeacherPortal';
import { StudentPortal } from '../components/Pages/StudentPortal/StudentPortal';
import { Survey } from '../components/Pages/Survey/Survey';
import { StudentSurvey } from '../components/Pages/StudentSurvey/StudentSurvey';
import { StudentSurveyResponses } from '../components/Pages/StudentSurveyResponses/StudentSurveyResponses';
import { Resources } from '../components/Pages/Resources/Resources';
import { StudentResources } from '../components/Pages/StudentResources/StudentResources';
import { StudentRepository } from '../components/Pages/StudentRepository/StudentRepository';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css'
import SurveyResponses from '../components/Pages/SurveyResponses/SurveyResponses';
import SelectTeacher from '../components/Pages/SelectTeacher/SelectTeacher';
import SelectStudent from '../components/Pages/SelectStudent/SelectStudent';

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
      <Route path='/studentResources' component={StudentResources} />
      <Route path='/surveyResponses' component={SurveyResponses} />
      <Route path='/selectTeacher' component={SelectTeacher} />
      <Route path='/selectStudent' component={SelectStudent} />
      </Switch>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}
