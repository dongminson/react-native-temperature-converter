import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { style } from './Footer.style';

export function Footer({ setUnit }) {
  return (
    <View style={style.footer}>
      <TouchableOpacity onPress={() => setUnit('celsius')} style={style.button}>
        <Icon name="temperature-celsius" size={30} color="white" />
        <Text style={style.buttonText}>Celsius</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => setUnit('fahrenheit')}
        style={style.button}
      >
        <Icon name="temperature-fahrenheit" size={30} color="white" />
        <Text style={style.buttonText}>Fahrenheit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setUnit('kelvin')} style={style.button}>
        <Icon name="temperature-kelvin" size={30} color="white" />
        <Text style={style.buttonText}>Kelvin</Text>
      </TouchableOpacity>
    </View>
  );
}
