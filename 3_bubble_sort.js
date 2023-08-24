const readline = require("readline");
const fs = require('fs');
function takeInput(){
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    
    rl.question("Enter data\n",function (string) {
        rl.close();
        string = string.trim();
        let arr = string.split(' ');
        let startTime = Date.now();
        arr = arr.map((item)=>Number(item));
        sort(arr);
        let endTime = Date.now();
        console.log('sorted array',arr);
        console.log('Time taken in milli seconds',(endTime-startTime)/1000);
    })    
}

function sort(arr){
    let size = arr.length;
    for(let i=0;i<size-1;i++){
        for(let j=0;j<size-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}

let data = fs.readFileSync('data.txt','utf-8');
data = data.split(' ');
data = data.map((item)=>Number(item));
let startTime = Date.now();
sort(data);
let endTime = Date.now();
console.log(data);
console.log((endTime-startTime)/1000);

module.exports={bubbleSort:sort};