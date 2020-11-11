let num = parseInt(process.argv[2]);
console.log("NUMBER IS : " + num);
let n = 50;
let start = 0;
let end = 100;

while(n != num){
    //console.log(n);
    if(n == num)
        console.log("Num is FOUND: "+ num);
    else if(n > num){
        end = n;
        n = Math.floor((start + end) / 2);
    }
    else if(n < num){
        start = n;
        n = Math.floor((start + end) / 2);
    }
}
