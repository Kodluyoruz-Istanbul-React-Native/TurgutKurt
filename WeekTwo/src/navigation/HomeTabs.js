import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {
  FeedScreen,
  FriendsScreen,
  MessagesScreen,
  ProfileScreen,
  SettingsScreen,
} from '~/screens';
import {Text, StyleSheet} from 'react-native';
import {colors} from '~/components';
import {homeTabs} from '~/config/navigators';
const Tab = createMaterialBottomTabNavigator();
import VectorImage from 'react-native-vector-image';
import {Feed, FeedActive} from '~/assets';
const HomeTabs = () => {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor={colors.MainRed}
      inactiveColor={colors.Black}
      barStyle={styles.barStyle}>
      <Tab.Screen
        name={homeTabs.feed}
        component={FeedScreen}
        options={{
          tabBarLabel: <Text>Anasayfa</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={focused ? FeedActive : Feed}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.messages}
        component={MessagesScreen}
        options={{
          tabBarLabel: <Text>Mesa</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={focused ? FeedActive : Feed}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.settings}
        component={SettingsScreen}
        options={{
          tabBarLabel: <Text>frien</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={focused ? FeedActive : Feed}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.friends}
        component={FriendsScreen}
        options={{
          tabBarLabel: <Text>ayar</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={focused ? FeedActive : Feed}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.profile}
        component={ProfileScreen}
        options={{
          tabBarLabel: <Text>profil</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={focused ? FeedActive : Feed}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  barStyle: {backgroundColor: '#fff', height: 50},
  svgStyle: {width: 16, height: 21},
});
export default HomeTabs;
