// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

let sum = 0;
function reverse(n){
    if(n == 0){
        return;
    }

    let remender = n % 10;
    sum = sum * 10 + remender;
    reverse(Math.floor(n/10));
}

function main(){
    reverse(1234)
    console.log(sum);
}

main();