{
    let year = process.argv[2];
    console.log("Year is "+ year);
    
    if(year % 4 == 0){
        if(year % 100 == 0){
            if(year % 400 == 0)
                console.log("Leap Year");
            else
                console.log("Not a leap year");
        }
        else 
            console.log("Leap Year");
    }
    else 
    console.log("Not a leap year");
}