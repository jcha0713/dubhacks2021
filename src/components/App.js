import React from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

// import components
import StartPage from './StartPage';
import AcceptPage from './AcceptPage';
import BootcampPage1 from './BootcampPage1';
import BootcampPage2 from './BootcampPage2';
import BootcampPage3 from './BootcampPage3';
import AboutPage from './AboutPage';
import ResourcesPage from './ResourcesPage';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/start" />;
            }}
          />
          <Route path="/start" exact={true} component={StartPage} />
          <Route path="/accept" component={AcceptPage} />
          <Route path="/bootcamp1" component={BootcampPage1} />
          <Route path="/bootcamp2" component={BootcampPage2} />
          <Route path="/bootcamp3" component={BootcampPage3} />
          <Route path="/about" component={AboutPage} />
          <Route path="/resources" component={ResourcesPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
