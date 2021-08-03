import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import VectorImage from 'react-native-vector-image';
import {Dots, Photo, Plus} from '~/assets';
import {PropTypes, ViewPropTypes} from '~/components/config';
const Header = props => {
  const {
    ContainerStyle,
    LeftViewStyle,
    onPressLeft,
    LeftButtonStyle,
    SvgStyle,
    LeftSvg,
    CenterViewStyle,
    CenterTextStyle,
    CenterText,
    onPressRight1,
    RightButton1Style,
    RightSvg1,
    onPressRight2,
    RightButton2Style,
    RightSvg2,
  } = props;
  return (
    <View style={[styles.Container, ContainerStyle]}>
      <View style={[styles.LeftView, LeftViewStyle]}>
        <TouchableOpacity
          onPress={onPressLeft}
          style={[styles.LeftButton, LeftButtonStyle]}>
          <VectorImage style={[styles.Svg, SvgStyle]} source={LeftSvg} />
        </TouchableOpacity>
      </View>
      <View style={[styles.CenterView, CenterViewStyle]}>
        <Text style={[styles.CenterText, CenterTextStyle]}>{CenterText}</Text>
      </View>
      <TouchableOpacity
        onPress={onPressRight1}
        style={[styles.RightButton1, RightButton1Style]}>
        <VectorImage style={[styles.Svg, SvgStyle]} source={RightSvg1} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressRight2}
        style={[styles.RightButton2, RightButton2Style]}>
        <VectorImage style={[styles.Svg, SvgStyle]} source={RightSvg2} />
      </TouchableOpacity>
    </View>
  );
};
Header.propTypes = {
  ContainerStyle: ViewPropTypes.style,
  LeftViewStyle: ViewPropTypes.style,
  LeftButtonStyle: ViewPropTypes.style,
  onPressLeft: PropTypes.func,
  SvgStyle: Text.propTypes.style,
  LeftSvg: PropTypes.number,
  CenterViewStyle: ViewPropTypes.style,
  CenterTextStyle: Text.propTypes.style,
  CenterText: PropTypes.string,
  onPressRight1: PropTypes.func,
  RightButton1Style: ViewPropTypes.style,
  RightSvg1: PropTypes.number,
  onPressRight2: PropTypes.func,
  RightButton2Style: ViewPropTypes.style,
  RightSvg2: PropTypes.number,
};
Header.defaultProps = {
  onPressLeft: () => console.log('onPressLeft basıldı.'),
  LeftSvg: Photo,
  CenterText: 'Feed',
  onPressRight1: () => console.log('onPressRight1 basıldı.'),
  RightSvg1: Plus,
  onPressRight2: () => console.log('onPressRight2 basıldı.'),
  RightSvg2: Dots,
};
export default Header;
