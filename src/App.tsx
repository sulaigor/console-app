import ContextProvider from 'core/ContextProvider';
import AppLayout from 'core/AppLayout';
import MainRouter from 'core/MainRouter';

const App = () => {
  return (
    <ContextProvider>
      <AppLayout>
        <MainRouter />
      </AppLayout>
    </ContextProvider>
  );
};

export default App;
