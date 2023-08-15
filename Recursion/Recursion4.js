function f(n){
    if(n==0){
        return 0;
    }
    return n + f(n-1); // f(n-1) is the recursive call
    // 3 + f(3-1) --> {3 + f(3-1)} + {2 + f(2-1)} + {1 + f(1-1)} => {3 + f(2)} + {2 + f(1)} + {1 + f(0)}
    // {3 + 2} + {2 + 1} + {1 + 0} => {5} + {3} + {1} => {6}    Ans.
}

function main(){
    let n=3;
    console.log(f(n));
}

main();