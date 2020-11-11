const toFahrenheit = 0;
const toCelsius = 1;
let choice = parseInt(process.argv[2]);
let temperature = parseInt(process.argv[3]);

function getConvertedTemperature(choice, temp){
    switch(choice){
        case toFahrenheit:
            console.log("You selected-> Convert Celsius to Fahrenheit");
            return (temp * (9/5)) + 32;
        case toCelsius:
            console.log("You selected-> Convert Fahrenheit to Cahrenheit");
            return ((temp - 32) * 5/9);
    }
}

if(choice == 0){
    console.log("Selected Celsius Temp: "+ temperature);
}
if(choice==1){
    console.log("Selected Fahrenheit Temp: "+ temperature);
}
let convertedTemp = getConvertedTemperature(choice , temperature);
console.log("Converted temperature = " + convertedTemp);