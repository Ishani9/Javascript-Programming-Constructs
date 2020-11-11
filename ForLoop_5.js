let num = parseInt(process.argv[2]);
console.log("numer is : "+num);
let factorial = 1;
for(let i = 1; i <= num; i++){
    factorial = factorial * i;
}
console.log("Factorial is : "+ factorial);