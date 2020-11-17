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
import {QuickView, Body, Container} from '@src/components';
import {connect} from 'react-redux';
import NavigationService from '@utils/navigation';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-elements';

const {width, height} = Dimensions.get('window');
interface Props {}
interface State {
  fullName: string;
  phoneNumber: string;
  password: string;
}
class RegisterScreen extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      fullName: '',
      phoneNumber: '',
      password: '',
    };
  }
  componentDidMount() {}

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'height' : 'height'}
        style={{flex: 1}}>
        <Container scroll>
          <LinearGradient
            style={{width: width, height: height}}
            colors={['#FBD786', '#F7797D']}
            start={{x: 0.9, y: 0.1}}
            end={{x: 1, y: 0.7}}>
            <SafeAreaView>
              <Body>
                <QuickView
                  backgroundColor="#FFFFFF"
                  center
                  width={100}
                  height={100}
                  marginTop={20}
                  borderRadius={100}>
                  <Image
                    style={{width: 100, height: 100}}
                    source={require('@src/assets/images/logo.png')}
                  />
                </QuickView>
                <QuickView
                  width={width - 30}
                  alignSelf="center"
                  height={500}
                  borderRadius={20}
                  marginTop={30}
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
                    ĐĂNG KÝ
                  </Text>
                  <Text style={{marginBottom: 10, marginLeft: 20}}>
                    Họ và tên:
                  </Text>
                  <TextInput
                    placeholder="Nhập họ và tên..."
                    keyboardType="default"
                    placeholderTextColor="#CCD2E0"
                    onChangeText={(text: any) => {
                      this.setState({
                        fullName: text,
                      });
                    }}
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
                  />
                  <Text style={{marginVertical: 10, marginLeft: 20}}>
                    Số điện thoại:
                  </Text>
                  <TextInput
                    placeholder="Nhập số điện thoại..."
                    keyboardType="numeric"
                    placeholderTextColor="#CCD2E0"
                    onChangeText={(text: any) => {
                      this.setState({
                        phoneNumber: text,
                      });
                    }}
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
                  />
                  <Text
                    style={{marginBottom: 10, marginLeft: 20, marginTop: 10}}>
                    Mật khẩu:
                  </Text>
                  <TextInput
                    placeholder="Nhập mật khẩu..."
                    placeholderTextColor="#CCD2E0"
                    onChangeText={(text: any) => {
                      this.setState({
                        password: text,
                      });
                    }}
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
                    secureTextEntry={true}
                  />
                  <Text
                    style={{marginBottom: 10, marginLeft: 20, marginTop: 10}}>
                    Nhập lại mật khẩu:
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
                    secureTextEntry={true}
                  />
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
                        ĐĂNG KÝ
                      </Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </QuickView>
              </Body>
            </SafeAreaView>
          </LinearGradient>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
