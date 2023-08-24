const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function removeDuplicate(arr){
    let temp = [];
    arr.forEach(element => {
        if(temp.indexOf(element)==-1){
            temp.push(element);
        }
    });
    return temp;
}
rl.question("Enter characters to know ascii value\n",function (string) {
    string= string.trim();
    let arr = string.split('');
    arr = removeDuplicate(arr);
    arr.forEach((item)=>{
        console.log(`${item} : ${item.charCodeAt(0)}`)
    });
    rl.close();
});