const convertToCelsius = (temp) => {
    return (temp - 32) * 5 / 9;
}

const convertToFahrenheit = (temp) => {
    return temp * 9 / 5 + 32;
}

console.log(convertToCelsius(95))

console.log(convertToFahrenheit(30))