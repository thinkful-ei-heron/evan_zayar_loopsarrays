function repeat(fn, n) {
    for (let i=0; i<n; i++) {
        fn();
    }
}

function hello() {
    console.log('Hello world');
}

function goodbye() {
    console.log('Goodbye world');
}

repeat(hello, 5);
repeat(goodbye, 5);

function filter(arr, fn) {
    let newArray = [];
    for (let i=0; i<arr.length; i++) {
        if (fn(arr[i]) == true) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES



function hazardWarningCreator (typeOfWarning) {
    let warningCounter = 0;
    return function (location) {
        warningCounter++;
        console.log(`Danger! There is a ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
        console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
    }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const snowWarning = hazardWarningCreator('Snow on the Road');
const floodWarning = hazardWarningCreator('Flood on the Road');

rocksWarning ('Main St and Pacific Ave');
rocksWarning ('Ceninela Ave and Olympic Blvd');
rocksWarning ('Washington St and 5th Ave');



let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]]
let newTurtleMovements = turtleMovements.filter (movement => movement [0] >= 0 && movement [1] >= 0);

let steps = [];
let totalSteps = newTurtleMovements.map (movement => steps.push (movement [0] + movement [1]));
console.log (steps)

let counter=1
steps.forEach (step => {
    console.log(`Movement # ${counter}: ${step} step(s)`);
    counter++;
});


let array = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest'.split(' ')
let accumulated = '';
let reducefunction = (accumulated, current) => {
    if (current.length == 3) {
        return accumulated += ' '
    } else {
        return accumulated += current[current.length-1].toUpperCase();
    }
}
console.log(array.reduce(reducefunction, accumulated));
