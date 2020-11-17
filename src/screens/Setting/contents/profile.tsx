/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import {Container, QuickView, Body} from '@src/components';
import NavigationService from '@utils/navigation';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
const {width, height} = Dimensions.get('window');

interface Props {}

interface State {}
class ProfileScreen extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
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
                marginLeft: 0,
                flex: 6,
                color: '#13235B',
                fontWeight: 'bold',
                fontSize: 25,
              }}>
              Thông tin cá nhân
            </Text>
          </QuickView>
        </QuickView>
        <Body type="full-width">
          <LinearGradient
            style={{width: width, height: height}}
            colors={['#FFFFFF', '#FFFFFF']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1.5}}>
            <QuickView
              width={width - 30}
              paddingVertical={10}
              borderRadius={10}
              paddingHorizontal={20}
              backgroundColor="#FFFFFF"
              alignSelf="center">
              <Image
                style={{
                  width: 150,
                  height: 150,
                  borderRadius: 10,
                  marginTop: 20,
                }}
                source={require('@src/assets/images/image.jpg')}
              />
              <Text style={{marginVertical: 10}}>
                Tên: <Text style={{fontWeight: 'bold'}}>Quang Chó</Text>
              </Text>
              <Text style={{marginVertical: 10}}>
                Ngày sinh: <Text style={{fontWeight: 'bold'}}>Quang Chó</Text>
              </Text>
              <Text style={{marginVertical: 10}}>
                Số điện thoại:{' '}
                <Text style={{fontWeight: 'bold'}}>Quang Chó</Text>
              </Text>
              <Text style={{marginVertical: 10}}>
                Nhóm máu: <Text style={{fontWeight: 'bold'}}>Quang Chó</Text>
              </Text>
              <Text style={{marginVertical: 10}}>
                Lượt hiến gần nhất:{' '}
                <Text style={{fontWeight: 'bold'}}>Quang Chó</Text>
              </Text>
            </QuickView>
          </LinearGradient>
        </Body>
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
