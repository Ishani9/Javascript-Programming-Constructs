
function primeChecker(num){
    for(let i = 2; i <= num; i++){
        if(i == num){
            console.log("Prime");
            return true;
        }
        if(num % i == 0){
           console.log("Not prime");
            return false;
        }
    }
}

function getPalindrome(num){
    let palindrome = 0;
    while(num > 0){
        let rem = num % 10;
        palindrome = palindrome * 10 + rem;
        num = Math.floor(num/10);
    }
    return palindrome;
}

let num = parseInt(process.argv[2]);
let isPrime = primeChecker(num);
if(isPrime==false)
    console.log("Number is not prime so not checking palindrome");
if(isPrime){
    console.log("Number is prime. Checking palindrome")
    let palindrome = getPalindrome(num);
    primeChecker(palindrome);
}
