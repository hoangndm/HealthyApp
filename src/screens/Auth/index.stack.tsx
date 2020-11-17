import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import authStack from './routes';
import LoginScreen from './contents/Login/screen/Login.screen';
import RegisterScreen from './contents/Register/Register.screen';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={authStack.loginScreen} component={LoginScreen} />
      <Stack.Screen
        name={authStack.registerScreen}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
}
