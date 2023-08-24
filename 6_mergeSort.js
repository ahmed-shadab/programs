const fs = require('fs');
function merge(l,m,r,arr){
    const arr1 = arr.slice(l,m+1);
    const arr2 = arr.slice(m+1,r+1);
    const l1 = arr1.length;
    const l2 = arr2.length;
    let i=0,j=0 ;
    let newarr=[];
    while(i<l1 && j<l2){
        if(arr1[i]<arr2[j]){
            newarr.push(arr1[i]);
            i+=1;
        }
        else{
            newarr.push(arr2[j]);
            j+=1;
        }
    }
    while(i<l1){
        newarr.push(arr1[i]);
        i+=1;
    }
    while(j<l1){
        newarr.push(arr2[j]);
        j+=1;
    }
    let index = 0;
    for(i=l;i<=r;i++){
        arr[i]=newarr[index];
        index+=1;
    }
}
function mergeSort(l, r, arr){
    if(l<r){
        let m = Math.floor((l+r)/2);
        mergeSort(l, m, arr);
        mergeSort(m+1, r, arr);
        merge(l, m, r, arr);
    }
}
let data = fs.readFileSync('data.txt', 'utf-8');
data = data.split(' ');
data = data.map((item)=>Number(item));
// console.log(data.length);
// let arr = [3,2,4,1];
const startTime = Date.now();
mergeSort(0,data.length-1,data);
const endTime = Date.now();
console.log(data)
console.log((endTime-startTime)/1000);