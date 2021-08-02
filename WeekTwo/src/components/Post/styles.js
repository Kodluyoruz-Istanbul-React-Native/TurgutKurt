import {StyleSheet} from 'react-native';
import {colors, globalStyle} from '~/components/config';
import {calcHeight, calculate, calcWidth, fontSize} from '~/utils';
const styles = StyleSheet.create({
  RenderCardView: {
    width: calcWidth(100) - 40,
    ...globalStyle.asc,
    height: calcHeight(40),
    backgroundColor: colors.MainWhite,
    shadowColor: colors.Black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: calculate(20),
    marginTop: 5,
    marginBottom: 20,
  },
  TopView: {
    height: '18%',
    width: '100%',
    ...globalStyle.fdr,
    ...globalStyle.aic,
    ...globalStyle.jcsb,
    paddingHorizontal: 20,
  },
  ProfileButton: {
    ...globalStyle.fdr,
    height: '100%',
    ...globalStyle.aic,
  },
  NameAndTagView: {paddingLeft: 10},
  NameText: {fontSize: fontSize(12), color: colors.Black},
  TagText: {fontSize: fontSize(10), color: colors.NewGray},
  RenderProfileImage: {
    ...globalStyle.fdr,
    width: 32,
    height: 32,
    borderRadius: 32,
    resizeMode: 'cover',
  },
  DotsButton: {
    position: 'absolute',
    right: 0,
    height: '100%',
    width: 60,
    paddingRight: 20,
    ...globalStyle.jcc,
    ...globalStyle.aife,
  },
  RenderImage: {
    width: calcWidth(100) - 40,
    ...globalStyle.asc,
    height: '64%',
    resizeMode: 'cover',
  },
  RenderText: {
    marginTop: 10,
    ...globalStyle.asc,
    ...globalStyle.tac,
    color: colors.NewGray,
    fontSize: fontSize(12),
  },
  BottomView: {
    height: '18%',
    width: '100%',
    paddingHorizontal: 20,
    ...globalStyle.fdr,
  },
  BottomLeftView: {
    width: '50%',
    ...globalStyle.aic,
    ...globalStyle.fdr,
  },
  LeftText: {paddingLeft: 10, fontSize: fontSize(11)},
  BottomRightView: {
    width: '50%',
    ...globalStyle.fdr,
    ...globalStyle.jcfe,
  },
  BottomRightButton: {paddingLeft: 10, ...globalStyle.fdr, ...globalStyle.aic},
});

export default styles;
