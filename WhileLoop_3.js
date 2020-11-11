const HEAD = 0;
let hcount = 0;
let tcount = 0;

while(hcount < 11 && tcount < 11){
    let toss = Math.floor(Math.random() * 10) % 2;
    if(toss == HEAD){
        console.log("Heads");
        hcount++;
    }
    else{
        console.log("Tails");
        tcount++;
    }
}
console.log("Heads count : " + hcount + "  tails : " + tcount);