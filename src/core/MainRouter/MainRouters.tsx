import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DEFAULT_PATH } from 'const/pagePaths';
import ConsoleDefaultPage from 'pages/ConsoleDefaultPage';

const MainRouters = () => {
  return (
    <Router>
      <Routes>
        <Route path={DEFAULT_PATH} element={<ConsoleDefaultPage />} />
      </Routes>
    </Router>
  );
};

export default MainRouters;
