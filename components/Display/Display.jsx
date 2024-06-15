import { Text } from 'react-native';
import { style } from './Display.style';

export function Display({ temperature }) {
  return temperature ? (
    <Text style={style.temperature}>{temperature}</Text>
  ) : (
    <Text style={style.text}>{`Temperature converter`}</Text>
  );
}
