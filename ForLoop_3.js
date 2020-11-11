 { 
    let num = parseInt(process.argv[2]);
    console.log("Number is: "+ num);
         
    for(let i = 2; i <= num; i++){
        if(i == num){
            console.log("Prime");
            break;
        }
        if(num % i == 0){
            console.log("Not prime");
            break;
        }
    }
 }