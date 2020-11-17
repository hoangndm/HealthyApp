import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import settingStack from './routes';
import SettingScreen from './contents/index';
import ProfileScreen from './contents/profile';

const Stack = createStackNavigator();

export default function SettingStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={settingStack.setting} component={SettingScreen} />
      <Stack.Screen name={settingStack.profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
}
