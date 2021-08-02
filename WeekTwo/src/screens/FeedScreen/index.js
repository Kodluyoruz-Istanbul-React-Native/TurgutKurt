import React from 'react';
import {View, Text} from 'react-native';
import {Header, Story} from '~/components';
import styles from './styles';
const FeedScreen = () => {
  return (
    <View style={styles.Container}>
      <Header />
      <Story />
    </View>
  );
};
export default FeedScreen;
