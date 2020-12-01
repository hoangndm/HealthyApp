import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import homeStack from './routes';
import HomeScreen from './contents/Home.screen';
import FoodScreen from '../Food/contents/index.screen';
import WorkoutScreen from '../Workout/contents/Workout.scren';
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={homeStack.homeScreen} component={HomeScreen} />
      <Stack.Screen name={homeStack.foodScreen} component={FoodScreen} />
      <Stack.Screen name={homeStack.workoutScreen} component={WorkoutScreen} />
    </Stack.Navigator>
  );
}
