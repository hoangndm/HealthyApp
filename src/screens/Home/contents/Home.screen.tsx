import React from 'react';
import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native';

const data = [
  {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
      },
      {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Fourth Item',
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
      <View
        style={styles.item}
      >
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
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
    flex: 1,
    backgroundColor: 'rgb(29,157,158)'
  },
  header: {
    height: 100,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  flatlist: {

  },
  item: {
    backgroundColor: '#4D243D',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 20,
    borderRadius: 25,
    height: Dimensions.get('window').width / numColumns 
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: '#fff',
  },
});