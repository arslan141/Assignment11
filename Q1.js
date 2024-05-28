// Function to calculate GCD
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

// Function to calculate the required values from the array
function calculateArrayStats(arr) {
    let sumOddPlaces = 0;
    let sumEvenPlaces = 0;
    let countOddPlaces = 0;
    let countEvenPlaces = 0;
    let totalSum = 0;

    for (let i = 0; i < arr.length; i++) {
        totalSum += arr[i];
        if (i % 2 === 0) { // Even index (0-based index)
            sumEvenPlaces += arr[i];
            countEvenPlaces++;
        } else { // Odd index
            sumOddPlaces += arr[i];
            countOddPlaces++;
        }
    }

    let difference = sumOddPlaces - sumEvenPlaces;
    let average = totalSum / arr.length;
    let gcdValue = gcd(sumOddPlaces, sumEvenPlaces);

    console.log("Difference between sums at odd and even places: ", difference);
    console.log("Number of elements at odd places: ", countOddPlaces);
    console.log("Number of elements at even places: ", countEvenPlaces);
    console.log("Average of all elements: ", average.toFixed(2));
    console.log("GCD of sums at odd and even places: ", gcdValue);
}

// Take input from user (you can replace this with any array for testing)
let userInput = prompt("Enter numbers separated by commas:");
let arr = userInput.split(',').map(Number);

calculateArrayStats(arr);
