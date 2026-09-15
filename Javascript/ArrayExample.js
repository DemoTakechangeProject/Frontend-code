// let roll = [10,20,30,50];
// let i=0;
// console.log(roll);

// for(let i=0;i<roll.length;i++){
//     console.log(roll[i]);
// }

// for(let temp of roll){
//     console.log(temp);
// }

// while(i<roll.length){
//     console.log(roll[i]);
//     i++;
// }

// console.log(roll.length); 

// roll.push(90,30,40);

// console.log("Before pop :",roll);

// roll.pop();

// console.log("After pop :",roll);

const student = ["Yogesh","Gayatri","Ankita"];

// Without destructuring : how to values are extract
// const first = student[0];
// const second = student[1];
// const third = student[2];

// console.log("First :",first);
// console.log("Second :",second);
// console.log("Third :",third);

//  With destructuring

// const [first,second,third] = student;


// console.log("First :",first);
// console.log("Second :",second);
// console.log("Third :",third);

//  Skip second value
const [first,,third] = student;

console.log("First :",first);
console.log("Third :",third);