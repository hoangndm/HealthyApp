import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from '../core/config/store';
import AppContainer from './app.container';
import FirebaseService from '@src/core/services/firebase';
import messaging from '@react-native-firebase/messaging';

const {store, persistor} = configureStore();

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
