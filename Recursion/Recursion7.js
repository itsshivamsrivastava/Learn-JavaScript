
function f(i,s){
    if(i>=s.length / 2){
        return true;
    }
    if(s[i] != s[s.length-i-1]){
        return false;
    }
    return f(i+1,s);
}

function main(){
    let s = "MADSM";
    console.log(f(0,s));
}

main();