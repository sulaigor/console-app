import React from 'react';
import ContextProvider from 'core/ContextProvider';
import ConsoleWindow from 'core/ConsoleWindow';

const App = () => {
  return (
    <ContextProvider>
      <ConsoleWindow />
    </ContextProvider>
  );
};

export default App;
