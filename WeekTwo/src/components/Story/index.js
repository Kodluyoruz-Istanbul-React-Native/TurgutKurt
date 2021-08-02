import React, {Component} from 'react';
import {FlatList, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {human} from '~/assets';
import {ViewPropTypes, PropTypes} from '../config';

const Story = props => {
  const {
    ListViewStyle,
    storyData,
    onPressCard,
    RenderCardViewStyle,
    RenderImageStyle,
    RenderTextStyle,
  } = props;
  const renderUser = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={onPressCard}
        style={[styles.RenderCardView, RenderCardViewStyle]}>
        <Image
          style={[styles.RenderImage, RenderImageStyle]}
          source={item.img}
        />
        <Text style={[styles.RenderText, RenderTextStyle]}>{item.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={[styles.ListView, ListViewStyle]}>
      <FlatList
        horizontal
        data={storyData}
        renderItem={renderUser}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
Story.propTypes = {
  ListViewStyle: ViewPropTypes.style,
  storyData: PropTypes.array,
  onPressCard: PropTypes.func,
  RenderCardViewStyle: ViewPropTypes.style,
  RenderImageStyle: Image.propTypes.style,
  RenderTextStyle: Text.propTypes.style,
};
Story.defaultProps = {
  onPressCard: () => console.log('onPressCard basıldı.'),
  storyData: [
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
  ],
};
export default Story;
