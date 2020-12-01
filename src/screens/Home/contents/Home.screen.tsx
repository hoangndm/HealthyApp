/* eslint-disable react-native/no-inline-styles */
import {logout} from '@screens/Auth/contents/Login/redux/slice';
import rootStack from '@screens/routes';
import NavigationService from '@utils/navigation';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {connect} from 'react-redux';
import homeStack from '../routes';
const {width, height} = Dimensions.get('window');

const data = [
  {
    id: '1',
    title: 'Lịch trình',
    backgroundImage: require('@src/assets/images/background-calendar.jpg'),
  },
  {
    id: '2',
    title: 'Món ăn hằng ngày',
    backgroundImage: require('@src/assets/images/background-dailyfood.jpg'),
    screen: homeStack.foodScreen,
  },
  {
    id: '3',
    title: 'Tình trạng sức khỏe',
    backgroundImage: require('@src/assets/images/background-health.jpg'),
  },
  {
    id: '4',
    title: 'Thể dục',
    backgroundImage: require('@src/assets/images/background-sport.jpg'),
    screen: homeStack.workoutScreen,
  },
];

const formatData = (data: any, numColumns: any) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
  while (
    numberOfElementsLastRow !== numColumns &&
    numberOfElementsLastRow !== 0
  ) {
    data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
    numberOfElementsLastRow++;
  }
  return data;
};

const numColumns = 2;
interface Props {
  logout: any;
  dataLG: any;
}
class App extends React.Component<Props> {
  renderItem = ({item, index}: {item: any; index: number}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableOpacity
        style={styles.item}
        key={index}
        onPress={() =>
          NavigationService.navigate(rootStack.homeStack, {
            screen: item.screen,
          })
        }>
        <Image source={item.backgroundImage} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {logout} = this.props;
    return (
      <View style={styles.container}>
        <SafeAreaView style={{backgroundColor: '#FFFFFF'}} />
        <View style={styles.header}>
          <Text style={styles.auth}>Hi, Quang!</Text>
          <Image
            source={require('@src/assets/images/avatar.jpg')}
            style={styles.avatar}
          />
        </View>
        <FlatList
          data={formatData(data, numColumns)}
          style={styles.flatlist}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
        <TouchableOpacity
          onPress={() => logout()}
          style={{
            width: width - 20,
            height: 50,
            backgroundColor: '#FC423D',
            alignSelf: 'center',
            marginBottom: 30,
            borderRadius: 10,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 16,
              marginTop: 15,
              color: '#FFFFFF',
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 80,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  auth: {
    // fontFamily: 'HKGrotesk-Bold',
    fontSize: 20,
    fontWeight: 'bold',
  },
  flatlist: {
    margin: 20,
    marginTop: 50,
  },
  item: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    borderRadius: 15,
    height: Dimensions.get('window').width / numColumns,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    marginVertical: 20,
  },
  itemImage: {
    height: 200,
    width: 160,
    position: 'absolute',
    borderRadius: 10,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: 'dimgray',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 20,
    width: '50%',
  },
});

const mapStateToProps = (state: any) => ({
  dataLG: state.auth.login.data,
});

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
