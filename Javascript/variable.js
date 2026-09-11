// var name = "Gayatri";
// name = "Rajeshwari";
// var name = "Ankita";
// console.log(name);

// let name = "Gayatri";
// name = "Rajeshwari";
// // let name = "Ankita"; Not allows : Identifier 'name' has already been declared
// console.log(name);

// const name = "Gayatri";
// // name = "Rajeshwari"; not allows : Assignment to constant variable.
// // const name = "Ankita"; not allow : Identifier 'name' has already been declared
// console.log(name);


// let and const are block-scoped and function-scoped,while var is function-scoped
{
  var a=10;
  // let b=20; // local 
  // const c=30;

  // console.log(a);
  // console.log(b);
  // console.log(c);
}
console.log(a);
// console.log(b);
// console.log(c);

// function scoped :
function display(){
  var a=10;
  // let b=20; // local 
  // const c=30;

  // console.log(a);
  // console.log(b);
  // console.log(c);
}
console.log(a);
// console.log(b);
// console.log(c);
display();

// const must initilize
const name; // Missing initializer in const declaration
// name = "Ankita";
console.log(name);

// check datatype using typeof
// let roll = 101;
// let name = "Pritish";
// let per = 50.40;
// let isPass = true;

// let num = [10,20,30,40];

// let student = {
//   name:"Ankita"
// }

// console.log(typeof roll);
// console.log(typeof name);
// console.log(typeof per);
// console.log(typeof isPass);

// console.log(typeof num);

// console.log(typeof student);

// Operator in JS 

// let a=10;
// let b=20;

// // Arithmetic Op
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);

// //Comparision opertor
// console.log(a==b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a>=b);
// console.log(a<=b);

// console.log(a==="10"); // checks both value and data type

// // Logical op
// console.log(a>=b && a!=b);
// console.log(a<=b || a!=b);

// funtion declaration and pass value
// function checkEven(num){
//   if(num%2 == 0){
//   console.log("Number is Even!");
// }else{
//   console.log("Number is Odd!");
// }
// }

// checkEven(11);

function display(roll,name,isPass){
  console.log(roll);
  console.log(name);
  console.log(isPass);
}

display(101,"Rajeshwari",true);
