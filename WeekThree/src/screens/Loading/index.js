import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
import {loadingAnimation} from '~/assets';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {mainStack} from '~/config/navigators';
const Loading = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(async () => {
      navigation.navigate(mainStack.home_tab);
    }, 3000);
  }, []);
  return (
    <View style={styles.wrapper}>
      <LottieView source={loadingAnimation} autoPlay loop />
    </View>
  );
};
export default Loading;
