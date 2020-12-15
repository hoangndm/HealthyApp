/* eslint-disable no-sparse-arrays */
/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {Component, PureComponent} from 'react';
import moment from 'moment';
import {Body, Container, QuickView} from '@src/components';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NavigationService from '@utils/navigation';
const {width} = Dimensions.get('window');
import EventCalendar from 'react-native-events-calendar';
import {Icon} from 'react-native-elements';

interface State {
  events: any;
}

export class CalendarScreen extends PureComponent<State> {
  constructor(props: any) {
    super(props);
    this.state = {
      events: [
        {
          start: `${moment(Date.now()).format('YYYY-MM-DD')} 00:00:00`,
          end: `${moment(Date.now()).format('YYYY-MM-DD')} 05:00:00`,
          title: 'Sleeping',
        },
        {
          start: `${moment(Date.now()).format('YYYY-MM-DD')} 05:05:00`,
          end: `${moment(Date.now()).format('YYYY-MM-DD')} 06:00:00`,
          title: 'Stay Warm',
          summary: 'Between 5:00am and 6:00am',
        },
        {
          start: `${moment(Date.now()).format('YYYY-MM-DD')} 06:05:00`,
          end: `${moment(Date.now()).format('YYYY-MM-DD')} 08:00:00`,
          title: 'Dont Strain Yourself',
          summary: 'between 6:00am and 8:00am',
        },
        {
          start: `${moment(Date.now()).format('YYYY-MM-DD')} 08:05:00`,
          end: `${moment(Date.now()).format('YYYY-MM-DD')} 09:00:00`,
          title: 'Take It Easy',
          summary: 'between 8:00am and 9:00am',
        },
        {
          start: `${moment(Date.now()).format('YYYY-MM-DD')} 09:05:00`,
          end: `${moment(Date.now()).format('YYYY-MM-DD')} 11:00:00`,
          title: 'Accomplish Tasks',
          summary: 'between 9:00am and 11:00am',
        },
        {
          start: `${moment(Date.now()).format('YYYY-MM-DD')} 11:05:00`,
          end: `${moment(Date.now()).format('YYYY-MM-DD')} 13:00:00`,
          title: 'Not Too Intense',
          summary: 'between 11:00am and 1:00pm',
        },
        {
          start: `${moment(Date.now()).format('YYYY-MM-DD')} 13:05:00`,
          end: `${moment(Date.now()).format('YYYY-MM-DD')} 15:00:00`,
          title: 'Get Moving ',
          summary: 'between 13:00 and 15:00',
        },
        {
          start: `${moment(Date.now()).format('YYYY-MM-DD')} 15:05:00`,
          end: `${moment(Date.now()).format('YYYY-MM-DD')} 17:00:00`,
          title: 'Exercise Time',
          summary: 'between 15:00 and 17:00',
        },
        {
          start: `${moment(Date.now()).format('YYYY-MM-DD')} 17:05:00`,
          end: `${moment(Date.now()).format('YYYY-MM-DD')} 18:00:00`,
          title: 'Stretches ',
          summary: 'between 17:00 and 18:00',
        },
        {
          start: `${moment(Date.now()).format('YYYY-MM-DD')} 18:05:00`,
          end: `${moment(Date.now()).format('YYYY-MM-DD')} 20:00:00`,
          title: 'Relax ',
          summary: 'between 18:00 and 20:00',
        },
        {
          start: `${moment(Date.now()).format('YYYY-MM-DD')} 20:05:00`,
          end: `${moment(Date.now()).format('YYYY-MM-DD')} 22:00:00`,
          title: 'Prep for Sleep',
          summary: 'between 20:00 and 22:00',
        },
        {
          start: `${moment(Date.now()).format('YYYY-MM-DD')} 22:05:00`,
          end: `${moment(Date.now()).format('YYYY-MM-DD')} 05:00:00`,
          title: 'Sleep ',
          summary: 'between 22:00 and Tomorrow',
        },
      ],
    };
  }
  _eventTapped(event: any) {
    console.log('sadasdasda', event);
  }
  renderItem = ({item, index}: {item: any; index: number}) => {
    return (
      <QuickView
        key={index}
        width={width - 60}
        marginTop={20}
        marginHorizontal={10}
        marginBottom={10}
        style={{
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
          elevation: 1,
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
        }}>
        <Image
          style={{width: width - 60, height: 200, borderRadius: 10}}
          source={item.image}
        />
        <QuickView marginHorizontal={20} marginBottom={0}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              marginVertical: 5,
              color: '#222222',
            }}>
            {item.name}
          </Text>
          <Text style={{color: '#999999'}}>{item.description}</Text>
        </QuickView>
      </QuickView>
    );
  };
  render() {
    const data = [
      {
        name: 'Warm Up Tips',
        description: 'A warm up should be modified based on…',
        image: require('@src/assets/images/11.jpg'),
      },
      {
        name: 'Single Arm Row',
        description: 'Lower back, Abs, Pelvic floor',
        image: require('@src/assets/images/22.jpg'),
      },
      {
        name: 'Single Arm Row',
        description: 'Lower back, Abs, Pelvic floor',
        image: require('@src/assets/images/33.jpg'),
      },
      {
        name: 'Single Arm Row',
        description: 'Lower back, Abs, Pelvic floor',
        image: require('@src/assets/images/44.jpg'),
      },
    ];
    return (
      <Container backgroundColor="#FFFFFF">
        <SafeAreaView style={{backgroundColor: '#1d9d9e'}} />
        <QuickView width={width} height={60} backgroundColor="#1d9d9e">
          <QuickView row paddingHorizontal={10} marginTop={10}>
            <QuickView width="10%" alignItems="flex-start">
              <TouchableOpacity onPress={() => NavigationService.goBack()}>
                <Icon
                  color="#FFFFFF"
                  size={30}
                  name="chevron-back"
                  type="ionicon"
                />
              </TouchableOpacity>
            </QuickView>
            <QuickView width="50%" alignItems="flex-start">
              <Text
                style={{
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  fontSize: 18,
                  marginTop: 3,
                }}>
                Fitness Tips
              </Text>
            </QuickView>
          </QuickView>
        </QuickView>
        <Body type="full-view">
          <QuickView height={350}>
            <Text
              style={{
                marginTop: 20,
                fontWeight: 'bold',
                fontSize: 16,
                marginLeft: 20,
              }}>
              Fitness Tips
            </Text>
            <FlatList
              data={data}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              horizontal
              numColumns={1}
            />
          </QuickView>
          <Text
            style={{
              marginTop: 20,
              fontWeight: 'bold',
              fontSize: 16,
              marginLeft: 20,
            }}>
            Fitness Schedule
          </Text>
          <EventCalendar
            eventTapped={this._eventTapped.bind(this)}
            events={this.state.events}
            width={width}
            initDate={moment(Date.now()).format('YYYY-MM-DD')}
            uppercase
            scrollToFirst={true}
          />
        </Body>
      </Container>
    );
  }
}

export default CalendarScreen;
