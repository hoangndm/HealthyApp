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
import {QuickView, Container} from '@src/components';
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
          <LinearGradient
            style={{width: width, height: height, flex: 1}}
            colors={['#FBD786', '#F7797D']}
            start={{x: 0.9, y: 0.1}}
            end={{x: 1, y: 0.7}}>
            <SafeAreaView>
              <QuickView
                backgroundColor="#FFFFFF"
                center
                width={100}
                height={100}
                marginTop={50}
                borderRadius={100}>
                <Image
                  style={{width: 100, height: 100}}
                  source={require('@src/assets/images/logo.png')}
                />
              </QuickView>
              <QuickView
                width={width - 30}
                alignSelf="center"
                height={380}
                borderRadius={20}
                marginTop={50}
                paddingHorizontal={20}
                backgroundColor="#FFFFFF">
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 16,
                    marginVertical: 20,
                    marginTop: 40,
                  }}>
                  ĐĂNG NHẬP
                </Text>
                <Text style={{marginBottom: 10, marginLeft: 20}}>
                  Số điện thoại:
                </Text>
                <TextInput
                  placeholder="Nhập số điện thoại..."
                  keyboardType="numeric"
                  placeholderTextColor="#CCD2E0"
                  style={{
                    width: '90%',
                    height: 40,
                    color: '#000',
                    paddingVertical: 3,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignSelf: 'center',
                    paddingHorizontal: 10,
                    fontSize: 14,
                    borderColor: 'rgba(216, 58, 58, 0.38)',
                    borderWidth: 1,
                  }}
                  onChangeText={(text) => this.setState({phoneNumber: text})}
                />
                <Text style={{marginBottom: 10, marginLeft: 20, marginTop: 20}}>
                  Mật khẩu:
                </Text>
                <TextInput
                  placeholder="Nhập mật khẩu..."
                  placeholderTextColor="#CCD2E0"
                  style={{
                    width: '90%',
                    height: 40,
                    color: '#000',
                    paddingVertical: 3,
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignSelf: 'center',
                    paddingHorizontal: 10,
                    fontSize: 14,
                    borderColor: 'rgba(216, 58, 58, 0.38)',
                    borderWidth: 1,
                  }}
                  onChangeText={(text) => this.setState({password: text})}
                  secureTextEntry={true}
                />
                <QuickView row paddingHorizontal={20} marginTop={15}>
                  <QuickView width="50%" alignItems="flex-start">
                    <TouchableOpacity
                      onPress={() =>
                        NavigationService.navigate(authStack.registerScreen)
                      }>
                      <Text style={{color: '#FC423D'}}>Đăng ký</Text>
                    </TouchableOpacity>
                  </QuickView>
                  <QuickView width="50%" alignItems="flex-end">
                    <TouchableOpacity>
                      <Text style={{color: '#969696'}}>Quên mật khẩu</Text>
                    </TouchableOpacity>
                  </QuickView>
                </QuickView>
                <LinearGradient
                  style={{
                    width: 160,
                    alignItems: 'center',
                    alignSelf: 'center',
                    borderRadius: 30,
                    marginTop: 25,
                  }}
                  colors={['#FBD786', '#F7797D']}
                  start={{x: 1, y: 0}}
                  end={{x: 0.1, y: 0}}>
                  <TouchableOpacity
                    onPress={this.handleDataLogin}
                    style={{
                      width: 160,
                      height: 35,
                      alignSelf: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        marginTop: 8,
                        color: '#FFFFFF',
                        fontWeight: 'bold',
                      }}>
                      ĐĂNG NHẬP
                    </Text>
                  </TouchableOpacity>
                </LinearGradient>
              </QuickView>
            </SafeAreaView>
          </LinearGradient>
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
