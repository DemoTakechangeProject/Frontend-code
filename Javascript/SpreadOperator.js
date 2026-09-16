
// let marks=[30,70,60,89];
// let per=[20,30];
// let copyMarks=[];

// for(let i=0;i<marks.length;i++){
//     copyMarks[i] = marks[i];
// }

// copyMarks = [...marks]

// copyMarks = [...per,...marks]

// copyMarks = [10,...per,40]

// console.log(copyMarks);


// Object

const student={
    roll:201,
    name:"Yogesh"
}

const copy_student = {
    ...student,
    place:"Pune"
}

const UpdateObj = {
    ...copy_student,
    place:"Mumbai"
}
console.log(UpdateObj);
