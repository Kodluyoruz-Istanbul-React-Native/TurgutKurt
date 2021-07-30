import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {loadingAnimation} from '~/assets';
import styles from './styles';
const Loading = () => {
  useEffect(() => {
    setTimeout(async () => {
      console.log('5 saniye geçti');
    }, 5);
  }, []);
  return (
    <View style={styles.wrapper}>
      <LottieView source={loadingAnimation} autoPlay loop />
    </View>
  );
};
export default Loading;
