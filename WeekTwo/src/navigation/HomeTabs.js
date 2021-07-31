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
import {homeTabs} from '~/config/navigators';
const Tab = createMaterialBottomTabNavigator();
import VectorImage from 'react-native-vector-image';
import {
  Feed,
  FeedActive,
  Friends,
  FriendsActive,
  Messages,
  MessagesActive,
  Profile,
  ProfileActive,
  Settings,
  SettingsActive,
} from '~/assets';
import {colors} from '~/components/config';
import { fontSize } from "~utils";
const HomeTabs = () => {
  return (
    <Tab.Navigator
      shifting={false}
      activeColor={colors.Pink}
      inactiveColor={colors.Gray}
      barStyle={styles.barStyle}>
      <Tab.Screen
        name={homeTabs.feed}
        component={FeedScreen}
        options={{
          tabBarLabel: <Text>Feed</Text>,
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
          tabBarLabel: <Text>Friends</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={focused ? FriendsActive : Friends}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.settings}
        component={SettingsScreen}
        options={{
          tabBarLabel: <Text>Messages</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={focused ? MessagesActive : Messages}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.friends}
        component={FriendsScreen}
        options={{
          tabBarLabel: <Text>Setting</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={focused ? SettingsActive : Settings}
            />
          ),
        }}
      />
      <Tab.Screen
        name={homeTabs.profile}
        component={ProfileScreen}
        options={{
          tabBarLabel: <Text>Profile</Text>,
          tabBarIcon: ({focused}) => (
            <VectorImage
              style={styles.svgStyle}
              source={focused ? ProfileActive : Profile}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  barStyle: {backgroundColor: '#fff'},
  svgStyle: {width: fontSize(24), height: fontSize(24)},
});
export default HomeTabs;
