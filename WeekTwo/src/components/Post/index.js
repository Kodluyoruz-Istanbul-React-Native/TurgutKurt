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
  HeartClicked,
  Message,
} from '~/assets';
import VectorImage from 'react-native-vector-image';
const Post = () => {
  const [clicked, setClicked] = useState(false);
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
          <TouchableOpacity
            onPress={() => {
              console.log('profile button pressed');
            }}
            style={styles.ProfileButton}>
            <Image style={styles.RenderProfileImage} source={item.profileImg} />
            <View style={styles.NameAndTagView}>
              <Text style={styles.NameText}>{item.name}</Text>
              <Text style={styles.TagText}>{item.tag}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              console.log('dots button pressed');
            }}
            style={styles.DotsButton}>
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
            <TouchableOpacity
              style={styles.BottomRightButton}
              onPress={() => {
                console.log('like button pressed');
                setClicked(!clicked);
              }}>
              <VectorImage source={clicked ? HeartClicked : Heart} />
              <Text style={styles.LeftText}>24</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log('comment button pressed');
              }}
              style={styles.BottomRightButton}>
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
      data={data}
      renderItem={renderUser}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
export default Post;
