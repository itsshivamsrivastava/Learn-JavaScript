function prodOfDegits(n){
    // if(n%10 == 0){ or
    if(n == 0){
        return 1;
    }
    return (n % 10) * prodOfDegits(Math.floor(n / 10));
}

function main(){
    let n = 55;
    // let n = 505;
    console.log(prodOfDegits(n));
}

main();

// let a = 1342;
// let b = 10;
// console.log(a % b);
// console.log(Math.floor(a / b));