// code
const doArrow  = (value)=>{
    console.log(value)
}
doArrow('Передай 5')

function factorial(n) {
    debugger
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5));