/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {Container, Body, QuickView} from '@src/components';
import {
  Text,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList as RNFlastList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import rootStack from '@screens/routes';
import NavigationService from '@utils/navigation';
import homeStack from '../routes';
import {connect} from 'react-redux';
import {logout} from '@screens/Auth/contents/Login/redux/slice';
import {RNCamera} from 'react-native-camera';
import {Global} from '@src/core/utils/appHelper';
const {width, height} = Dimensions.get('window');

interface Props {
  logout: any;
  dataLG: any;
}
interface State {
  showCamera: boolean;
  camera: any;
}
class HomeScreen extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      showCamera: false,
      camera: {
        type: RNCamera.Constants.Type.back,
        flashMode: RNCamera.Constants.FlashMode.auto,
      },
    };
  }
  renderItem = ({item, index}: {item: any; index: number}) => (
    <TouchableOpacity
      key={index}
      onPress={() => {
        NavigationService.navigate(rootStack.homeStack, {screen: item.screen});
      }}>
      <QuickView width={width / 2 - 20} height={150} center>
        <Image style={{width: 70, height: 70}} source={item.image} />
        <Text style={{marginTop: 10}}>{item.name}</Text>
      </QuickView>
    </TouchableOpacity>
  );
  render() {
    const data = [
      {
        name: 'Thông báo',
        image: require('@src/assets/images/notification.png'),
        screen: homeStack.notifiScreen,
      },
      {
        name: 'Cài đặt',
        image: require('@src/assets/images/settings.png'),
        screen: homeStack.settingScreen,
      },
      {
        name: 'Sự kiện',
        image: require('@src/assets/images/calendar.png'),
        screen: homeStack.eventScreen,
      },
      {
        name: 'Lịch sử',
        image: require('@src/assets/images/clock.png'),
      },
    ];
    const {logout} = this.props;
    const {showCamera} = this.state;
    console.log(Global.user);
    return (
      <Container>
        <LinearGradient
          style={{width: width, height: height / 2 - 90, borderRadius: 10}}
          colors={['#FBD786', '#F7797D']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1.5}}>
          {/* {showCamera ? (
            <RNCamera
              onBarCodeRead={() => console.log('ok')}
              type={this.state.camera.type}
              flashMode={this.state.camera.flashMode}
              // mirrorImage={false}
              captureAudio={false}
              ref="camera"
            />
          ) : (
            false
          )} */}
          <SafeAreaView>
            <QuickView paddingLeft={50} marginTop={30} row>
              <QuickView>
                <Image
                  style={{width: 70, height: 70, borderRadius: 70}}
                  source={{
                    uri: Global.user?.avatar,
                  }}
                />
              </QuickView>
              <QuickView marginLeft={20} marginTop={10}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                  {Global.user?.fullName}
                </Text>
                <Text
                  style={{fontSize: 16, color: '#424242', marginVertical: 5}}>
                  {Global.user?.phoneNumber}
                </Text>
              </QuickView>
            </QuickView>
            <QuickView row paddingHorizontal={20} marginTop={20}>
              <QuickView flex={2} center>
                <Text
                  style={{fontWeight: 'bold', color: '#FFFFFF', fontSize: 60}}>
                  {Global.user?.typeBlood || 'X'}
                </Text>
                <Text
                  style={{textAlign: 'center', marginTop: 10, fontSize: 16}}>
                  Nhóm máu
                </Text>
              </QuickView>
              <QuickView flex={2} center>
                <Text
                  style={{fontWeight: 'bold', color: '#FFFFFF', fontSize: 60}}>
                  03
                </Text>
                <Text
                  style={{textAlign: 'center', marginTop: 10, fontSize: 16}}>
                  Số lần hiến máu
                </Text>
              </QuickView>
              <QuickView flex={2} center>
                <TouchableOpacity onPress={() => logout()}>
                  <Icon
                    style={{marginTop: 10}}
                    name="blood-drop"
                    type="fontisto"
                    color="#FFFFFF"
                    size={50}
                  />
                  <Text
                    style={{textAlign: 'center', marginTop: 22, fontSize: 16}}>
                    Sẵn sàng
                  </Text>
                </TouchableOpacity>
              </QuickView>
            </QuickView>
          </SafeAreaView>
        </LinearGradient>
        <Body backgroundColor="#FFFFFF">
          <TouchableOpacity onPress={() => this.setState({showCamera: true})}>
            <QuickView
              style={{
                shadowColor: 'rgba(0,0,0,0.2)',
                shadowOffset: {
                  width: 3,
                  height: 2,
                },
                shadowOpacity: 0.46,
                shadowRadius: 11.14,
                elevation: 2.5,
              }}
              width={130}
              height={130}
              borderRadius={130}
              top={-70}
              center
              backgroundColor="#FFFFFF">
              <Icon name="qrcode-scan" type="material-community" size={60} />
            </QuickView>
          </TouchableOpacity>
          <QuickView marginTop={-60}>
            <RNFlastList
              renderItem={this.renderItem}
              data={data}
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
            />
          </QuickView>
        </Body>
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => ({
  dataLG: state.auth.login.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
