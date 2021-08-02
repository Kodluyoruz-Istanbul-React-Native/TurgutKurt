import React from 'react';
import {FlatList, View} from 'react-native';
import {Header, Story, Post} from '~/components';
import styles from './styles';
const FeedScreen = () => {
  return (
    <View style={styles.Container}>
      <Header />
      <FlatList
        ListHeaderComponent={() => <Story />}
        data={[{key: '1'}]}
        renderItem={() => <Post />}
      />
    </View>
  );
};
export default FeedScreen;
