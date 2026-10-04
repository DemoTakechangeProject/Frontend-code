// const id=[10,25,30,35,40,45];

// const print = temp =>{
//     console.log(temp);
// }

// id.forEach(temp=>console.log(temp));

// function print(temp){
//     console.log(temp);
// }

// id.forEach(temp=>{
//     if(temp%2==0){
//         console.log(temp," the number is Even");
//     }else{
//         console.log(temp," the number is Odd");
//     }
// });

// id.forEach(temp=>temp%2==0?console.log('Number is Even'):console.log('Number is Odd'));

// id.forEach(temp=>console.log(temp%2==0? temp+' number is Even':temp+' number is Odd'));

// const addValue = id.map(num=>num+10);

// console.log(addValue);

// const addValue = id.map(num=>console.log(num+10));


const id=[10,25,15,35,40,45];

// const output = id.filter(temp=>temp>25);

// console.log(output);

// Find : it returns the first element that matches the condition

// const findFirstElement = id.find(temp=>temp>25);

// console.log(findFirstElement);

// some : Checks whether at least one element satisfies the condition (it returns boolean value : true or false)

// const output = id.some(temp=>temp>10)

// console.log(output);

// Every : Checks whether all element satisfies the condition

// const output = id.every(temp=>temp>5)

// console.log(output);

const output = id.includes(105);

console.log(output);
