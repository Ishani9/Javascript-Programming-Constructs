{
    var num = parseInt(process.argv[2]);
    console.log("Number is : " + num);
    var result = "";

    switch (num) {
        case 1:
            result = "unit";
            break;
        case 10:
            result = "ten";
            break;
        case 100:
            result = "hundred";
            break;
        case 1000:
            result = "thousand";
            break;
        case 10000:
            result = "ten thousand";
            break;
        case 100000:
            result = "hundred thousand";
            break;
        default:
            console.log("Enter a valid number...");
            result = "none"     
    }
    console.log("Result is : " + result);
}