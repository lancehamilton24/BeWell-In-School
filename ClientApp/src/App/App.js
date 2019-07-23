import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Home } from '../components/Home/Home';
import { TeacherPortal } from '../components/TeacherPortal/TeacherPortal';
import { StudentPortal } from '../components/StudentPortal/StudentPortal';
import { EditSurvey } from '../components/EditSurvey/EditSurvey';
import { StudentSurvey } from '../components/StudentSurvey/StudentSurvey';
import MyNavbar from '../components/Navbar/Navbar';
import { StudentSurveyResponses } from '../components/StudentSurveyResponses/StudentSurveyResponses';

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
      <Route path='/editSurvey' component={EditSurvey} />
      <Route path='/studentSurvey' component={StudentSurvey} />
      <Route path='/studentSurveyResponses' component={StudentSurveyResponses} />
      </Switch>
      </div>
      </BrowserRouter>
      </div>
    );
  }
}
