"use strict";
// const promptSync = require("prompt-sync")();
// let userName = promptSync("Enter Your Nama ");
// console.log("Enter your name ", userName);
// console.log(userName);
// .....................................
// {32 , 32 , 38 , 45}
// ////////////////////////FUNCTIONS
// function 1 
//  no pass no return
function greeting1() {
    // console.log("Hi, My Name is Hamza Tariq");
}
greeting1();
// function 2
//  value pass but  no return
function greeting2(userName) {
    // console.log(`Hi, My Name is ${userName}`);
}
greeting2("Hamza Tariq");
// function 3
//  value pass return
// function greeting3(userName:string){
//     let val = `Hi, My Name is ${userName}`;
//     return val;
// }
// let result = greeting3("Hamza Tariq");
// console.log(result);
// ///////////////////////////////////////////
function findResult(balance, minBalance, maxBalance) {
    let calculate = balance + minBalance + maxBalance;
    if (calculate <= 300 && calculate > 250) {
        return "A+";
    }
    else if (calculate <= 250 && calculate > 220) {
        return "B";
    }
    else if (calculate <= 220 && calculate > 180) {
        return "C";
    }
    else if (calculate <= 180 && calculate > 150) {
        return "D";
    }
    else {
        return "Low";
    }
}
let result = findResult(60, 60, 10);
// console.log(result);
let fruits = ["Apple", "Banana", "Peach", "Mango"];
// Remove from last
fruits.pop();
// ADD in the end
fruits.push("a");
// remove from first
fruits.shift();
// Add in the first
fruits.unshift("as");
// Add value in any inde (index , remove(no) , value)
fruits.splice(2, 0, "2");
fruits.splice(3, 1, "2");
console.log(fruits);
fruits.splice(0, 2);
console.log(fruits);
