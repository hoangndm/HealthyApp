import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import homeStack from './routes';
import HomeScreen from './contents/Home.screen';
import NotifiList from '../Notification/contents/NotificationList.screen';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={homeStack.homeScreen} component={HomeScreen} />
      <Stack.Screen name={homeStack.notifiScreen} component={NotifiList} />
    </Stack.Navigator>
  );
}
