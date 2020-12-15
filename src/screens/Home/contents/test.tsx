/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity} from 'react-native';
import {Calendar} from 'react-native-calendars';
import moment from 'moment';
import {QuickView, Container, Body} from '@src/components';
import _ from 'lodash';
import CalendarStrip from 'react-native-slideable-calendar-strip';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

interface State {
  selectedDate: any;
}
export class HomeScreen extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedDate: moment(Date.now()).format('YYYY-MM-DD'),
    };
  }

  render() {
    const {selectedDate} = this.state;
    return (
      <View style={{backgroundColor: '#FFFFFF'}}>
        <SafeAreaView />
        <View style={{marginTop: 0}}>
          {/* <QuickView
            width="100%"
            height={45}
            backgroundColor="#FFFFFF"
            position="absolute"
            top={-20}
            center
            style={{
              zIndex: 1000,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                marginTop: 20,
                color: '#00b3b5',
                fontSize: 16,
              }}>
              Meal Plan
            </Text>
          </QuickView> */}
          <CalendarStrip
            showWeekNumber
            selectedDate={selectedDate}
            onPressDate={(date: any) => {
              this.setState({selectedDate: date});
            }}
            onPressGoToday={(today: any) => {
              this.setState({selectedDate: today});
            }}
            markedDate={[moment(Date.now()).format('YYYY - MM - DD')]}
            weekStartsOn={1}
          />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
