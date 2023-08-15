function sum(n) {
    if (n <= 1) {
        return 1;
    }
    return n + sum(n - 1);
}

function main() {
    let n = 5;
    console.log(sum(n));
}

main();