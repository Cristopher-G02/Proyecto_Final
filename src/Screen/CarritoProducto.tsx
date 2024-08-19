import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Car } from './HomeScreen/HomeScreen';


interface Props {
   car: Car[];
};


export const CarritoProducto = ({ car }: Props) => {


  return (
    <View>
      <FlatList
        data={car}
        renderItem={({ item }) => (
          <Text>{item.name}</Text>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

export default CarritoProducto;
