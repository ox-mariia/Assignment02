let x = Number(prompt("Enter the first number between 1 and 100"));
let y = Number(prompt("Enter the second number between 1 and 100"));
if (x > y) {
    window.document.write("The larger number is " + x);
} else if (x === y) {
    window.document.write("The numbers are equal.");
} else {
    window.document.write("The larger number is " + y);
}