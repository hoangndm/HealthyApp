/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import {Container, QuickView, Body} from '@src/components';
import NavigationService from '@utils/navigation';
import {Icon} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {logout} from '@screens/Auth/contents/Login/redux/slice';
import rootStack from '@screens/routes';
import settingStack from '../routes';
const {width, height} = Dimensions.get('window');

interface Props {
  logout: any;
}

interface State {}
class SettingScreen extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  renderItem = ({item, index}: {item: any; index: any}) => {
    const {logout} = this.props;
    return (
      <QuickView
        key={index}
        width={width / 2 - 40}
        center
        height={100}
        backgroundColor="#FFFFFF"
        margin={5}
        borderRadius={10}>
        <TouchableOpacity
          onPress={() => {
            item.name === 'Đăng xuất'
              ? logout()
              : NavigationService.navigate(rootStack.settingStack, {
                  screen: settingStack.profile,
                });
          }}>
          <Icon color="#F7797D" size={35} name={item.icon} />
          <Text style={{fontWeight: 'bold', marginTop: 10}}>{item.name}</Text>
        </TouchableOpacity>
      </QuickView>
    );
  };
  render() {
    const data = [
      {
        name: 'Thông tin cá nhân',
        image: require('@src/assets/images/accountMore.png'),
        icon: 'account-circle',
      },
      {
        name: 'Đổi mật khẩu',
        image: require('@src/assets/images/lockMore.png'),
        icon: 'account-circle',
      },
      {
        name: 'Đăng xuất',
        image: require('@src/assets/images/logout.png'),
        icon: 'account-circle',
      },
    ];
    return (
      <Container backgroundColor="#FFFFFF">
        <QuickView width="100%" backgroundColor="#FBD786" height={90}>
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
                marginLeft: 70,
                flex: 6,
                color: '#13235B',
                fontWeight: 'bold',
                fontSize: 25,
              }}>
              Cài đặt
            </Text>
          </QuickView>
        </QuickView>
        <Body type="full-width">
          <LinearGradient
            style={{width: width, height: height}}
            colors={['#FBD786', '#F7797D']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1.5}}>
            <QuickView paddingHorizontal={20} center>
              <FlatList
                data={data}
                renderItem={this.renderItem}
                numColumns={2}
                keyExtractor={(item, index) => index.toString()}
              />
            </QuickView>
          </LinearGradient>
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

export default connect(mapStateToProps, mapDispatchToProps)(SettingScreen);
