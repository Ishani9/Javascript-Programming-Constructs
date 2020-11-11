
let start = parseInt(process.argv[2]);
let end = parseInt(process.argv[3]);
console.log("Range Start : "+start);
console.log("Range End : " +end);
var primes = new Array();

if (end > start){
    if(start==1)
        console.log("Neither");
    else{
        for(let j = start; j <= end; j++){
            for(let i = 2; i <= j; i++){
                if(i == j){
                    //console.log(j+ " is Prime");
                    primes.push(j);
                    break;
                }
                if(j % i == 0){
                    //console.log(j+ " is Not prime");
                    break;
                }  
            }  
        }
    }
    console.log("PRIME NOS ARE : ");
    for (let i of primes) {
        console.log(i);
    }

}
else
    console.log("WRONG RANGE..")
