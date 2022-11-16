import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DEFAULT_PATH } from 'const/pagePaths';
import { useAppStart } from 'hooks/useAppStart';
import ConsoleDefaultPage from 'pages/ConsoleDefaultPage';

const MainRouters = () => {
  useAppStart();

  return (
    <Router>
      <Routes>
        <Route path={DEFAULT_PATH} element={<ConsoleDefaultPage />} />
      </Routes>
    </Router>
  );
};

export default MainRouters;
