import {StyleSheet} from 'react-native';
import {globalStyle} from '~/components/config';
import {calcHeight, calcWidth} from '~/utils';
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    ...globalStyle.jccaic,
  },
});
export default styles;
