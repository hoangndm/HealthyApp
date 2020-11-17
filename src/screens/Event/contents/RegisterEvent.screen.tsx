/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import {Container, QuickView, Body} from '@src/components';
import NavigationService from '@utils/navigation';
import {Icon, CheckBox} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
const {width, height} = Dimensions.get('window');

interface Props {
  params: any;
  route: any;
}

interface State {
  checked: boolean;
}
class RegisterEvent extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  render() {
    const {params} = this.props.route;
    return (
      <Container backgroundColor="#FFFFFF">
        <QuickView
          width="100%"
          backgroundColor="#FBD786"
          height={90}
          style={{borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
          <QuickView row marginTop={50}>
            <TouchableOpacity
              onPress={() => {
                NavigationService.goBack();
              }}
              style={{
                flex: 2,
                paddingLeft: 15,
                marginTop: 5,
                alignItems: 'flex-start',
              }}>
              <Icon
                name="keyboard-backspace"
                type="material"
                color="#000"
                size={25}
              />
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 60,
                flex: 6,
                color: '#13235B',
                fontWeight: 'bold',
                fontSize: 25,
              }}>
              Sự kiện
            </Text>
          </QuickView>
        </QuickView>
        <Body type="full-width">
          <QuickView paddingHorizontal={20}>
            <Image
              style={{
                width: width - 20,
                height: 200,
                alignSelf: 'center',
                borderRadius: 10,
              }}
              source={{uri: params.image}}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#FF0000',
                marginVertical: 10,
              }}>
              {params.title}
            </Text>
            <Text style={{fontSize: 16}}>{params.description}</Text>
          </QuickView>
        </Body>
        <TouchableOpacity>
          <QuickView
            width="50%"
            height={30}
            center
            marginBottom={50}
            backgroundColor="#FFFFFF"
            borderRadius={10}>
            <Text style={{fontWeight: 'bold'}}>Xác nhận đăng kí</Text>
          </QuickView>
        </TouchableOpacity>
      </Container>
    );
  }
}
export default RegisterEvent;
