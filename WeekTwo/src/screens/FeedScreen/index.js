import React from 'react';
import {View, Text} from 'react-native';
import {Header} from '~/components';
import styles from './styles';
const FeedScreen = () => {
  return (
    <View style={styles.Container}>
      <Header />
      <Text>FeedScreen</Text>
    </View>
  );
};
export default FeedScreen;
