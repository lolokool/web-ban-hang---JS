// scope & closure
//====> quest 1
// let fullName;
// function hello() {
//   fullName = "hello";
// }
// hello();
// console.log(fullName);
// function hello() {
//     let fullName;
//     fullName = "hello";
//   }
// hello();
// function hello() {
//     let fullName = "hello";
//     console.log(Hi);
//     function Hi() {
//         return (fullName);
//     }
// }
// hello();
// ====> quest 2
// function printName() {
//     let myName = "TS";
//     console.log('hello'+ myName);
// }
// printName();
// ====> quest 3
// function getGreeting(firstName:string,lastName:string) {
//    let greeting = function () {
//         return firstName+ '' +lastName;
//     }
//     return greeting;
// }
// console.log(getGreeting("nguyen","a")());
// ====> quest 4
// var time = function (i) {
//   setTimeout(function time() {
//     console.log(i);
//   }, i * 1000);
// };
// for (var i = 1; i < 7; i++) {
//   time(i);
// }
// ====> quest 5
// function createMathFunction(param) {
//   if (param === "square") {
//     return function (i) {
//       return i * i;
//     };
//   } else if (param === "sqrt") {
//     return function (i) {
//       return Math.sqrt(i);
//     };
//   }
// }
// const square = createMathFunction("square");
// const sqrt = createMathFunction("sqrt");
// console.log("3 bình phương là:" + square(3));
// console.log("căn bậc 2 của 9 là:" + sqrt(9));
// ====> quest 6
// function creatPerson() {
//     let id = 0;
//     let name;
//     return function(){
//         this.id = ++id ;
//         this.setId = function(id){
//             this.id = id;
//         },
//         this.getId = function(){
//             return this.id;
//         }
//         this.setName = function(value){
//             name = value;
//         },
//         this.getName = function(){
//             return name;
//         }
//     }
// }
// const person = creatPerson();
// person.setName('AAAA');
// console.log('Name:'+ person.getName());
// console.log('ID:'+ creatPerson.);
//  2.variable
// ====> quest 1
// a
// var abs = "bbb";
// function printName() {
//   abs = "aaa";
//   console.log("====>abs", abs);
// }
// printName();
// b
// function printName() {
//   var ads= 'bbb';
//   ads = "asdas";
//   console.log("===>ads", ads);
// }
// printName();
// c
// thay đổi được giá trị của biến.
// ====> quest 2
// a
// let abs='bbb';
// function printName() {
//   abs = "aaa";
//   console.log("====>abs", abs);
// }
// printName();
// b
// function printName() {
//   let ads='bbb';
//   ads = "asdas";
//   console.log("===>ads", ads);
// }
// printName();
// c
// thay đổi được giá trị của biến.
// ====> quest 3
// a
// const abs='bbb';
// function printName() {
//   abs = "aaa";
//   console.log("====>abs", abs);
// }
// printName();
// b
// function printName() {
//   const ads='bbb';
//   ads = "asdas";
//   console.log("===>ads", ads);
// }
// printName();
// c
// k thay đổi được giá trị của biến.
// ====> quest 4
// const array: number[] = [1, 2, 3];
// array.push(4);
// console.log("newArray:", array);
// 3.Destructuring
// ====> quest 1
// var date: number[] = [2020, 12, 8];
// var [year, month, day] = date;
// console.log('year:' ,year);
// console.log('month:', month);
// console.log('day:', day);
// ====> quest 2
// const person = {
//   firstName: "nguyen",
//   lastName: "a",
//   age: 20,
// };
// let a = person.firstName;
// let b = person.lastName;
// let c = person.age;
// console.log("firstName:", a);
// console.log("lastName:", b);
// console.log("age:", c);
// 4.Template String.
// ====> quest 1
// let fullName = "AAA";
// let age = 29;
// const text: string = `"Tôi tên là ${fullName}, năm nay ${age} tuổi"`;
// console.log("text:", text);
// ====> quest 2
// let a = 5;
// let b = 20;
// let sum = a + b;
// const text = `"Tổng của ${a} và ${b} là ${sum}"`;
// console.log("text:", text);
// 5....operator
// ====> quest 1
// let evenNumber: number[] = [2, 4, 6, 8, 10];
// let oddNumber: number[] = [...evenNumber, 5, 7, 9];
// console.log(oddNumber);
// ====> quest 2
// let newNumber: number[] = [...oddNumber];
// console.log("newNumber:", newNumber);
// ====> quest 3
// let cold = ["autum", "winter"];
// let warm = ["spring", "summer"];
// let seson = [...cold, ...warm];
// console.log("seson:", seson);
// 6.... Arrow function.
// ====> quest 1
// a => a + 100;
// // ====> quest 2
// (a,b) => a + b + 100;
// (a,b) => {
//     let chuck = 42;
//     return a + b + chuck;
// }
// let bob = a => a +100;
// 7.HOF function.
// ====> quest 1
// let sum = (a,b) => a + b;
// let minus = (a,b) => a - b;
// let multiply = (a,b) => a * b;
// let caculate = (a,b,operation)=>{
//     let result = operation(a,b);
//     console.log('Kết quả của ',operation(a,b),'là ',result);
// }
// caculate(1,2,sum);
// caculate(2,1,minus);
// caculate(1,2,multiply);
// 8.Reduce function.
// let numArray = [10, 20, 30];
// let total = numArray.reduce((total, item) => total + item, 0);
// console.log("tổng là:", total);
// 9.Currying function.
// function multiply(a) {
//   return (b) => {
//     return (c) => {
//       return a * b * c;
//     };
//   };
// }
// let result = multiply(1)(2)(3);
// console.log(result);
// 10.Parameter
// ===> quest 1
// function multiply(a, b) {
//   return a * b;
// }
// console.log(multiply(5, 3));
// ===> quest 2
function infinity(...number) {
    console.log("tham số:", number);
}
infinity(5);
infinity(5, 3);
infinity(5, 3, 2);
// ===> quest 3
