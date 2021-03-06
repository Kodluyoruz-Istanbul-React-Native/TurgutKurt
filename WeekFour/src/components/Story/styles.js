import {StyleSheet} from 'react-native';
import {colors, globalStyle} from '~/components/config';
import {calcWidth, fontSize} from '~/utils';
const styles = StyleSheet.create({
  ListView: {paddingHorizontal: 20, paddingVertical: 10},
  RenderCardView: {height: calcWidth(20), marginRight: 10},
  RenderImage: {
    width: calcWidth(12.2),
    height: calcWidth(12.2),
    resizeMode: 'cover',
    borderRadius: 25,
  },
  RenderText: {
    marginTop: 10,
    ...globalStyle.asc,
    ...globalStyle.tac,
    color: colors.NewGray,
    fontSize: fontSize(12),
  },
});

export default styles;
