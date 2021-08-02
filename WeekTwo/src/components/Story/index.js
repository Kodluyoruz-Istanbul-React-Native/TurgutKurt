import React, {Component} from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {human} from '~/assets';
const Story = () => {
  const data = [
    {
      name: 'Alex',
      img: human,
    },
    {
      name: 'Linda',
      img: human,
    },
    {
      name: 'Jane',
      img: human,
    },
    {
      name: 'Jeny',
      img: human,
    },
    {
      name: 'Mark',
      img: human,
    },
    {
      name: 'Tonny',
      img: human,
    },
    {
      name: 'Jessica',
      img: human,
    },
  ];
  const renderUser = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.RenderCardView}>
        <Image style={styles.RenderImage} source={item.img} />
        <Text style={styles.RenderText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.List}>
      <FlatList
        horizontal
        data={data}
        renderItem={renderUser}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default Story;
