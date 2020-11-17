import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import notificationStack from './routes';
import NotificationList from './contents/NotificationList.screen';

const Stack = createStackNavigator();

export default function NotificationStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name={notificationStack.listNotifi}
        component={NotificationList}
      />
    </Stack.Navigator>
  );
}
