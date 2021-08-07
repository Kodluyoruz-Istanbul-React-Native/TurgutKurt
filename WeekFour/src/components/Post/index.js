import React from 'react';
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
import {ViewPropTypes, PropTypes} from '../config';
const Post = props => {
  const {
    postData,
    RenderCardViewStyle,
    TopViewStyle,
    onPressProfile,
    ProfileButtonStyle,
    RenderProfileImageStyle,
    NameAndTagViewStyle,
    NameTextStyle,
    TagTextStyle,
    onPressDots,
    DotsButtonStyle,
    TopRightSvg,
    RenderImageStyle,
    BottomViewStyle,
    BottomLeftViewStyle,
    SvgTextStyle,
    BottomLeftSvg,
    BottomLeftText,
    BottomRightViewStyle,
    BottomRightButtonStyle,
    onPressLike,
    BottomRightSvg1,
    BottomFavoriteText,
    onPressMessage,
    BottomRightSvg2,
    BottomMessageText,
  } = props;
  const renderUser = ({item, index}) => {
    return (
      <View style={[styles.RenderCardView, RenderCardViewStyle]}>
        <View style={[styles.TopView, TopViewStyle]}>
          <TouchableOpacity
            onPress={onPressProfile}
            style={[styles.ProfileButton, ProfileButtonStyle]}>
            <Image
              style={[styles.RenderProfileImage, RenderProfileImageStyle]}
              source={item.profileImg}
            />
            <View style={[styles.NameAndTagView, NameAndTagViewStyle]}>
              <Text style={[styles.NameText, NameTextStyle]}>{item.name}</Text>
              <Text style={[styles.TagText, TagTextStyle]}>{item.tag}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onPressDots}
            style={[styles.DotsButton, DotsButtonStyle]}>
            <VectorImage source={TopRightSvg} />
          </TouchableOpacity>
        </View>
        <Image
          style={[styles.RenderImage, RenderImageStyle]}
          source={item.img}
        />
        <View style={[styles.BottomView, BottomViewStyle]}>
          <View style={[styles.BottomLeftView, BottomLeftViewStyle]}>
            <VectorImage source={BottomLeftSvg} />
            <Text style={[styles.SvgText, SvgTextStyle]}>{BottomLeftText}</Text>
          </View>
          <View style={[styles.BottomRightView, BottomRightViewStyle]}>
            <TouchableOpacity
              onPress={onPressLike}
              style={[styles.BottomRightButton, BottomRightButtonStyle]}>
              <VectorImage source={BottomRightSvg1} />
              <Text style={[styles.SvgText, SvgTextStyle]}>
                {BottomFavoriteText}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPressMessage}
              style={[styles.BottomRightButton, BottomRightButtonStyle]}>
              <VectorImage source={BottomRightSvg2} />
              <Text style={[styles.SvgText, SvgTextStyle]}>
                {BottomMessageText}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={postData}
      renderItem={renderUser}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
Post.propTypes = {
  postData: PropTypes.array,
  RenderCardViewStyle: ViewPropTypes.style,
  TopViewStyle: ViewPropTypes.style,
  onPressProfile: PropTypes.func,
  ProfileButtonStyle: ViewPropTypes.style,
  RenderProfileImageStyle: Image.propTypes.style,
  NameAndTagViewStyle: ViewPropTypes.style,
  NameTextStyle: Text.propTypes.style,
  TagTextStyle: Text.propTypes.style,
  onPressDots: PropTypes.func,
  DotsButtonStyle: ViewPropTypes.style,
  TopRightSvg: PropTypes.number,
  RenderImageStyle: Image.propTypes.style,
  BottomViewStyle: ViewPropTypes.style,
  BottomLeftViewStyle: ViewPropTypes.style,
  BottomLeftSvg: PropTypes.number,
  SvgTextStyle: Text.propTypes.style,
  BottomLeftText: PropTypes.string,
  BottomRightViewStyle: ViewPropTypes.style,
  BottomRightButtonStyle: ViewPropTypes.style,
  BottomRightSvg1: PropTypes.number,
  BottomFavoriteText: Text.propTypes.style,
  onPressMessage: PropTypes.func,
  BottomRightSvg2: PropTypes.number,
  BottomMessageText: Text.propTypes.style,
};
Post.defaultProps = {
  postData: [
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
  ],
  onPressProfile: () => console.log('onPressProfile basıldı.'),
  onPressDots: () => console.log('onPressDots basıldı.'),
  TopRightSvg: DotsGray,
  BottomLeftSvg: EyesGray,
  BottomLeftText: '4511',
  onPressLike: () => console.log('onPressLike basıldı.'),
  BottomRightSvg1: Heart,
  BottomFavoriteText: '24',
  onPressMessage: () => console.log('onPressRight2 basıldı.'),
  BottomRightSvg2: Message,
  BottomMessageText: '16',
};
export default Post;
