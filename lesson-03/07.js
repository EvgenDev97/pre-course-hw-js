const numbers = [
    [1, 2, 3, 4, 5],
    [11, 20, 33, 40, 55],
    [111, 200, 333, 400, 555],
];

let result = []

for (let i = 0; i < numbers.length; i++) {
    result.push(numbers[i].filter((i) => i % 2 === 0))
}
console.log(result)