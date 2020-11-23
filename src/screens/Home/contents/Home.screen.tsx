import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native';

const data = [
  {
    id: '1',
    title: 'Lịch trình',
    backgroundImage: require('@src/assets/images/background-calendar.jpg')
  },
  {
    id: '2',
    title: 'Món ăn hằng ngày',
    backgroundImage: require('@src/assets/images/background-dailyfood.jpg')
  },
  {
    id: '3',
    title: 'Tình trạng sức khỏe',
    backgroundImage: require('@src/assets/images/background-health.jpg')
  },
  {
    id: '4',
    title: 'Thể dục',
    backgroundImage: require('@src/assets/images/background-sport.jpg')
  }
];

const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow++;
  }
  return data;
};

const numColumns = 2;
export default class App extends React.Component {
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />
    }
    return (
      <View style={styles.item} >
        <Image source={item.backgroundImage} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.auth}>Hi, Quang!</Text>
          <Image source={require('@src/assets/images/avatar.jpg')} style={styles.avatar}/>
        </View>
        <FlatList
          data={formatData(data, numColumns)}
          style={styles.flatlist}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 100,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  auth: {
    fontFamily: 'HKGrotesk-Bold',
    fontSize: 30
  },
  flatlist: {
    margin: 20
  },
  item: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    borderRadius: 15,
    height: Dimensions.get('window').width / numColumns ,
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  itemImage: {
    height: 200,
    width: 160,
    position: 'absolute'
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: 'dimgray',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 20,
    width: '50%'
  },
});