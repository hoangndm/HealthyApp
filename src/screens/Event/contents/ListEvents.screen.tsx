/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import {Container, Body, QuickView, Flatlist} from '@src/components';
import {Icon, Card} from 'react-native-elements';
import NavigationService from '@utils/navigation';
import eventStack from '../routes';
import rootStack from '@screens/routes';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {getListEventSelector} from './redux/selectors';
import {getList} from './redux/slice';

const {width, height} = Dimensions.get('window');

interface Props {
  data: any;
  fetchData: any;
  loading: boolean;
  total: number;
  resetData: any;
  getNextPage: any;
}

class ListEvent extends PureComponent<Props> {
  componentDidMount() {
    const {fetchData} = this.props;
    fetchData();
  }
  renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() =>
          NavigationService.navigate(rootStack.eventStack, {
            screen: eventStack.registerEvent,
            params: item,
          })
        }>
        <QuickView
          marginTop={20}
          backgroundColor="#FFFFFF"
          borderRadius={10}
          width={width - 40}
          alignSelf="center"
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
          <QuickView>
            <QuickView center marginBottom={20}>
              <Image
                style={{
                  width: width - 40,
                  height: 250,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                }}
                source={require('../../../assets/images/image.jpg')}
              />
            </QuickView>
            <QuickView row>
              <QuickView width="30%" center>
                <QuickView
                  width="80%"
                  height={100}
                  backgroundColor="#F9A281"
                  borderRadius={10}>
                  <QuickView
                    width="100%"
                    backgroundColor="#F9CA84"
                    height={32}
                    borderRadius={10}
                    center>
                    <Text style={{fontWeight: 'bold', color: '#FFFFFF'}}>
                      Tháng 7
                    </Text>
                  </QuickView>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 30,
                      fontWeight: 'bold',
                      marginTop: 5,
                    }}>
                    20
                  </Text>
                  <QuickView
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#CCD2E0',
                      marginBottom: 4,
                    }}
                    width="100%"
                  />
                  <Text style={{textAlign: 'center'}}>7:00</Text>
                </QuickView>
              </QuickView>
              <QuickView width="70%">
                <Text
                  style={{fontSize: 18, color: '#FF0000', fontWeight: 'bold'}}>
                  {item.title}
                </Text>
                <Text style={{marginVertical: 10, fontSize: 14}}>
                  {item.description}
                </Text>
                {/* <QuickView row marginTop={10}>
                  <Icon
                    size={15}
                    name="map-marker"
                    type="material-community"
                    color="#000"
                  />
                  <Text>
                    {item.location}
                  </Text>
                </QuickView> */}
              </QuickView>
            </QuickView>
            <TouchableOpacity
              style={{
                width: '95%',
                alignItems: 'center',
                backgroundColor: '#F8957F',
                height: 40,
                alignContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginTop: 8,
                }}>
                Quan Tâm
              </Text>
            </TouchableOpacity>
          </QuickView>
        </QuickView>
      </TouchableOpacity>
    );
  };
  render() {
    const {data, loading, total, getNextPage, resetData} = this.props;
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
          <Flatlist
            style={{marginBottom: 0}}
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
  data: getListEventSelector(state),
  loading: state.event.events.loading,
  total: state.event.events.total,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchData: () => dispatch(getList({isNextPage: false})),
  getNextPage: () => dispatch(getList({isNextPage: true})),
  resetData: () => dispatch(getList({resetData: true})),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListEvent);
