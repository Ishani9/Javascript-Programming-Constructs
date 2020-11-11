{
    let day = process.argv[2];
    let month = process.argv[3];
    console.log("Day is : "+ day+" Month is : "+ month);

    if(day <= 31 && day >= 1 && month <= 12 && month >= 1){
        if(day > 20 && month == 3 || month ==4 || month ==5 || day < 20 && month == 6)
            console.log("True");
        else 
            console.log("False");
    }
    else 
        console.log("Invalid Date");
}