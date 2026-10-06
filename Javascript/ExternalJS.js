// const heading = document.getElementById("header").innerText;

// console.log(heading);


// Next day

// document.getElementById("box").innerHTML="<h1>I am heading</h1>";

// console.log(box);

// const header = document.getElementById("header");

// header.style.color="blue";
// header.style.fontSize="38px"

// const button = document.getElementById("btn");
// const header = document.getElementById("header");

// button.addEventListener("click",()=>{
//     // alert("Button clicked");
//     header.innerText="Hello Gayatri";
//     header.style.color="blue";
//     header.style.backgroundColor="yellow"
// });

// Double click event

// const button = document.getElementById("btn");
// const header = document.getElementById("header");

// button.addEventListener("dblclick",()=>{
//     // alert("Button clicked");
//     header.innerText="Hello Gayatri";
//     header.style.color="blue";
//     header.style.backgroundColor="yellow"
// });

// Mouse enter and leave

const button = document.getElementById("btn");
const header = document.getElementById("header");

header.addEventListener("mouseenter",()=>{
    header.innerText="Hello Gayatri";
    header.style.color="blue";
    header.style.backgroundColor="yellow"
});

header.addEventListener("mouseleave",()=>{
    header.innerText="This is Onclick Example";
    header.style.color="black";
    header.style.backgroundColor="white"
});