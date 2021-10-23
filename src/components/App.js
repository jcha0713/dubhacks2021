import React from 'react';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';

// import components
import StartPage from './StartPage';
import AboutPage from './AboutPage';
import ResourcesPage from './ResourcesPage';


export default function App() {
  return (
    <div>
      <main className="container">
      <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => {
          return (
            <Redirect to="/start"/>
          )}}/>
        <Route path ="/start" exact={true} component={StartPage}/>
        <Route path ="/about" component={AboutPage}/>
        <Route path ="/resources" component={ResourcesPage}/>
      </Switch>
      </BrowserRouter>
      </div>
      </main>
    </div>
  )
}
