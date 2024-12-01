// Sorting Algorithm Implementation using Bubble Sort

 readline = require("readline");

// Create an interface for input/output
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Bubble Sort function
function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// User prompt
function getArrayInput() {
    rl.question(
        "Enter numbers separated by spaces to sort them (e.g., 5 3 8 2): ", // Tells users what and how to input the numbers
        (input) => {
             numbers = input.split(" ").map(Number);
            if (numbers.some(isNaN)) {
                console.log("Invalid input. Please enter only numbers.");
                getArrayInput(); // Prompt again
            } else {
                console.log(`Original Array: [${numbers}]`);
                sortedArray = bubbleSort(numbers);
                console.log(`The sorted array is: [${sortedArray}]`);
                rl.close();
            }
        }
    );
}

// Start the process
getArrayInput();
