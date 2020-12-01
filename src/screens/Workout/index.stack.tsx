import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import workoutStack from './routes';
import WorkoutScreen from './contents/Workout.scren';
import WorkoutPlanScreen from './contents/WorkoutPlan.screen';

const Stack = createStackNavigator();

export default function WorkoutStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={workoutStack.listScreen} component={WorkoutScreen} />
      <Stack.Screen
        name={workoutStack.workoutPlan}
        component={WorkoutPlanScreen}
      />
    </Stack.Navigator>
  );
}
