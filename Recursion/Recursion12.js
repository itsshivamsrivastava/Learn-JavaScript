function fun(n) {
    if(n == 0){
        return;
    }
    console.log(n);
    // fun(n++);
    fun(--n);
}

function main(){
    fun(5);
}
main();