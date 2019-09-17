function average(numbers) {
    let sum = 0
    numbers.forEach (num => {
        sum += num
    });
    return sum / numbers.length;
}

console.log (average ([1,2,3,4,5]))