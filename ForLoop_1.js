let power = parseInt(process.argv[2]);
console.log("power = "+ power);
let ans = 1;

for(let i = 0; i < power; i++){
    ans = ans * 2;
    console.log(ans);
}