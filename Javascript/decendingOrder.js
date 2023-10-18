const inputString = prompt("Enter a list of numbers separated by commas:");
if (inputString === null) {
    alert("User canceled the input.");
} else {
    const inputArray = inputString.split(",").map(Number);
 
    if (inputArray.some(isNaN)) {
        alert("Invalid input. Please enter a list of valid numbers separated by commas.");
    } else {
        inputArray.sort(function(a, b) {
            return b - a;
        });

        alert("Sorted in descending order: " + inputArray);
    }
}
