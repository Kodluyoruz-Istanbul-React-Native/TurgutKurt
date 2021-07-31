import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import VectorImage from 'react-native-vector-image';
import {Dots, Photo, Plus} from '~/assets';
const Header = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.LeftView}>
        <TouchableOpacity style={styles.LeftButton}>
          <VectorImage style={styles.svgStyle} source={Photo} />
        </TouchableOpacity>
      </View>
      <View style={styles.CenterView}>
        <Text style={styles.CenterText}>Header</Text>
      </View>
      <TouchableOpacity style={styles.RightButton1}>
        <VectorImage style={styles.svgStyle} source={Plus} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.RightButton2}>
        <VectorImage style={styles.svgStyle} source={Dots} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
