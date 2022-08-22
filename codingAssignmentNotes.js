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
