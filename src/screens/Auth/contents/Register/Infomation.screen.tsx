/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
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
import NavigationService from '@utils/navigation';

import {QuickView, Container, Body} from '@src/components';
import authStack from '@screens/Auth/routes';

const {width, height} = Dimensions.get('window');

export class InfomationScreen extends Component {
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
                More Information
              </Text>
              <Text
                style={{textAlign: 'center', color: '#555555', fontSize: 16}}>
                We just need a little more information to complete your avatar
              </Text>
              <Text
                style={{
                  marginBottom: 10,
                  marginTop: 50,
                  fontSize: 17,
                }}>
                Height:
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
                  marginTop: 20,
                  fontSize: 17,
                }}>
                Weight:
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
                  marginTop: 20,
                  fontSize: 17,
                }}>
                Gender at Birth:
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
                  marginTop: 20,
                  fontSize: 17,
                }}>
                Date of Birth:
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
              Continue
            </Text>
          </TouchableOpacity>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}

export default InfomationScreen;
