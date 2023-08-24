const randomNumbers = require('./4_randomNumbers');
// const fs = require('fs')
let arr = randomNumbers.nRandoms(0,100,1000);
// let arr = fs.readFileSync('data','utf-8');
// arr = arr.split(' ');
let i = randomNumbers.oneRandom(0,10);
let sort = require('./3_bubble_sort');
sort.bubbleSort(arr);
function find(l, h, arr, elem){
    if(l>h)
        return -1
    else{
        let m = Math.floor((l+h)/2);
        if(arr[m]==elem)
            return m
        else if(arr[m]>elem)
            return find(l, h-1, arr, elem)
        else
            return find(m+1, h, arr, elem)
    }
}
// arr.sort();
console.log('arr',arr);
console.log('elem',arr[i]);
let startTime = Date.now();
console.log(find(0,arr.length,arr,arr[i]));
let endTime = Date.now();
console.log('Time:', (endTime-startTime)/1000);