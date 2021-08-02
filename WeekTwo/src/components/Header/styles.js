import {StyleSheet} from 'react-native';
import { calcWidth, fontSize } from "~/utils";
import {colors, globalStyle} from '../config';
const styles = StyleSheet.create({
  Container: {
    ...globalStyle.fdr,
    height: fontSize(55),
    backgroundColor: colors.MainWhite,
    shadowColor: colors.Black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    ...globalStyle.jcsa,
  },
  LeftView: {
    width: calcWidth(30),
    ...globalStyle.jcc,
    paddingLeft: 20,
  },
  LeftButton: {
    height: '100%',
    ...globalStyle.jcc,
    width: calcWidth(15),
  },
  CenterView: {width: calcWidth(40), ...globalStyle.jccaic},
  CenterText: {fontSize: fontSize(20)},
  RightButton1: {
    width: calcWidth(15),
    ...globalStyle.fdr,
    ...globalStyle.aic,
    ...globalStyle.jcc,
    paddingRight: 20,
  },
  RightButton2: {
    width: calcWidth(15),
    ...globalStyle.fdr,
    ...globalStyle.aic,
    ...globalStyle.jcc,
    paddingRight: 20,
  },
  Svg: {width: fontSize(24), height: fontSize(24)},
});

export default styles;
