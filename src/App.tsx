import ContextProvider from 'core/ContextProvider';
import AppLayout from 'core/AppLayout';
import MainRouter from 'core/MainRouter';
import StoreProvider from 'core/StoreProvider';

const App = () => {
  return (
    <StoreProvider>
      <ContextProvider>
        <AppLayout>
          <MainRouter />
        </AppLayout>
      </ContextProvider>
    </StoreProvider>
  );
};

export default App;
