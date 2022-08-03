"use strict"

// 1
// const array = [2, 18, 33, 40, 1, 0, -3, 10];
// let sum = 0;
// for (let element of array) {
//     sum += element
// }
// let mean = sum / array.length;
// alert(`Сумма: ${sum}.\nСреднее арифметическое: ${mean}.`);


// 2
// const array = [2, 'olol', 3, 10, true, null, 11, '100'];
// let sum = 0;
// for (let element of array) {
//     if (typeof element === 'number'){
//     sum += element
//     }
// }
// alert(sum);


// 3
// const array = new Array(10);
// for (let i = 0; i < array.length; i++) {
//     array[i] = (Math.random() * 100).toFixed(2);
// }
// console.log(array);
// for (let element of array) {
//     console.log(Math.pow(element, 5));
// }



// 4
// const array = [];
// for (let i = 0; i < 10; i++){
//     array[i] = [];
//     for (let j = 0; j < 10; j++) {
//         let x = i + 1;
//         let y = j + 1;
//         array[i][j] = `${x} * ${y} = ${(x) * (y)}`;
//     }
// }
// console.log(array);


// 5
// const user = {};
// user.name = prompt(`Как тебя зовут?`, `Реджина`);
// user.surname = prompt(`Введи фамилию`, `Фаланджи`);
// user.position = prompt(`Кем ты работаешь`, `доктором`);
// alert(`Привет, ${user.name} ${user.surname}. Как долго ты работаешь ${user.position}?`);


// 6
// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }
// console.log(isEmpty({})); // true
// console.log(isEmpty({ name: 'John' })); // false
// console.log(isEmpty({ age: 20 })); // false