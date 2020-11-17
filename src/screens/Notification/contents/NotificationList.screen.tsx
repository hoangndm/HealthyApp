/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {Text, TouchableOpacity, Dimensions, Image} from 'react-native';
import {Container, QuickView, Body, Flatlist} from '@src/components';
import NavigationService from '@utils/navigation';
import {Icon, CheckBox} from 'react-native-elements';
import {getList} from '../redux/slice';
import {getListNotiSelector} from '../redux/selectors';
import moment from 'moment';

import {connect} from 'react-redux';
const {width, height} = Dimensions.get('window');

interface Props {
  params: any;
  route: any;
  data: any;
  fetchData: any;
  loading: boolean;
  total: number;
  resetData: any;
  getNextPage: any;
}

interface State {
  checked: boolean;
}
class NotificationList extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  componentDidMount() {
    const {fetchData} = this.props;
    fetchData();
  }

  renderItem = ({item, index}: {item: any; index: any}) => (
    <QuickView paddingHorizontal={20} key={index}>
      <QuickView
        width={width - 40}
        padding={10}
        borderRadius={10}
        backgroundColor="#FFFFFF"
        style={{
          shadowColor: 'rgba(0,0,0,0.4)',
          shadowOffset: {
            width: 3,
            height: 7,
          },
          shadowOpacity: 0.46,
          shadowRadius: 11.14,
          elevation: 2.5,
          marginVertical: 10,
        }}>
        <QuickView row marginTop={10}>
          <Icon name="time" type="ionicon" color="#F7797D" />
          <Text
            style={{
              marginTop: 5,
              fontSize: 16,
              marginLeft: 10,
              fontWeight: 'bold',
            }}>
            {moment(item?.date).format('hh:mm - DD/MM/YYYY')}
          </Text>
        </QuickView>
        <QuickView row marginTop={5}>
          <Icon name="location-pin" type="entypo" color="#F7797D" />
          <Text style={{marginTop: 5, fontSize: 16, marginLeft: 10}}>
            {item?.address + ',' + item?.city}
          </Text>
        </QuickView>
        <Text style={{marginTop: 5, fontSize: 14}}>{item?.description}</Text>
      </QuickView>
    </QuickView>
  );
  render() {
    const {data, loading, total, getNextPage, resetData} = this.props;
    console.log('alooooooo', data);

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
                marginLeft: 50,
                flex: 6,
                color: '#13235B',
                fontWeight: 'bold',
                fontSize: 25,
              }}>
              Thông báo
            </Text>
          </QuickView>
        </QuickView>
        <Body type="full-width">
          <Flatlist
            data={data}
            loading={loading}
            total={total}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            loadMore={getNextPage}
            refreshData={resetData}
          />
        </Body>
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => ({
  data: getListNotiSelector(state),
  loading: state.noti.loading,
  total: state.noti.total,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchData: () => dispatch(getList({isNextPage: false})),
  getNextPage: () => dispatch(getList({isNextPage: true})),
  resetData: () => dispatch(getList({resetData: true})),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationList);
