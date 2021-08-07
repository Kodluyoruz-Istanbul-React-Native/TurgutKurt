import {StyleSheet} from 'react-native';
import {colors, globalStyle} from '~/components/config';
import {calcWidth, fontSize} from '~/utils';
const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Button: {
    width: calcWidth(25),
    height: calcWidth(8),
    ...globalStyle.jccaic,
    ...globalStyle.asc,
    borderRadius: fontSize(10),
    backgroundColor: colors.MainPink,
  },
  ButtonText: {
    fontSize: fontSize(15),
    color: colors.MainWhite,
    fontWeight: 'bold',
  },
});
export default styles;
