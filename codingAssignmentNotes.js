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


function challengeFive() {
const namesArray = ["Kellog", "Samantha", "Katlyn"];
	for (i = 0; i < namesArray.length -1; i++) {
		let length = namesArray[i.length];
		let namesLength = []
		return namesLength;	
	}
}

challengeFive();


//---
//***
//---

console.log("Start process for challengeSix...\n...\n...\n... \n \n \n \n\n");

//6.
//


function challengeSix() {

return 0;
}

challengeSix();
