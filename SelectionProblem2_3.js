{
    let num = process.argv[2];
    let rem;
    console.log("Number is : " + num);   

    while(num>0){
        rem = num % 10;
        console.log(rem);
        num = num/10;
        num = Math.floor(num);
    }
}