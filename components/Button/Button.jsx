import { Text, TouchableOpacity } from 'react-native';
import { style } from './Button.style';

export function Button({ resultUnit, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={style.button}>
      <Text style={style.text}>Convert to {resultUnit}</Text>
    </TouchableOpacity>
  );
}
