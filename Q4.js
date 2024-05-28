// Function to find and store duplicates, and remove duplicates from the original array
function processArray(arr) {
    let duplicates = [];
    let uniqueElements = new Set();
    let originalArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (uniqueElements.has(arr[i])) {
            duplicates.push(arr[i]);
        } else {
            uniqueElements.add(arr[i]);
            originalArray.push(arr[i]);
        }
    }

    return { duplicates, originalArray };
}

// Take input from user and convert it to an array of numbers
let userInput = prompt("Enter numbers separated by commas:");
let arr = userInput.split(',').map(Number);

// Process the array to find duplicates and remove them from the original array
let result = processArray(arr);

// Output the results
console.log("Original array after removing duplicates:", result.originalArray);
console.log("Array of duplicates:", result.duplicates);
