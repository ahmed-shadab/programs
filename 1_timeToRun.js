//this is when running in command line using node
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let n = "";
rl.question("Enter number\n", function (string) {
    n = string;
    let startTimeStamp = Date.now();
    for(let i=0;i<n;i++){}// while running O(n) algorithm
    let endTimeStamp = Date.now();
    console.log(`Time taken by code to run :  ${(endTimeStamp-startTimeStamp)/1000} seconds`);
    // in i5,10th gen ,8gb ram system
    //100000 - 0.002 seconds
    //1000000 - 0.009 seconds
    //100000000 - 3.72 seconds
    rl.close();
});