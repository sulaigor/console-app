import AppLayout from 'core/AppLayout';
import MainRouter from 'core/MainRouter';
import StoreProvider from 'core/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <AppLayout>
        <MainRouter />
      </AppLayout>
    </StoreProvider>
  );
};

export default App;
