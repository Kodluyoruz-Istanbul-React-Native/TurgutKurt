import React, {useState} from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {
  DotsGray,
  human,
  post1,
  post2,
  EyesGray,
  Heart,
  Message,
} from '~/assets';
import VectorImage from 'react-native-vector-image';
const Post = () => {
  const data = [
    {
      name: 'Carly Jane',
      tag: '@carlyj',
      img: post1,
      profileImg: human,
    },
    {
      name: 'Miranda West',
      tag: '@mirandw',
      img: post2,
      profileImg: human,
    },
    {
      name: 'Carly Jane',
      tag: '@carlyj',
      img: post1,
      profileImg: human,
    },
    {
      name: 'Miranda West',
      tag: '@mirandw',
      img: post2,
      profileImg: human,
    },
  ];
  const renderUser = ({item, index}) => {
    return (
      <View style={styles.RenderCardView}>
        <View style={styles.TopView}>
          <TouchableOpacity style={styles.ProfileButton}>
            <Image style={styles.RenderProfileImage} source={item.profileImg} />
            <View style={styles.NameAndTagView}>
              <Text style={styles.NameText}>{item.name}</Text>
              <Text style={styles.TagText}>{item.tag}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.DotsButton}>
            <VectorImage source={DotsGray} />
          </TouchableOpacity>
        </View>
        <Image style={styles.RenderImage} source={item.img} />
        <View style={styles.BottomView}>
          <View style={styles.BottomLeftView}>
            <VectorImage source={EyesGray} />
            <Text style={styles.LeftText}>4511</Text>
          </View>
          <View style={styles.BottomRightView}>
            <TouchableOpacity style={styles.BottomRightButton}>
              <VectorImage source={Heart} />
              <Text style={styles.LeftText}>24</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BottomRightButton}>
              <VectorImage source={Message} />
              <Text style={styles.LeftText}>11</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      style={styles.FlatList}
      data={data}
      renderItem={renderUser}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
export default Post;
