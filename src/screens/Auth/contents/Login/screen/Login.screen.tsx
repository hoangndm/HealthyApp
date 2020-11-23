/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {QuickView, Container, Body} from '@src/components';
import {connect} from 'react-redux';
import NavigationService from '@utils/navigation';
import LinearGradient from 'react-native-linear-gradient';
import authStack from '../../../routes';
import {Login} from '../redux/slice';

const {width, height} = Dimensions.get('window');
interface Props {
  screenLogin: any;
  auth: any;
  loading: boolean;
  error: any;
}
interface State {
  phoneNumber: string;
  password: string;
}
class LoginScreen extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      phoneNumber: '',
      password: '',
    };
  }

  handleDataLogin = () => {
    const {phoneNumber, password} = this.state;
    const {screenLogin} = this.props;
    const data = {
      phoneNumber: phoneNumber,
      password: password,
    };
    screenLogin(data);
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <Container>
          <SafeAreaView />
          <Body>
            <QuickView
              width={width - 10}
              alignSelf="center"
              borderRadius={20}
              marginTop={50}
              paddingHorizontal={20}
              backgroundColor="#FFFFFF">
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                  marginVertical: 10,
                  marginTop: 40,
                  color: '#222222',
                }}>
                Login
              </Text>
              <Text
                style={{textAlign: 'center', color: '#555555', fontSize: 16}}>
                Continue to Heart Health
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  marginTop: 50,
                  fontSize: 17,
                }}>
                Username:
              </Text>
              <TextInput
                placeholder="Type username..."
                keyboardType="numeric"
                placeholderTextColor="#cccccc"
                style={{
                  width: '100%',
                  height: 50,
                  color: '#000',
                  paddingVertical: 3,
                  backgroundColor: '#f2f2f2',
                  borderRadius: 10,
                  alignSelf: 'center',
                  paddingHorizontal: 10,
                  fontSize: 14,
                }}
                onChangeText={(text) => this.setState({phoneNumber: text})}
              />
              <Text
                style={{
                  marginBottom: 10,
                  marginTop: 40,
                  fontSize: 17,
                }}>
                Password:
              </Text>
              <TextInput
                placeholder="Type password..."
                placeholderTextColor="#CCD2E0"
                style={{
                  width: '100%',
                  height: 50,
                  color: '#000',
                  paddingVertical: 3,
                  backgroundColor: '#f2f2f2',
                  borderRadius: 10,
                  alignSelf: 'center',
                  paddingHorizontal: 10,
                  fontSize: 14,
                }}
                onChangeText={(text) => this.setState({password: text})}
                secureTextEntry={true}
              />
              <QuickView row paddingHorizontal={20} marginTop={35} center>
                <Text style={{fontSize: 16, color: '#555555'}}>
                  Don't have an account,{' '}
                </Text>
                <QuickView alignItems="flex-start">
                  <TouchableOpacity
                    onPress={() =>
                      NavigationService.navigate(authStack.registerScreen)
                    }>
                    <Text
                      style={{
                        color: '#FC423D',
                        fontSize: 16,
                        fontWeight: 'bold',
                      }}>
                      Register
                    </Text>
                  </TouchableOpacity>
                </QuickView>
              </QuickView>
            </QuickView>
          </Body>
          <TouchableOpacity
            onPress={this.handleDataLogin}
            style={{
              position: 'absolute',
              bottom: 30,
              width: width - 50,
              height: 50,
              alignSelf: 'center',
              alignItems: 'center',
              backgroundColor: '#eb2025',
              borderRadius: 10,
            }}>
            <Text
              style={{
                marginTop: 15,
                color: '#FFFFFF',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = (state: any) => ({
  auth: state.auth.login.data,
  loading: state.auth.login.loading,
  error: state.auth.login.error,
});

const mapDispatchToProps = (dispatch: any) => ({
  screenLogin: (data: any) => dispatch(Login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
