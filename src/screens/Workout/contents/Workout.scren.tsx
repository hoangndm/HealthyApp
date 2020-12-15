/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import moment from 'moment';
import {Body, Container, QuickView} from '@src/components';
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
import Video from 'react-native-video';
import rootStack from '@screens/routes';
import workoutStack from '../routes';
const {width} = Dimensions.get('window');
interface State {
  selectedDate: any;
  stopVideo: boolean;
}

export class WorkoutScreen extends Component<State> {
  private player: any;
  constructor(props: any) {
    super(props);
    this.state = {
      selectedDate: moment(Date.now()).format('YYYY-MM-DD'),
      stopVideo: true,
    };
  }

  renderItem = ({item, index}: {item: any; index: number}) => {
    const {stopVideo} = this.state;
    return (
      <QuickView
        key={index}
        width={267}
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
        <Video
          ref={(ref: any) => {
            this.player = ref;
          }}
          onEnd={() => {
            this.player.seek(0);
          }}
          source={item.video}
          controls={true}
          paused={stopVideo}
          style={{
            width: '100%',
            height: 150,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: '#FFFFFF',
            borderColor: '#cccccc',
            // zIndex: 1000,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            NavigationService.navigate(rootStack.workoutStack, {
              screen: workoutStack.detailScreen,
              params: item,
            });
          }}>
          <QuickView marginHorizontal={20} marginBottom={20}>
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
        </TouchableOpacity>
      </QuickView>
    );
  };

  render() {
    const data = [
      {
        name: ' Barbell Bench Press',
        description: ' 4 sets of 8 reps',
        video: require('@src/assets/videos/squat_Trim5.mp4'),
      },
      {
        name: 'Leg Extensions ',
        description: '3 sets of 10 reps',
        video: require('@src/assets/videos/workout(0)(0).mp4'),
      },
      {
        name: 'Barbell Bbicep Curls ',
        description: '3 sets of 15 reps',
        video: require('@src/assets/videos/squat_Trim7.mp4'),
      },
      {
        name: 'Lateral Raises',
        description: '3 sets of 20 reps',
        video: require('@src/assets/videos/workout(0)(1).mp4'),
      },
    ];
    return (
      <Container backgroundColor="#FFFFFF">
        <SafeAreaView style={{backgroundColor: '#1d9d9e'}} />
        <QuickView width={width} height={110} backgroundColor="#1d9d9e">
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
                Meal Plan
              </Text>
            </QuickView>
          </QuickView>
          <Text style={{paddingHorizontal: 30, color: '#f2f2f2', fontSize: 14}}>
            Strengthen, tone and play your way to fitness
          </Text>
        </QuickView>
        <Body
          type="full-height"
          style={{
            marginTop: -15,
            borderTopLeftRadius: 14,
            borderTopRightRadius: 14,
          }}>
          <QuickView marginTop={20} paddingBottom={20}>
            <Text style={{fontWeight: 'bold'}}>Today’s Exercise</Text>
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
          <TouchableOpacity
            style={{
              padding: 10,
              elevation: 1,
              backgroundColor: '#FFFFFF',
              borderRadius: 10,
              shadowColor: 'rgba(0, 0, 0, 0.2)',
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,
            }}
            activeOpacity={0}
            onPress={() =>
              NavigationService.navigate(rootStack.workoutStack, {
                screen: workoutStack.workoutPlan,
              })
            }>
            <QuickView row>
              <Image
                style={{width: 50, height: 50}}
                source={require('@src/assets/images/workout.png')}
              />
              <QuickView marginLeft={20} width="70%" marginTop={5}>
                <Text style={{fontWeight: 'bold'}}>Plan</Text>
                <Text>Create personalized workout plan</Text>
              </QuickView>
              <Icon
                style={{alignSelf: 'flex-end', marginTop: 18}}
                name="right"
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
                marginVertical: 30,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.34,
                shadowRadius: 6.27,
              }}>
              <Image
                style={{width: 50, height: 50}}
                source={require('@src/assets/images/learn.png')}
              />
              <QuickView marginLeft={20} width="70%" marginTop={5}>
                <Text style={{fontWeight: 'bold'}}>Learn</Text>
                <Text>How often your body wants to exercise</Text>
              </QuickView>
              <Icon
                style={{alignSelf: 'flex-end', marginTop: 20}}
                name="right"
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

export default WorkoutScreen;
