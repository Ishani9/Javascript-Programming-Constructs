{
    let a = process.argv[2];
    let b = process.argv[3];
    let c = process.argv[4];
    console.log("Digits are: "+ a, b, c);
    
    let op1 = a + b * c;
    let op2 = a % b + c;
    let op3 = c + a / b;
    let op4 = a * b + c;
    console.log("After operations Digits are: "+ op1, op2, op3, op4);

    let max = op1;
    if(op2 > max)
        max = op2;
    if(op3 > max)
        max = op3;
    if(op4 > max)
        max = op4;
    console.log("Max is: "+max);

    let min = op1;
    if(op2 < min)
         min = op2;
    if(op3 < min)
        min = op3;
    if(op4 < min)
        min = op4;
    console.log("Min is: "+min);
}