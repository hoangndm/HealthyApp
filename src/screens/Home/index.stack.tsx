import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import homeStack from './routes';
import HomeScreen from './contents/Home.screen';
import EventList from '../Event/contents/ListEvents.screen';
import NotifiList from '../Notification/contents/NotificationList.screen';
import settingScreen from '../Setting/contents/index';

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={homeStack.homeScreen} component={HomeScreen} />
      <Stack.Screen name={homeStack.eventScreen} component={EventList} />
      <Stack.Screen name={homeStack.notifiScreen} component={NotifiList} />
      <Stack.Screen name={homeStack.settingScreen} component={settingScreen} />
    </Stack.Navigator>
  );
}
