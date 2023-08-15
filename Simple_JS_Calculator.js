const addition = function (x, y){
    return x + y;
};

const subtraction = function (x, y){
    return x - y;
};

const multiplication = function (x, y){
    return x * y;
};

const division = function (x, y){
    return x / y;
};

const remainder = function (x, y){
    return x % y;
};

const percentage = function (x){
    return x / 100;
};

const square1 = function (x){
    return x ** 2;
};

const square2 = function (y){
    return y ** 2;
};

const cube = function (x){
    return x ** 3;
};

const squareRoot = function (x){
    return x ** (1/2);
};

const cubeRoot = function (x){
    let result = x ** (1/3);
    return `Cube root of ${x}: ${result}`;
};

const powerOf = function (x, power){
    let result = 1;
    for (let i = 0; i < power; i++){
        result = result * x;
    }
    return `${x}^${power}: ${result}`;
};

const factorial = function (x){
    let result = 1;
    for (let i = 1; i <= x; i++){
        result = result * i;
    }
    return `Factorial of ${x}: ${result}`;
};

let a = 10;
let b = 5;

console.log(`Addition of ${a} and ${b}: ${addition(a, b)}`);
console.log(`Subtraction of ${a} and ${b}: ${subtraction(a, b)}`);
console.log(`Multiplication of ${a} and ${b}: ${multiplication(a, b)}`);
console.log(`Division of ${a} and ${b}: ${division(a, b)}`);
console.log(`Remainder of ${a} and ${b}: ${remainder(a, b)}`);
console.log(`Percentage of ${a}: ${percentage(a)}`);
console.log(`Square of ${a}: ${square1(a)}`);
console.log(`Square of ${b}: ${square2(b)}`);
console.log(`Cube of ${a}: ${cube(a)}`);
console.log(`Cube of ${b}: ${cube(b)}`);
console.log(`Square root of ${a}: ${squareRoot(a)}`);
console.log(cubeRoot(a));
console.log(powerOf(a, b));
console.log(factorial(a));