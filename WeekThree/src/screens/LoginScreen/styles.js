import {StyleSheet} from 'react-native';
import {calcWidth, calcHeight} from '~utils';
import {colors, globalStyle} from '~components';
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  TopViewStyle: {
    marginTop: calcHeight(4),
    width: calcWidth(100),
    height: calcHeight(31),
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  welcomeText: {
    width: calcWidth(100),
    height: calcHeight(10),
    fontSize: 38,
    fontWeight: 'bold',
    ...globalStyle.textCc,
  },
  inputViewStyle: {
    width: calcWidth(100),
    height: calcHeight(10),
    ...globalStyle.aic,
  },
  DisableButton: {
    backgroundColor: '#707070',
    borderRadius: 5,
    width: calcWidth(100) - 60,
    height: calcHeight(100) / 16,
    ...globalStyle.jccaic,
  },
  ButtonText: {
    fontSize: calcHeight(1.14) + calcWidth(1.14),
    fontWeight: 'bold',
    color: colors.MainWhite,
    textAlign: 'center',
  },
  freeStyle2: {
    width: calcWidth(100),
    height: calcHeight(25),
    ...globalStyle.jccaic,
  },
  lineStyle: {
    width: calcWidth(100) - 60,
    borderWidth: 1,
    borderColor: 'rgba(26, 26, 26, 0.2)',
  },
});
export default styles;
