let power = parseInt(process.argv[2]);
console.log("power = "+ power);
let count = 1;
let ans = 1;
while(ans <= 128 && count <= power){
    ans = ans * 2;
    console.log(ans);
    count++;
}
