let num = parseInt(process.argv[2]);
console.log("Factors are : ");

for(let i = 1; i <= Math.floor(Math.sqrt(num)); i++){
    if(num % i == 0){
        console.log(i);
        console.log(num / i);
    }
}

