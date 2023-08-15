function sumOfDegits(n){
    if(n == 0){
        return 0;
    }
    return (n % 10) + sumOfDegits(Math.floor(n / 10));
}

function main(){
    let n = 1342;
    console.log(sumOfDegits(n));
}

main();

// let a = 1342;
// let b = 10;
// console.log(a % b);
// console.log(Math.floor(a / b));