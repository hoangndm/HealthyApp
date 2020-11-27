/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import moment from 'moment';
import _ from 'lodash';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import ListNoti from '../../Notification/contents/NotificationList.screen';
import {Container, QuickView} from '@src/components';
import listFood from './ListFood.screen';
import listFoodTomorrow from './ListFoodTomorrow.screen';
import {Dimensions, Text} from 'react-native';
import {Icon} from 'react-native-elements';
const {width, height} = Dimensions.get('window');

const Tab = createMaterialTopTabNavigator();
interface State {
  selectedDate: any;
}

export class ListScreen extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedDate: moment(Date.now()).format('YYYY-MM-DD'),
    };
  }

  render() {
    return (
      <Container backgroundColor="#FFFFFF">
        <QuickView
          width={width}
          height={60}
          backgroundColor="#1d9d9e"
          style={{
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <QuickView row paddingHorizontal={20} marginTop={20}>
            <QuickView width="40%" alignItems="flex-start">
              <Icon
                color="#FFFFFF"
                size={30}
                name="chevron-back"
                type="ionicon"
              />
            </QuickView>
            <QuickView width="50%" alignItems="flex-start">
              <Text
                style={{color: '#FFFFFF', fontWeight: 'bold', fontSize: 18}}>
                Meal Plan
              </Text>
            </QuickView>
          </QuickView>
        </QuickView>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {
              fontSize: 16,
              textTransform: 'none',
              fontWeight: 'bold',
            },
            activeTintColor: '#1d9d9e',
            inactiveTintColor: '#727A8E',
            indicatorStyle: {
              backgroundColor: '#1d9d9e',
              width: 70,
              marginLeft: 40,
            },
            tabStyle: {
              height: 40,
              alignSelf: 'center',
            },
            style: {
              borderRadius: 30,
              backgroundColor: '#FFFFFF',
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
              elevation: 15,
              width: width - 100,
              alignSelf: 'center',
              marginTop: 20,
            },
            // pressColor: '#000',
            contentContainerStyle: {
              alignSelf: 'center',
              alignItems: 'center',
              // height: 100,
            },
          }}>
          <Tab.Screen name="Today" component={listFood} />
          <Tab.Screen name="Tomorrow" component={listFoodTomorrow} />
        </Tab.Navigator>
      </Container>
    );
  }
}

export default ListScreen;
