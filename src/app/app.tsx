import React, {PureComponent} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import configureStore from '../core/config/store';
import AppContainer from './app.container';
import FirebaseService from '@src/core/services/firebase';
import messaging from '@react-native-firebase/messaging';

const {store, persistor} = configureStore();

class App extends PureComponent {
  componentDidMount() {
    this.requestUserPermission();
    this.messageListener();
  }

  messageListener = async () => {
    // Foreground
    const unsubscribe = messaging().onMessage(async (remoteMessage: any) => {
      if (remoteMessage.notification) {
      }
    });
    // Background & Quit
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    messaging().setBackgroundMessageHandler(async (remoteMessage: any) => {});
    return unsubscribe;
  };

  requestUserPermission = async () => {
    const enabled = await messaging().hasPermission();
    if (enabled === 1) {
      await FirebaseService.setToken();
    } else {
      await FirebaseService.requestUserPermission();
    }
  };
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
