import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { style } from './App.style';
import { Input } from './components/Input/Input';
import { Display } from './components/Display/Display';
import {
  UNITS,
  convertTemperature,
  isColdTemperature,
} from './utils/temperature';
import { Button } from './components/Button/Button';
import React, { useEffect, useRef, useState } from 'react';
import { Footer } from './components/Footer/Footer';

export default function App() {
  const coldColors = ['#81D4FA', '#039BE5'];
  const warmColors = ['#FFAB91', '#F4511E'];

  const [inputValue, setInputValue] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [currentUnit, setCurrentUnit] = useState(UNITS.celsius);
  const [conversionUnit, setConversionUnit] = useState(UNITS.fahrenheit);
  const [conversionUnitSecond, setConversionUnitSecond] = useState(
    UNITS.kelvin,
  );
  const [colors, setColors] = useState(coldColors);
  const inputRef = useRef(null);

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  useEffect(() => {
    setInputValue(null);
    setTemperature(null);
    clearInput();

    switch (currentUnit) {
      case UNITS.fahrenheit:
        setConversionUnit(UNITS.celsius);
        setConversionUnitSecond(UNITS.kelvin);
        break;
      case UNITS.celsius:
        setConversionUnit(UNITS.fahrenheit);
        setConversionUnitSecond(UNITS.kelvin);
        break;
      case UNITS.kelvin:
        setConversionUnit(UNITS.celsius);
        setConversionUnitSecond(UNITS.fahrenheit);
        break;
      default:
        break;
    }
  }, [currentUnit]);

  useEffect(() => {
    const isCold = isColdTemperature(temperature);
    setColors(isCold ? coldColors : warmColors);
  }, [temperature]);

  const handleOnPress = () => {
    const temperature = getConvertedTemperature(currentUnit, conversionUnit);
    setTemperature(temperature);
  };

  const handleOnPressSecond = () => {
    const temperature = getConvertedTemperature(
      currentUnit,
      conversionUnitSecond,
    );
    setTemperature(temperature);
  };

  const getConvertedTemperature = (sourceUnit, resultUnit) => {
    const unitSymbol =
      resultUnit === UNITS.celsius
        ? '°C'
        : resultUnit === UNITS.fahrenheit
          ? '°F'
          : resultUnit === UNITS.kelvin
            ? 'K'
            : '';
    if (inputValue === null || isNaN(inputValue)) {
      return false;
    } else {
      const convertedTemperature = convertTemperature(
        inputValue,
        sourceUnit,
        resultUnit,
      );

      if (isNaN(convertedTemperature)) {
        return false;
      }

      const formattedTemperature = convertedTemperature.toFixed(1);
      return `${formattedTemperature} ${unitSymbol}`;
    }
  };

  return (
    <LinearGradient colors={colors} style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={style.root}>
          <View style={style.workspace}>
            <Text style={style.temperatureWrapper}>
              <Display temperature={temperature} />
            </Text>
            <Input
              ref={inputRef}
              sourceUnit={currentUnit}
              onChange={setInputValue}
            />
            <View style={style.buttonWrapper}>
              <Button
                onPress={() => {
                  handleOnPress();
                }}
                resultUnit={conversionUnit}
              />
              <Button
                onPress={() => {
                  handleOnPressSecond();
                }}
                resultUnit={conversionUnitSecond}
              />
            </View>
          </View>
          <View style={style.footerContainer}>
            <Footer setUnit={setCurrentUnit} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </LinearGradient>
  );
}
