const readline = require("readline");
const fs = require('fs');
function takeInput(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    rl.question("Enter minimum num and maximum num\n",function (string) {
        console.log('Entered string',string);
        let [min,max] = string.split(' ');
        min = Number(min);
        max = Number(max);
        console.log(oneRandom(min, max));
        console.log(nRandoms(min, max, 10));
        rl.close();
    })
}

function oneRandom(min, max){
    return Math.floor(Math.random()*(max-min))+min;
}

function nRandoms(min, max, n){
    let numbers=[];
    for(let i=0;i<n;i++){
        numbers.push(oneRandom(min, max));
    }
    fs.writeFileSync('data.txt',numbers.join(' '));
    return numbers

}
nRandoms(0,100,100)
module.exports={nRandoms:nRandoms,oneRandom:oneRandom};