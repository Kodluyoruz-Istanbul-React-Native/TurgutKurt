import {StyleSheet} from 'react-native';
import {globalStyle, colors} from '~/components/config';
import {calcWidth, calcHeight, fontSize, calculate} from '~utils';
const styles = StyleSheet.create({
  Container: {flex: 1, ...globalStyle.jcc},
  textInput: {
    height: calculate(48),
    marginVertical: 15,
    paddingLeft: 15,
    ...globalStyle.asc,
    width: calcWidth(100) - 40,
    backgroundColor: colors.MainWhite,
    borderColor: colors.NewGray,
    borderWidth: 2,
    borderRadius: fontSize(12),
  },
  textInputExStyle1: {borderColor: colors.MainRed},
  textInputExStyle2: {borderColor: colors.Pink},
  ErrorTextStyle: {
    width: '82%',
    ...globalStyle.asc,
    fontSize: fontSize(10),
    color: colors.MainRed,
  },
  ButtonStyle: {
    height: calculate(48),
    width: calcWidth(100) - 40,
    ...globalStyle.jccaic,
    ...globalStyle.asc,
    backgroundColor: colors.NewGray,
    borderRadius: fontSize(12),
    marginVertical: 15,
  },
  ButtonTextStyle: {
    color: colors.MainWhite,
    fontSize: fontSize(16),
    fontWeight: 'bold',
  },
});
export default styles;
