function f(i, n) {
    if (i > n){
        return;
    }
    f(i + 1, n);
    // console.log("Raj");
    console.log(i);
}

function main(){
    let n = 3;
    f(1, n);
}

main();