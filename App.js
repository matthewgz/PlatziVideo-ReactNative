import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Store';
import Loading from './src/sections/components/Loading';

import AppLayout from './src/AppLayout';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AppLayout />
      </PersistGate>
    </Provider>
  );
};

export default App;
