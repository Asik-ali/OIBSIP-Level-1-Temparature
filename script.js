function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var resultElement = document.getElementById('result');

    if (!isNaN(temperature)) {
        var convertedTemperature = 0;

        if (fromUnit === 'Celsius') {
            if (toUnit === 'Fahrenheit') {
                convertedTemperature = (temperature * 9/5) + 32;
            } else if (toUnit === 'Kelvin') {
                convertedTemperature = temperature + 273.15;
            } else {
                convertedTemperature = temperature;
            }
        } else if (fromUnit === 'Fahrenheit') {
            if (toUnit === 'Celsius') {
                convertedTemperature = (temperature - 32) * 5/9;
            } else if (toUnit === 'Kelvin') {
                convertedTemperature = (temperature - 32) * 5/9 + 273.15;
            } else {
                convertedTemperature = temperature;
            }
        } else if (fromUnit === 'Kelvin') {
            if (toUnit === 'Celsius') {
                convertedTemperature = temperature - 273.15;
            } else if (toUnit === 'Fahrenheit') {
                convertedTemperature = (temperature - 273.15) * 9/5 + 32;
            } else {
                convertedTemperature = temperature;
            }
        }

        resultElement.innerHTML = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${toUnit}`;
    } else {
        resultElement.innerHTML = 'Please enter a valid temperature.';
    }
}
