/* eslint-disable react-native/no-inline-styles */
import React, {PureComponent} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getDogsList} from '../redux/slice';
import {getDogsListSelector} from '../redux/selectors';
import NavigationService from '@utils/navigation';
import dogStack from '../routes';

const {width} = Dimensions.get('window');
interface Props {
  data: any;
  fetchData: any;
  loading: boolean;
}
class ListDogScreen extends PureComponent<Props> {
  componentDidMount() {
    const {fetchData} = this.props;
    fetchData();
  }

  renderItem = ({item, index}: {item: any; index: any}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          NavigationService.navigate(dogStack.detailDogScreen, {params: item})
        }
        key={index}
        style={{
          borderWidth: 1,
          borderColor: '#cccccc',
          width: width / 2 - 22,
          height: 220,
          borderRadius: 10,
          marginHorizontal: 5,
          marginVertical: 10,
        }}>
        <Image
          style={{
            width: width / 2 - 24,
            height: 150,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}
          source={{uri: item.url}}
        />
        <View style={{flexDirection: 'row'}}>
          <View style={{width: width / 2 - 60}}>
            <Text
              numberOfLines={1}
              style={{
                marginLeft: 5,
                fontWeight: 'bold',
                fontSize: 12,
                color: '#012066',
                marginTop: 10,
              }}>
              {item.name}
            </Text>
            <Text
              numberOfLines={2}
              style={{
                marginLeft: 5,
                fontSize: 12,
                marginTop: 10,
                color: '#012066',
              }}>
              {item.bred_for}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  render() {
    const {data} = this.props;
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
            Dog App
          </Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <FlatList data={data} renderItem={this.renderItem} numColumns={2} />
        </View>
      </View>
    );
  }
}
const mapStateToProps = (state: any) => ({
  data: getDogsListSelector(state),
  loading: state.main.dogs.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchData: () => dispatch(getDogsList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListDogScreen);
