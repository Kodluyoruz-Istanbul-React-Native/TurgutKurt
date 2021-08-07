import React, {useEffect} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {socialMediaAnimation} from '~assets';
import styles from './styles';
import {AuthControl} from '~utils';
const Loading = () => {
  useEffect(() => {
    setTimeout(async () => {
      await AuthControl.setupAuth();
    }, 3000);
  }, []);
  return (
    <View style={styles.Container}>
      <LottieView
        style={styles.LottieStyle}
        source={socialMediaAnimation}
        autoPlay
        loop
      />
    </View>
  );
};
export default Loading;
