import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import eventStack from './routes';
import ListEvent from './contents/ListEvents.screen';
import RegisterEvent from './contents/RegisterEvent.screen';

const Stack = createStackNavigator();

export default function EventStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={eventStack.listEvent} component={ListEvent} />
      <Stack.Screen name={eventStack.registerEvent} component={RegisterEvent} />
    </Stack.Navigator>
  );
}
