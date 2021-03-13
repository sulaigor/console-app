import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DEFAULT_PATH } from 'const/pagePaths';
import ConsoleDefaultPage from 'pages/ConsoleDefaultPage';

const MainRouters = () => {
  return (
    <Router>
      <Switch>
        <Route path={DEFAULT_PATH}>
          <ConsoleDefaultPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouters;
