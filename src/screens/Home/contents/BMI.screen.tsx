import React, {Component} from 'react';
import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Body, Container, QuickView} from '@src/components';
import NavigationService from '@utils/navigation';
import {Icon} from 'react-native-elements';
const {width} = Dimensions.get('window');

interface State {
  status: any;
  num: any;
}
export class BMIScreen extends Component<State> {
  constructor(props: any) {
    super(props);
    this.state = {
      status: '',
      num: null,
    };
  }

  componentDidMount() {
    this.bmi();
  }

  bmi = () => {
    const BMI = Math.round((100 / Math.pow(165, 2)) * 10000);
    const output = Math.round(BMI * 100) / 100;
    this.setState({
      num: output,
    });
    if (output < 18.5) {
      this.setState({
        status: 'Underweight',
      });
    } else if (output >= 18.5 && output <= 25) {
      this.setState({
        status: 'Normal',
      });
    } else if (output >= 25 && output <= 30) {
      this.setState({
        status: 'Obese',
      });
    } else if (output > 30) {
      this.setState({
        status: 'Overweight',
      });
    }
  };
  render() {
    return (
      <Container>
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
                BMI
              </Text>
            </QuickView>
          </QuickView>
        </QuickView>
        <Body>
          <QuickView row paddingTop={20} justifyContent="space-between">
            <QuickView
              width={width / 2 - 40}
              height={200}
              backgroundColor="#e7e7eb"
              center
              borderRadius={10}>
              <Text style={{fontWeight: 'bold', color: '#525252'}}>
                Age(In year)
              </Text>
              <Text
                style={{fontSize: 65, fontWeight: 'bold', color: '#525252'}}>
                18
              </Text>
            </QuickView>
            <QuickView
              width={width / 2 - 40}
              height={200}
              backgroundColor="#e7e7eb"
              borderRadius={10}
              center>
              <Text style={{fontWeight: 'bold', color: '#525252'}}>
                Weight(kg)
              </Text>
              <Text
                style={{fontSize: 65, fontWeight: 'bold', color: '#525252'}}>
                65
              </Text>
            </QuickView>
          </QuickView>
          <QuickView
            marginTop={20}
            width={width - 40}
            height={180}
            center
            backgroundColor="#e7e7eb"
            borderRadius={10}>
            <Text style={{fontWeight: 'bold', color: '#525252'}}>
              Height(cm)
            </Text>
            <Text style={{fontSize: 65, fontWeight: 'bold', color: '#525252'}}>
              175
            </Text>
          </QuickView>
          <QuickView
            marginTop={20}
            width={width - 40}
            height={180}
            center
            backgroundColor="#e7e7eb"
            borderRadius={10}>
            <Text style={{fontWeight: 'bold', color: '#525252', fontSize: 18}}>
              Your BMI index : {this.state.num}
            </Text>
            <Text style={{fontSize: 55, fontWeight: 'bold', color: '#1d9d9e'}}>
              {this.state.status}
            </Text>
          </QuickView>
        </Body>
      </Container>
    );
  }
}

export default BMIScreen;
