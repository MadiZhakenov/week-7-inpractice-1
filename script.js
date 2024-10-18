function getSum(){
    var firstNumber = parseFloat(prompt("Enter the first number:"));
    var secondNumber = parseFloat(prompt("Enter the second number:"));

    var sum = firstNumber + secondNumber;

    alert("The sum of " + firstNumber + " and " + secondNumber + " is " + sum + ".");
}

function isSquare(){
    var number = parseFloat(prompt("Enter a number:"));
    
    var squareRoot = Math.sqrt(number);
    alert(squareRoot * squareRoot === number);
}

function greeting(){
    var name = prompt("Enter your name:");
    var surname = prompt("Enter your surname:");
    var age = prompt("Enter your age:");

    alert("Hello, my name is " + name + " " + surname + " and I am " + age + " years old.");
}

function getMin(){
    var firstNumber = parseFloat(prompt("Enter the first number:"));
    var secondNumber = parseFloat(prompt("Enter the second number:"));
    var thirdNumber = parseFloat(prompt("Enter the third number:"));

    var min = Math.min(firstNumber, secondNumber, thirdNumber);

    alert("The minimum number is " + min + ".");
}
