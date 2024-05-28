// Function to check if a number exists in an array
function containsNumber(arr, number) {
    return arr.includes(number);
}

// Function to check the presence of the number 4 in both arrays
function checkNumberInArrays(arr1, arr2) {
    let array1Contains4 = containsNumber(arr1, 4);
    let array2Contains4 = containsNumber(arr2, 4);

    if (array1Contains4 && array2Contains4) {
        console.log("The number 4 exists in both arrays.");
    } else if (array1Contains4) {
        console.log("The number 4 exists in the first array.");
    } else if (array2Contains4) {
        console.log("The number 4 exists in the second array.");
    } else {
        console.log("The number 4 does not exist in either array.");
    }
}

// Take input from user for the first array
let userInput1 = prompt("Enter numbers for the first array separated by commas:");
let arr1 = userInput1.split(',').map(Number);

// Take input from user for the second array
let userInput2 = prompt("Enter numbers for the second array separated by commas:");
let arr2 = userInput2.split(',').map(Number);

// Check the presence of the number 4 in both arrays
checkNumberInArrays(arr1, arr2);
