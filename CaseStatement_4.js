let value = parseInt(process.argv[2]);
console.log("Given value : "+ value);
let operation = parseInt(process.argv[3]);
console.log("Given operation : "+ operation);
let convertedValue=0;

switch(operation){
    case 1:
        convertedValue = value*12;
        console.log("Feet to inch : " + convertedValue);
        break;
    case 2:
        convertedValue = value/12;
        console.log("Inch to feet : " + convertedValue);
        break;
    case 3:
        convertedValue = value*0.3048;
        console.log("Feet to meter : " + convertedValue);
        break;
    case 4:
        convertedValue = value/0.3048;
        console.log("Meter to feet : " + convertedValue);
}