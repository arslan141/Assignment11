// Function to flatten a nested array
function flattenArray(arr) {
    let result = [];

    arr.forEach(element => {
        if (Array.isArray(element)) {
            result = result.concat(flattenArray(element));
        } else {
            result.push(element);
        }
    });

    return result;
}

// Example usage
let nestedArray = [1, [2, 3], [4, [5, 6]], 7, [8, [9, [10]]]];
let flatArray = flattenArray(nestedArray);
console.log(flatArray);
