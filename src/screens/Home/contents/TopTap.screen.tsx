/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

const Tab = ({title, onPress}: {title: any; onPress: any}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          padding: 10,
          borderRadius: 10,
          backgroundColor: '#FFF',
        }}>
        <Text style={{color: '#000'}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Tab;
