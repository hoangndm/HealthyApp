/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {Text, View, Image} from 'react-native';

interface Props {
  route: any;
}

class DetailDogScreen extends PureComponent<Props> {
  render() {
    const {route} = this.props;
    return (
      <View>
        <View style={{width: '100%', height: 80, backgroundColor: '#012066'}}>
          <Text
            style={{
              marginTop: 50,
              fontSize: 16,
              fontWeight: 'bold',
              color: '#ffffff',
              marginLeft: 20,
            }}>
            Details
          </Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            alignItems: 'center',
            marginTop: 20,
            width: '95%',
          }}>
          <Image
            style={{width: 400, height: 300, borderRadius: 10}}
            source={{uri: route.params.params.url}}
          />
          <View style={{flexDirection: 'row', marginTop: 10, width: 400}}>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>Name:</Text>
            <Text>{route.params.params.name}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10, width: 400}}>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>Bred for:</Text>
            <Text>{route.params.params.bred_for}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10, width: 400}}>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>
              Breed group:{' '}
            </Text>
            <Text>{route.params.params.breed_group || 'Đang cập nhật'}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10, width: 400}}>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>
              Life span:
            </Text>
            <Text>{route.params.params?.life_span}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10, width: 400}}>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>Width: </Text>
            <Text>{route.params.params?.weight.imperial}</Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10, width: 400}}>
            <Text style={{fontWeight: 'bold', marginRight: 10}}>Height: </Text>
            <Text>{route.params.params?.height.imperial}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default DetailDogScreen;
