import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
const Loading = () => {
  useEffect(() => {
    setTimeout(async () => {
      console.log('5 saniye geçti');
    }, 5);
  }, []);
  return (
    <View style={styles.wrapper}>
      <LottieView
        source={require('../../assets/lottie/44123-customer-support-women')}
        autoPlay
        loop
      />
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Loading;
