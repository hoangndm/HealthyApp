import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {fadeAnimation} from '@utils/navigation';
import rootStack from './routes';
import authStack from './Auth/index.stack';
import homeStack from './Home/index.stack';
const Stack = createStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...fadeAnimation,
      }}>
      <Stack.Screen name={rootStack.homeStack} component={homeStack} />
      <Stack.Screen name={rootStack.authStack} component={authStack} />
    </Stack.Navigator>
  );
}
export default RootStack;
