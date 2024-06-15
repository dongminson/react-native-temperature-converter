import React from 'react';
import { View, TextInput } from 'react-native';
import { style } from './Input.style';

export const Input = React.forwardRef(({ sourceUnit, onChange }, ref) => {
  return (
    <View style={style.root}>
      <TextInput
        ref={ref}
        style={style.input}
        maxLength={3}
        placeholder={`Type the temperature in ${sourceUnit}`}
        onChangeText={(text) => {
          onChange(text);
        }}
      />
    </View>
  );
});
