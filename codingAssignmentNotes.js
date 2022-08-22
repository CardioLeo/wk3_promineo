// Author: William Z Chadwick
// Date Created: 08/21/22
// Date Modified: 08/21/22
// Description: A place to keep notes as I prep to complete the coding assignment steps.

1.

//ages.shift();

function challengeOne() {

const ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log(ages[ages.length -1] - ages[0]);

ages.push(45);

console.log(ages[ages.length -1] - ages [0]);

let sum = 0

for (let i = 0; i < ages.length; i++) {
	sum=+ages[i];
}

console.log(Math.round(sum/ages.length));

}

challengeOne();

---

1.a-c.

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


---

---

2.





//	Attempt wrote out in class:


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

