function fact(n) {
    if (n == 0) {
        return 1;
    }
    return n * fact(n - 1);
}

function main() {
    let n = 4;
    console.log(fact(n));
}

main();