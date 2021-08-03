import {StyleSheet} from 'react-native';
import {calcWidth, calcHeight, calculate} from '~utils';
import {colors} from '../config';
const styles = StyleSheet.create({
  inputStyle: {
    width: calcWidth(100) - 60,
    height: calcHeight(100) / 16,
    borderRadius: calculate(5),
    backgroundColor: colors.MainWhite,
    paddingLeft: calculate(20),
    fontSize: calculate(14),
    elevation: 24,
  },
  errorText: {
    fontSize: calculate(10),
    color: colors.MainRed,
    fontWeight: 'bold',
  },
  errorInput: {
    borderColor: colors.MainRed,
    borderWidth: 2,
  },
});
export default styles;
