import React from 'react';

import {StatusBar} from 'react-native';
import {ThemeProvider} from 'react-native-elements';
import AppNavigator from './app.navigator';
import {connect} from 'react-redux';
import {Global} from '@src/core/utils/appHelper';

interface Theme {}
type AppProps = {
  loginSelectorData: any;
};

class AppContainer extends React.PureComponent<AppProps> {
  constructor(props: AppProps) {
    super(props);
    const {loginSelectorData} = this.props;
    if (loginSelectorData?.token) {
      Global.user = loginSelectorData;
      Global.token = loginSelectorData?.token;
    }
  }
  render() {
    return (
      <ThemeProvider>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: any) => ({
  loginSelectorData: state?.auth?.login?.data,
});

export default connect(mapStateToProps, null)(AppContainer);
