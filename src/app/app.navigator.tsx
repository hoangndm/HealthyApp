import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationService from '../core/utils/navigation';
import RootStack from '@screens/index.navigator';
import {connect} from 'react-redux';
import rootStack from '@screens/routes';
import authStack from '@screens/Auth/routes';
import AuthStack from '@screens/Auth/index.stack';
interface Props {
  isToken?: any;
}
type State = {};

const Stack = createStackNavigator();

class AppNavigator extends Component<Props, State> {
  initRender = () => {
    const {isToken} = this.props;
    if (isToken) {
      return (
        <Stack.Screen
          name={rootStack.homeStack}
          component={RootStack}
          options={{
            headerShown: false,
          }}
        />
      );
    } else {
      return (
        <Stack.Screen
          name={authStack.loginScreen}
          component={AuthStack}
          options={{
            headerShown: false,
          }}
        />
      );
    }
  };
  render() {
    return (
      <NavigationContainer ref={NavigationService.navigationRef}>
        <Stack.Navigator>
          {this.initRender()}
          {/* <Stack.Screen
            name="rootStack"
            component={RootStack}
            options={{
              headerShown: false,
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const mapStateToProps = (state: any) => ({
  isToken: state?.auth?.login?.data?.token,
});

export default connect(mapStateToProps, null)(AppNavigator);
