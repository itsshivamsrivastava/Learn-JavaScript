function f(i, sum){
    if(i<1){
        console.log(sum);
        return;
    }
    f(i-1, sum+i);
}

function main(){
    let n=3;
    let sum = 0
    f(n, sum);
}

main();