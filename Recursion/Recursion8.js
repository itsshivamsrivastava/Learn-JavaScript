function fibonacci(n) {
    if (n == 1 || n == 0) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function main() {
    let n = 50;
    console.log(fibonacci(n));
}
main();