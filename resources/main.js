// Створи функцію, яка буде виводити кількість переданих їй аргументів.

function quantityArgument (a, b) {
    return a + b;
}
alert(quantityArgument(12,2))







// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге; 
// 1 - якщо перше число більше, ніж друге; 
// 0 - якщо числа рівні.
let firstNumber2;
let secondNumber2;
function numberEquation (a, b) {
    if (a < b) {
        return alert('-1');
    } else if (a > b) {
        return alert('1');
    } else {
        return alert('0');
    }
};
firstNumber2 = prompt(`write first number`);
secondNumber2 = prompt(`write second number`);
numberEquation(secondNumber2, firstNumber2);








// Напиши функцію, яка обчислює факторіал переданого їй числа.
function numberFactorial (a) {
    if (a === 0) {
        return 1;
    }
    return a * numberFactorial(a-1);
}
let factorial = prompt(`factorial of what number do you want to know?`);
alert(numberFactorial(factorial));






// Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function diferendNumberInOne (a, b, c) {
    return String(a) + String(b) + String(c);
}
const firstNumber = prompt(`enter first number`);
const secondNumber = prompt(`enter second number`);
const thirdNumber = prompt(`enter third number`);
alert(diferendNumberInOne(firstNumber, secondNumber, thirdNumber));




// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
let result;
function area (c, d) {
    if (d === false) {
        result = c * c;
    } else {
        result = c * d
    }
    return result
}
const firstSide = prompt(`write first side`);
const secondSide = prompt(`write second side`);
alert(area(firstSide, secondSide));
// не зрозумів чому тут при не заданому останньому параметрі виводить нуль а не множить той параметр що є сам на себе