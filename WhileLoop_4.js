const LOSS = 0;
const WIN = 1;
let lossCount = 0;
let gainCount = 0;
let balance = 100;
let totalBets = 0;

while(balance > 0 && balance < 200){
    let toss = Math.floor(Math.random() * 10) % 2;
    switch(toss){
        case LOSS:
            balance--;
            lossCount++;
            break;
        case WIN:
            balance++;
            gainCount++;
            break;
    }
    totalBets++;
}
console.log("LOSS count : " + lossCount + "  WINS : " + gainCount + " Total bets : " + totalBets);
console.log("Final balance = "+ balance);
