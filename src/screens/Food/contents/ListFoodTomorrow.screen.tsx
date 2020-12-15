/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {QuickView, Body, Container} from '@src/components';
import {Icon} from 'react-native-elements';
import {Console} from 'console';
import NavigationService from '@utils/navigation';
import rootStack from '@screens/routes';
import foodStack from '../routes';
import {connect} from 'react-redux';
import {getListEventSelector} from '../redux/selectors';
import moment from 'moment';
const {width, height} = Dimensions.get('window');
interface Props {
  route?: any;
  data: any;
  loading: boolean;
  total: number;
}

class ListFood extends Component<Props> {
  renderItem = ({item, index}: {item: any; index: number}) => {
    if (index % 3 === 0) {
      return (
        <QuickView
          key={index}
          borderRadius={10}
          width={width - 40}
          marginVertical={10}
          backgroundColor="#FFF"
          style={{
            elevation: 1,
            paddingBottom: 20,
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
          }}>
          <TouchableOpacity
            onPress={() =>
              NavigationService.navigate(rootStack.foodStack, {
                screen: foodStack.detailScreen,
                params: item,
              })
            }>
            <QuickView
              position="absolute"
              top={10}
              paddingVertical={3}
              paddingHorizontal={10}
              backgroundColor={
                item?.status === 0
                  ? 'rgb(158, 29, 83)'
                  : item?.status === 1
                  ? '#f2ac30'
                  : 'rgb(66, 132, 226)'
              }
              borderRadius={10}
              style={{zIndex: 1000, left: 10}}>
              <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>
                {item?.status === 0
                  ? 'Breakfast'
                  : item?.status === 1
                  ? 'Lunch'
                  : 'Dinner'}
              </Text>
            </QuickView>
            <Image
              style={{
                width: width - 40,
                height: 200,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
              source={{uri: item?.image}}
            />
            <QuickView
              alignItems="flex-start"
              row
              marginTop={10}
              marginLeft={10}>
              <Icon
                color="#00b3b5"
                name="local-fire-department"
                type="material"
              />
              <Text style={{color: '#00b3b5', marginTop: 5, marginLeft: 5}}>
                {item?.amount}
              </Text>
            </QuickView>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginVertical: 5,
                marginLeft: 10,
              }}>
              {item?.name}
            </Text>
            <QuickView row marginLeft={10}>
              <Text style={{color: '#999999'}}>
                {' '}
                {item?.ingredients.length !== 0
                  ? item?.ingredients.length + ' ingedients'
                  : 0}
              </Text>
              <Icon
                style={{marginTop: -2}}
                color="#999999"
                name="dot-single"
                type="entypo"
              />
              <Text style={{color: '#999999'}}>
                {moment(item?.createdAt).format('DD-MM-YYYY')}
              </Text>
            </QuickView>
          </TouchableOpacity>
        </QuickView>
      );
    } else {
      return null;
    }
  };
  render() {
    const {data} = this.props;
    // const dataToday = [
    //   {
    //     name: 'Kale Smoothie',
    //     ingedients: '5',
    //     image: require('@src/assets/images/1.png'),
    //     time: '40 mins',
    //     amount: '330 kcal',
    //     status: 'Breakfast',
    //   },
    //   {
    //     name: 'Baked sweet potatoes with spinach and pine nuts',
    //     ingedients: '12',
    //     image: require('@src/assets/images/2.png'),
    //     time: '20 mins',
    //     amount: '530 kcal',
    //     status: 'Lunch',
    //   },
    //   {
    //     name: 'Creamy turkey and bell pepper over rice',
    //     ingedients: '3',
    //     image: require('@src/assets/images/3.png'),
    //     time: '30 mins',
    //     amount: '230 kcal',
    //     status: 'Dinner',
    //   },
    // ];
    return (
      <Container paddingTop={30} backgroundColor="#FFFFFF">
        <Body type="full-height">
          <FlatList
            data={data}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        </Body>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  data: getListEventSelector(state),
  loading: state.meals.loading,
  total: state.meals.total,
});
export default connect(mapStateToProps, null)(ListFood);
