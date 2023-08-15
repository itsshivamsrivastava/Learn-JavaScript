// Print name N times using recursion

function f(i, n) {
    if (i > n) {
        return;
    }
    console.log(i);
    f(i + 1, n);
}

function main() {
    let n = 3;
    f(1, n);
}
main();