import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import dogStack from './routes';
import ListDogScreen from './contents/ListDogScreen';
import DetailDogScreen from './contents/DetailDogScreen';

const Stack = createStackNavigator();

export default function dogsStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={dogStack.listDogScreen} component={ListDogScreen} />
      <Stack.Screen
        name={dogStack.detailDogScreen}
        component={DetailDogScreen}
      />
    </Stack.Navigator>
  );
}
