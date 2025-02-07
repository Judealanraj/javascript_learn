var student = {name:"jude", age:23};
console.log(typeof (student));
console.table(student);
var date_ = new Date;
console.log(date_);

var a = 5;
console.log(typeof(a.toString()));
console.log(++a);
var b=a>10?"eligible":"not eligiblekjhyhuk";
console.log(b);

function say_hello(name){
    name = name?name:"no name";
    console.log("welcome "+name);
};
say_hello("jude");

const ar_fu=(name)=> {
    name = name?name:"no name";
    console.log("welcome "+name);
};
ar_fu("judeww");

let age= prompt("enter your age");
console.log(age);