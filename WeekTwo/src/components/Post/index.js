import React, {Component} from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {post1, post2} from '~/assets';
const Post = () => {
  const state = {
    data: [
      {
        name: 'Alex',
        img: post1,
      },
      {
        name: 'Linda',
        img: post2,
      },
      {
        name: 'Jane',
        img: post1,
      },
      {
        name: 'Jeny',
        img: post2,
      },
      {
        name: 'Mark',
        img: post1,
      },
      {
        name: 'Tonny',
        img: post2,
      },
      {
        name: 'Jessica',
        img: post1,
      },
    ],
  };
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
        data={state.data}
        renderItem={renderUser}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
export default Post;
