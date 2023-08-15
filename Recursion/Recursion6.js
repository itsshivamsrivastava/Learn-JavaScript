function swap(a, b){
    let temp = a;
    a = b;
    b = temp;
}

function f(i, arr, n){
    if(i>=n/2){
        return;
    }
    swap(arr[i], arr[n-i-1]);
    f(i+1, arr, n);
}

function main(){
    let n=5;
    let arr = [1,2,3,4,5];
    f(0, arr, n);
    for(let i=0; i<n; i++){
        console.log(arr[i]);
    }
}

main();