let digit1 = Math.floor(Math.random()*1000);
let digit2 = Math.floor(Math.random()*1000);
let digit3 = Math.floor(Math.random()*1000);
let digit4 = Math.floor(Math.random()*1000);
let digit5 = Math.floor(Math.random()*1000);
let max = digit1;
let min = digit1;

//max:
if(digit2 > max)
max = digit2;
if(digit3 > max)
max = digit3;
if(digit4 > max)
max = digit4;
if(digit5 > max)
max = digit5;

//min:
if(digit2 < min)
min = digit2;
if(digit3 < min)
min = digit3;
if(digit4 < min)
min = digit4;
if(digit5 < min)
min = digit5;

console.log("Digits are : "+digit1, digit2, digit3, digit4, digit5);
console.log("MIN is : "+ min);
console.log("MAX is : "+ max);