let num = parseInt(process.argv[2]);
console.log("numer is : "+num);
let harmonic = 0;
for(let i = 1; i <= num; i++){
    harmonic = harmonic + 1/i;
}
console.log("Harmonic Number is : "+ harmonic);