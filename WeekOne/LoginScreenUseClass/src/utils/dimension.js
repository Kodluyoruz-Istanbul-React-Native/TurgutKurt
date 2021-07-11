import {Dimensions, PixelRatio} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const calcHeight = x =>
  PixelRatio.roundToNearestPixel((deviceHeight * x) / 100);
const calcWidth = x => PixelRatio.roundToNearestPixel((deviceWidth * x) / 100);
const fontRatio = 0.1375;
const calculate = pix => {
  let value = fontRatio * pix;
  return (calcWidth(value) + calcHeight(value)) / 2;
};
export {deviceWidth, deviceHeight, calcHeight, calcWidth, calculate};
