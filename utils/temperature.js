const UNITS = {
  celsius: 'celsius',
  fahrenheit: 'fahrenheit',
  kelvin: 'kelvin',
};

const convertTemperature = (value, fromUnit, toUnit) => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;

  if (isNaN(numericValue)) {
    throw new Error('Invalid value provided for conversion');
  }

  if (fromUnit === toUnit) {
    return numericValue;
  }

  if (fromUnit === UNITS.celsius) {
    if (toUnit === UNITS.fahrenheit) {
      return (numericValue * 9) / 5 + 32;
    } else if (toUnit === UNITS.kelvin) {
      return numericValue + 273.15;
    }
  } else if (fromUnit === UNITS.fahrenheit) {
    if (toUnit === UNITS.celsius) {
      return ((numericValue - 32) * 5) / 9;
    } else if (toUnit === UNITS.kelvin) {
      return ((numericValue - 32) * 5) / 9 + 273.15;
    }
  } else if (fromUnit == UNITS.kelvin) {
    if (toUnit === UNITS.celsius) {
      return numericValue - 273.15;
    } else if (toUnit === UNITS.fahrenheit) {
      return ((numericValue - 273.15) * 9) / 5 + 32;
    }
  } else {
    throw new Error('Invalid units provided for conversion');
  }
};

function isColdTemperature(temperatureString) {
  if (!temperatureString) {
    return true;
  }
  const temperaturePattern = /^([-+]?\d*\.?\d+)\s*(°[CF]|K)?$/i;
  const match = temperatureString.match(temperaturePattern);

  if (!match) {
    throw new Error('Invalid temperature string format');
  }

  const temperatureValue = parseFloat(match[1]);
  const unit = match[2].toLowerCase();

  if (unit === '°c') {
    return temperatureValue <= 0;
  } else if (unit === '°f') {
    return temperatureValue <= 32;
  } else if (unit === 'k') {
    return temperatureValue <= 273.15;
  } else {
    throw new Error('Invalid unit');
  }
}

export { UNITS, convertTemperature, isColdTemperature };
