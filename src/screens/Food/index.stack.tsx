import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import foodStack from './routes';
import ListFoodScreen from '../Food/contents/index.screen';
import FoodDetail from './contents/FoodDeail.screen';

const Stack = createStackNavigator();

export default function ListFoodStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={foodStack.listScreen} component={ListFoodScreen} />
      <Stack.Screen name={foodStack.detailScreen} component={FoodDetail} />
      {/* <Stack.Screen name={homeStack.notifiScreen} component={NotifiList} /> */}
    </Stack.Navigator>
  );
}
