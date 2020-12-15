/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import {Body, Container, QuickView} from '@src/components';
import NavigationService from '@utils/navigation';
import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-elements';
import Video from 'react-native-video';
const {width, height} = Dimensions.get('window');
interface Props {
  route: any;
}
interface State {
  stopVideo: boolean;
}
export class WorkoutDetailScreen extends Component<Props, State> {
  private player: any;
  constructor(props: any) {
    super(props);
    this.state = {
      stopVideo: true,
    };
  }
  render() {
    const {stopVideo} = this.state;
    const {route} = this.props;
    return (
      <Container>
        <SafeAreaView style={{backgroundColor: '#1d9d9e'}} />
        <QuickView height={250} backgroundColor="#1d9d9e">
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
                Exercise Detail
              </Text>
            </QuickView>
          </QuickView>
        </QuickView>
        <QuickView
          width={width - 40}
          marginTop={20}
          marginHorizontal={10}
          alignSelf="center"
          marginBottom={10}
          position="absolute"
          top={100}
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
            borderRadius: 15,
            zIndex: 100000,
          }}>
          <Video
            ref={(ref: any) => {
              this.player = ref;
            }}
            onEnd={() => {
              this.player.seek(0);
            }}
            source={route.params.video}
            controls={true}
            paused={stopVideo}
            style={{
              width: '100%',
              height: 210,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              backgroundColor: '#FFFFFF',
              borderColor: '#cccccc',
              // zIndex: 1000,
            }}
          />
          <QuickView marginHorizontal={20} marginBottom={20}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 16,
                marginVertical: 5,
                color: '#222222',
              }}>
              {route.params.name}
            </Text>
            <Text style={{color: '#999999'}}>{route.params.description}</Text>
          </QuickView>
        </QuickView>
        <Body type="full-view" scroll marginTop={-30} borderRadius={20}>
          <QuickView marginTop={150} paddingHorizontal={20}>
            <Text style={{marginBottom: 10, fontSize: 14, fontWeight: 'bold'}}>
              How to Perform
            </Text>
            <Text style={{marginBottom: 5, fontSize: 16, lineHeight: 30}}>
              Your body undergoes different physiological responses when you
              engage in weight lifting. This all depends on what component of
              your fitness you wish to target, and what methods and variations
              you plan to adopt in your routine. If you are looking to achieve
              “muscle growth”, you may want to consider lifting heavier and
              performing fewer repetitions. If you are looking to increase your
              “muscle endurance”, you might want to consider lifting lighter and
              performing a lot more repetitions.{' '}
            </Text>
          </QuickView>
        </Body>
      </Container>
    );
  }
}

export default WorkoutDetailScreen;
