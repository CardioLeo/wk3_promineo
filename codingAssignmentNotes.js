// Author: William Z Chadwick
// Date Created: 08/21/22
// Date Modified: 08/21/22
// Description: A place to keep notes as I prep to complete the coding assignment steps.


//---
//***
//---

console.log("Start process for challengeOne...\n...\n...\n... \n \n \n \n\n");

//ages.shift();
//1.a-c.
//

function challengeOne() {
const ages = [3, 9, 23, 64, 2, 8, 28, 93];
//step 1.a.:
console.log(ages[ages.length -1] - ages[0]);
//age 1.b.:
ages.push(67);
console.log(ages[ages.length -1] - ages [0]);
//age 1.c.:
let sum = 0
for (let i = 0; i < ages.length; i++) {
        sum=+ages[i];
}
console.log(Math.round(sum/ages.length));
}

challengeOne();


//---
//***
//---

console.log("Start process for challengeTwo...\n...\n...\n... \n \n \n \n\n");

//2.
//


function challengeTwo() {
const names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
let sum = 0;
for (let i = 0; i < names.length; i++) {
        sum += names[i].length;
}
console.log(sum / names.length);
let next = "";
for (let i = 0; i < names.length; i++) {
        next += names [i] + " ";
}
console.log(next.trim()); //trim takes away leading or ending spaces, so that's nice
}

challengeTwo();


//---
//***
//---

console.log("Start process for challengeThree...\n...\n...\n... \n \n \n \n\n");

//3.
//


const shades_of_red = ["scarlet", "maroon", "purple", "reddish-purple", "reddish-pink", "pinkish", "red"];
const red=shades_of_red[shades_of_red.length - 1];
function challengeThree() {
console.log(red);
return 0;
}

challengeThree();


//---
//***
//---

console.log("Start process for challengeFour...\n...\n...\n... \n \n \n \n\n");

//4.
//


function challengeFour() {
console.log(shades_of_red[0]);
return 0;
}

challengeFour();


//---
//***
//---

console.log("Start process for challengeFive...\n...\n...\n... \n \n \n \n\n");

//5.
//


const namesArraySun = ["Kellog", "Samantha", "Katlyne"];
const namesArrayMon = ["Kelly", "Sam", "Kate"];
const namesArrayTue = ["Joe", "Curly", "Mo", "Carly", "Bob"];
const namesArrayWed = ["Carson", "Carsen", "Carlsen", "Carlson", "Carl's One Son"];
const namesArrayThu = ["Jam", "Bam", "Boo", "Bla"];
const namesArrayFri = ["Mike", "Hal",];
const namesArraySat = ["Ike"];

function challengeFive(arr) {
namesLength = [];
let i = 0;    
while (i < arr.length) {
    namesLength[i] = arr[i].length;
    i++;
}
    console.log(arr);
    console.log(namesLength);
    return 0;
}
challengeFive(namesArraySun);
challengeFive(namesArrayMon);
challengeFive(namesArrayTue);
challengeFive(namesArrayWed);
challengeFive(namesArrayThu);
challengeFive(namesArrayFri);
challengeFive(namesArraySat);


//---
//***
//---

console.log("Start process for challengeSix...\n...\n...\n... \n \n \n \n\n");

//6.
//


function challengeSix(arr) {
let namesLength = [];
let i = 0;
let sum = 0;
while (i < arr.length) {
        sum = sum + arr[i].length;
        namesLength[i] = arr[i].length;
        i++;
}
    console.log(arr);
    console.log(namesLength);
    console.log(sum);
    return 0;
}

//remember, the following function calls only work if those arrays exist in the document;

challengeSix(namesArraySun);
challengeSix(namesArrayMon);
challengeSix(namesArrayTue);
challengeSix(namesArrayWed);
challengeSix(namesArrayThu);
challengeSix(namesArrayFri);
challengeSix(namesArraySat);


//---
//***
//---

console.log("Start process for challengeSeven...\n...\n...\n... \n \n \n \n\n");

//7.
//


function ladyNYSnow(word, n) {
        let out = word;
        let in_out = "";
        for (let i = 0; i < n; i++) {
            in_out = in_out + word;
        }
    console.log(in_out);
    return 0;
}

let blarg = "Hello";
ladyNYSnow(blarg, 3);
ladyNYSnow("fellowshipofthe", 23);
ladyNYSnow("helo", 123);


//---
//***
//---

console.log("Start process for challengeEight...\n...\n...\n... \n \n \n \n\n");

//8.
//


function challengeEight(firstName, lastName) {
        let fullName = firstName + " " + lastName;
        console.log(fullName);
        return 0;
}

firstName = "Rascal";
lastName = "Scarlet";
challengeEight(firstName, lastName);


//---
//***
//---

console.log("Start process for challengeNine...\n...\n...\n... \n \n \n \n\n");

//9.
//


function challengeNine(arrNum) {
    let sum = 0;
    let i = 0;
    while (i < arrNum.length) {
            sum = sum + arrNum[i];
            i++;
            if (sum > 100) {
    console.log("Wait! ... Now it's " + true + " - "+ sum + " is greater than 100!! Congratulations!");
    } else {
    console.log("Unfortunately, " + sum + " is the sum so far, and that is smaller than 100!!");
}}
return 0;
}
const arrNumbersSafeForMe = [23, 25, 46, 231];
challengeNine(arrNumbersSafeForMe);


//---
//***
//---

console.log("Start process for challengeTen...\n...\n...\n... \n \n \n \n\n");

//10.
//


function challengeTen(arrNum) {
    let sum = 0;
    let i = 0;
    while (i < arrNum.length) {
            sum = sum + arrNum[i];
            i++;
    }
    console.log(sum / arrNum.length);
    return 0;
}
const arrGNumbSaf = [15, 25, 5, 15];
challengeTen(arrGNumbSaf);


//---
//***
//---

console.log("Start process for challengeEleven...\n...\n...\n... \n \n \n \n\n");

//11.
//




function challengeEleven(arrNum1, arrNum2) {
    let sum1 = 0;
    let i1 = 0;
    while (i1 < arrNum1.length) {
            sum1 = sum1 + arrNum1[i1];
            i1++;
    }

    let num1 = sum1 / arrNum1.length;

    let sum2 = 0;
    let i2 = 0;
    while (i2 < arrNum2.length) {
            sum2 = sum2 + arrNum2[i2];
            i2++;
    }
    let num2 = sum2 / arrNum2.length;

    console.log(num1 > num2);
    console.log(num1 + " is greater than " + num2);
    return 0
}
const arrGNumbSaf1 = [8, 2, 456, 231, 56];
const arrGNumbSaf2 = [2, 5, 7, 9, 11, 27];
challengeEleven(arrGNumbSaf1, arrGNumbSaf2);


//---
//***
//---

console.log("Start process for challengeTwelve...\n...\n...\n... \n \n \n \n\n");

//12.
//


let isHotOutside = true;
let moneyInPocket = 25;

function willBuyDrink(bool, num) {
       if (bool === true && num > 10.50) {
           console.log(true);
       }
    return 0;
}

willBuyDrink(isHotOutside, moneyInPocket);


//---
//***
//---

console.log("Start process for challengeThirteen...\n...\n...\n... \n \n \n \n\n");

//13.
//

//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.


let isOnMyLinux = true;
let isInTerminal = true;
let havePreference = true;

function useBash(bool1, bool2, bool3) {
       if (bool1 === true && bool2 === true && bool3 === true) {
           console.log("You should definitely use bash for this assignment since it's on linux and in the terminal!");
       } else {
		console.log("I suppose you could use JavaScript.....");
       }
    return 0;
}

useBash(isOnMyLinux, isInTerminal, havePreference);
