function max(numbers) {
    if (numbers.length == 0 || numbers == undefined) {
        return undefined;
    }
    let i = 0;
    let currentLargest = numbers[0];
    while (i < numbers.length) {
        if (numbers[i] > currentLargest) {
            currentLargest = numbers[i];
        }
        i++;
    }
    return currentLargest;
}

function min(numbers) {
    if (numbers.length == 0 || numbers == undefined) {
        return undefined;
    }
    let i = 0;
    let currentMinimum = numbers[0];
    while (i < numbers.length) {
        if (numbers[i] < currentMinimum) {
            currentMinimum = numbers[i];
        }
        i++;
    }
    return currentMinimum;
}
console.log(max([1,2,3,4,5,6]));
console.log(min([1,2,3,4,5,6]));