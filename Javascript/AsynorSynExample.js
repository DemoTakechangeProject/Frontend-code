// console.log("First");
// console.log("Second");
// console.log("Third");

// console.log("First");

// setTimeout(()=>{
//     console.log("Second");
// },3000);

// console.log("Third");

fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
    console.log(data);    
})