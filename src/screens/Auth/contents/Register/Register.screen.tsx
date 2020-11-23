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
        <Container>
          <SafeAreaView />
          <Body scroll>
            <QuickView
              width={width - 10}
              alignSelf="center"
              height={500}
              borderRadius={20}
              marginTop={30}
              backgroundColor="#FFFFFF">
              <Text
                style={{
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginVertical: 10,
                  marginTop: 40,
                  color: '#222222',
                }}>
                Register your Account
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: '#555555',
                }}>
                Your data is 100% private and secure
              </Text>
              <QuickView row>
                <QuickView width="50%">
                  <Text
                    style={{
                      marginBottom: 10,
                      marginLeft: 20,
                      marginTop: 40,
                      fontSize: 16,
                    }}>
                    First Name:
                  </Text>
                  <TextInput
                    placeholder="Type First Name..."
                    keyboardType="default"
                    placeholderTextColor="#cccccc"
                    onChangeText={(text: any) => {
                      this.setState({
                        fullName: text,
                      });
                    }}
                    style={{
                      width: '80%',
                      height: 50,
                      color: '#000',
                      paddingVertical: 3,
                      backgroundColor: '#f2f2f2',
                      borderRadius: 10,
                      alignSelf: 'center',
                      paddingHorizontal: 10,
                      fontSize: 14,
                    }}
                  />
                </QuickView>
                <QuickView width="50%">
                  <Text
                    style={{marginBottom: 10, marginLeft: 20, marginTop: 40}}>
                    Last Name:
                  </Text>
                  <TextInput
                    placeholder="Type Last Name..."
                    keyboardType="default"
                    placeholderTextColor="#cccccc"
                    onChangeText={(text: any) => {
                      this.setState({
                        fullName: text,
                      });
                    }}
                    style={{
                      width: '80%',
                      height: 50,
                      color: '#000',
                      paddingVertical: 3,
                      backgroundColor: '#f2f2f2',
                      borderRadius: 10,
                      alignSelf: 'center',
                      paddingHorizontal: 10,
                      fontSize: 14,
                    }}
                  />
                </QuickView>
              </QuickView>
              <Text
                style={{
                  marginVertical: 10,
                  marginLeft: 20,
                  fontSize: 16,
                  marginTop: 30,
                }}>
                Email Address
              </Text>
              <TextInput
                placeholder="Type Email..."
                keyboardType="default"
                placeholderTextColor="#cccccc"
                onChangeText={(text: any) => {
                  this.setState({
                    phoneNumber: text,
                  });
                }}
                style={{
                  width: '90%',
                  height: 50,
                  color: '#000',
                  paddingVertical: 3,
                  backgroundColor: '#f2f2f2',
                  borderRadius: 10,
                  alignSelf: 'center',
                  paddingHorizontal: 10,
                  fontSize: 14,
                }}
              />
              <Text
                style={{
                  marginVertical: 10,
                  marginLeft: 20,
                  marginTop: 30,
                  fontSize: 16,
                }}>
                Phone Number
              </Text>
              <TextInput
                placeholder="Type Phone Number..."
                keyboardType="numeric"
                placeholderTextColor="#cccccc"
                onChangeText={(text: any) => {
                  this.setState({
                    phoneNumber: text,
                  });
                }}
                style={{
                  width: '90%',
                  height: 50,
                  color: '#000',
                  paddingVertical: 3,
                  backgroundColor: '#f2f2f2',
                  borderRadius: 10,
                  alignSelf: 'center',
                  paddingHorizontal: 10,
                  fontSize: 14,
                }}
              />
              <Text
                style={{
                  marginBottom: 10,
                  marginLeft: 20,
                  marginTop: 30,
                  fontSize: 16,
                }}>
                Mật khẩu:
              </Text>
              <TextInput
                placeholder="Type Password..."
                placeholderTextColor="#cccccc"
                onChangeText={(text: any) => {
                  this.setState({
                    password: text,
                  });
                }}
                style={{
                  width: '90%',
                  height: 50,
                  color: '#000',
                  paddingVertical: 3,
                  backgroundColor: '#f2f2f2',
                  borderRadius: 10,
                  alignSelf: 'center',
                  paddingHorizontal: 10,
                  fontSize: 14,
                }}
                secureTextEntry={true}
              />
              <Text
                style={{
                  marginBottom: 10,
                  marginLeft: 20,
                  marginTop: 30,
                  fontSize: 16,
                }}>
                Nhập lại mật khẩu:
              </Text>
              <TextInput
                placeholder="Type Password..."
                placeholderTextColor="#cccccc"
                style={{
                  width: '90%',
                  height: 50,
                  color: '#000',
                  paddingVertical: 3,
                  backgroundColor: '#f2f2f2',
                  borderRadius: 10,
                  alignSelf: 'center',
                  paddingHorizontal: 10,
                  fontSize: 14,
                }}
                secureTextEntry={true}
              />
            </QuickView>
          </Body>
          <TouchableOpacity
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
              Create My Account
            </Text>
          </TouchableOpacity>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
