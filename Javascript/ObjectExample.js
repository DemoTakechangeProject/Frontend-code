let student = {
    roll:101,
    sname:"Ankita",
    age:20,
    per:90.20,
    isPass:true
}

// console.log(student);

// console.log("Student Name : ",student.sname);

// console.log(student.age + student.per);

// student.age = 25;

// let sroll = student.roll;
// let name = student.sname;
// let sage = student.age;

// console.log(sroll , name , sage);

// const {sname,isPass,roll} = student;

// console.log(roll , sname , isPass);

// Rename Variable

const {sname:studentName,roll:studentRoll,isPass:studentIsPass} = student;

console.log(studentName,studentRoll,studentIsPass);
