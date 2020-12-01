/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import moment from 'moment';
import {Body, Container, QuickView} from '@src/components';
import CalendarStrip from 'react-native-slideable-calendar-strip';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import NavigationService from '@utils/navigation';
const {width} = Dimensions.get('window');
interface State {
  selectedDate: any;
  stopVideo: boolean;
}

export class WorkoutPlanScreen extends Component<State> {
  private player: any;
  constructor(props: any) {
    super(props);
    this.state = {
      selectedDate: moment(Date.now()).format('YYYY-MM-DD'),
      stopVideo: true,
    };
  }

  render() {
    const data = [
      {
        name: 'Single Arm Row',
        description: 'Lower back, Abs, Pelvic floor',
        video: require('@src/assets/videos/squat.mp4'),
      },
      {
        name: 'Single Arm Row',
        description: 'Lower back, Abs, Pelvic floor',
        video: require('@src/assets/videos/squat.mp4'),
      },
      {
        name: 'Single Arm Row',
        description: 'Lower back, Abs, Pelvic floor',
        video: require('@src/assets/videos/squat.mp4'),
      },
      {
        name: 'Single Arm Row',
        description: 'Lower back, Abs, Pelvic floor',
        video: require('@src/assets/videos/squat.mp4'),
      },
    ];
    const {selectedDate} = this.state;
    return (
      <Container backgroundColor="#FFFFFF">
        <SafeAreaView style={{backgroundColor: '#1d9d9e'}} />
        <QuickView width={width} height={210} backgroundColor="#1d9d9e">
          <QuickView row paddingHorizontal={20} marginTop={20}>
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
                Workout Plan
              </Text>
            </QuickView>
          </QuickView>
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
        </QuickView>
        <Body
          type="full-height"
          style={{
            marginTop: -15,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
          }}>
          <QuickView marginVertical={20}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Session</Text>
            <QuickView marginVertical={5} marginTop={20} row>
              <Image
                style={{width: 21, height: 22, marginRight: 10}}
                source={require('@src/assets/images/time.png')}
              />
              <Text style={{color: '#555555', fontSize: 14}}>20 -25 mins</Text>
            </QuickView>
            <QuickView marginVertical={5} row>
              <Image
                style={{width: 20, height: 23, marginRight: 10}}
                source={require('@src/assets/images/body.png')}
              />
              <Text style={{color: '#555555', fontSize: 14}}>
                Upper Body, Core, Arms
              </Text>
            </QuickView>
            <QuickView marginVertical={5} row>
              <Image
                style={{width: 20, height: 25, marginRight: 10}}
                source={require('@src/assets/images/equip.png')}
              />
              <Text style={{color: '#555555', fontSize: 14}}>Dumbells</Text>
            </QuickView>
          </QuickView>
          <TouchableOpacity>
            <QuickView
              row
              style={{
                elevation: 1,
                backgroundColor: '#FFFFFF',
                padding: 10,
                borderRadius: 10,
                marginVertical: 15,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
              }}>
              <Image
                style={{width: 50, height: 50, borderRadius: 10}}
                source={require('@src/assets/images/image.jpg')}
              />
              <QuickView marginLeft={20} width="70%" marginTop={5}>
                <Text style={{fontWeight: 'bold'}}>Single Arm Row</Text>
                <Text>3 Sets ~ x8 ~ 30s Rest</Text>
              </QuickView>
              <Icon
                style={{alignSelf: 'flex-end', marginTop: 18}}
                name="down"
                type="antdesign"
                color="#d0d0d0"
                size={18}
              />
            </QuickView>
          </TouchableOpacity>
          <TouchableOpacity>
            <QuickView
              row
              style={{
                elevation: 1,
                backgroundColor: '#FFFFFF',
                padding: 10,
                borderRadius: 10,
                marginVertical: 15,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
              }}>
              <Image
                style={{width: 50, height: 50, borderRadius: 10}}
                source={require('@src/assets/images/image.jpg')}
              />
              <QuickView marginLeft={20} width="70%" marginTop={5}>
                <Text style={{fontWeight: 'bold'}}>Single Arm Row</Text>
                <Text>3 Sets ~ x8 ~ 30s Rest</Text>
              </QuickView>
              <Icon
                style={{alignSelf: 'flex-end', marginTop: 18}}
                name="down"
                type="antdesign"
                color="#d0d0d0"
                size={18}
              />
            </QuickView>
          </TouchableOpacity>
          <TouchableOpacity>
            <QuickView
              row
              style={{
                elevation: 1,
                backgroundColor: '#FFFFFF',
                padding: 10,
                borderRadius: 10,
                marginVertical: 15,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
              }}>
              <Image
                style={{width: 50, height: 50, borderRadius: 10}}
                source={require('@src/assets/images/image.jpg')}
              />
              <QuickView marginLeft={20} width="70%" marginTop={5}>
                <Text style={{fontWeight: 'bold'}}>Single Arm Row</Text>
                <Text>3 Sets ~ x8 ~ 30s Rest</Text>
              </QuickView>
              <Icon
                style={{alignSelf: 'flex-end', marginTop: 18}}
                name="down"
                type="antdesign"
                color="#d0d0d0"
                size={18}
              />
            </QuickView>
          </TouchableOpacity>
        </Body>
      </Container>
    );
  }
}

export default WorkoutPlanScreen;
