/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Dimensions, FlatList, Image, SafeAreaView, Text} from 'react-native';
import {QuickView, Body, Container} from '@src/components';
import {Icon} from 'react-native-elements';
import {Console} from 'console';
const {width, height} = Dimensions.get('window');
interface Props {
  route?: any;
}

class ListFood extends Component<Props> {
  renderItem = ({item, index}: {item: any; index: number}) => (
    <QuickView
      key={index}
      borderRadius={10}
      width={width - 40}
      marginVertical={10}
      backgroundColor="#FFF"
      style={{
        elevation: 1,
        paddingBottom: 20,
      }}>
      <QuickView
        position="absolute"
        top={10}
        paddingVertical={3}
        paddingHorizontal={10}
        backgroundColor="rgb(158, 29, 83)"
        borderRadius={10}
        style={{zIndex: 1000, left: 10}}>
        <Text style={{color: '#FFFFFF', fontWeight: 'bold'}}>aloo</Text>
      </QuickView>
      <Image
        style={{
          width: width - 40,
          height: 200,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        source={item.image}
      />
      <QuickView alignItems="flex-start" row marginTop={10} marginLeft={10}>
        <Icon color="#00b3b5" name="local-fire-department" type="material" />
        <Text style={{color: '#00b3b5', marginTop: 5, marginLeft: 5}}>
          {item.amount}
        </Text>
      </QuickView>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          marginVertical: 5,
          marginLeft: 10,
        }}>
        {item.name}
      </Text>
      <QuickView row marginLeft={10}>
        <Text style={{color: '#999999'}}>
          {' '}
          {item.ingedients + 'ingedients'}
        </Text>
        <Icon
          style={{marginTop: -2}}
          color="#999999"
          name="dot-single"
          type="entypo"
        />
        <Text style={{color: '#999999'}}>{item.time}</Text>
      </QuickView>
    </QuickView>
  );
  render() {
    const data = this.props.route.params;
    const dataToday = [
      {
        name: 'Kale Smoothie',
        ingedients: '5',
        image: require('@src/assets/images/1.png'),
        time: '40 mins',
        amount: '330 kcal',
      },
      {
        name: 'Baked sweet potatoes with spinach and pine nuts',
        ingedients: '12',
        image: require('@src/assets/images/2.png'),
        time: '20 mins',
        amount: '530 kcal',
      },
      {
        name: 'Creamy turkey and bell pepper over rice',
        ingedients: '3',
        image: require('@src/assets/images/3.png'),
        time: '30 mins',
        amount: '230 kcal',
      },
    ];
    console.log(data);
    return (
      <Container paddingTop={30} backgroundColor="#FFFFFF">
        <Body type="full-height">
          <FlatList
            data={dataToday}
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

export default ListFood;
