function palindromeChecker(num1,num2){
    let temp = 0;
    while(num1 > 0){
        let rem = num1 % 10;
        temp = temp * 10 + rem;
        num1 = Math.floor(num1 / 10);
    }
    if(temp == num2)
        return true;
    else 
        return false;
}

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
let isPalindrome = palindromeChecker(num1, num2);
console.log("Numbers: " + num1 + ", "+ num2);
console.log("Is number 2 a palindrome of number 1: "+ isPalindrome);