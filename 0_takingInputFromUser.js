const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter data\n",function (string) {
    console.log('Entered string',string);
    rl.close();
})