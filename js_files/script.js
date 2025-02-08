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

let f_name = "jude"
let ta = `<table><td>"name"</td><td>${f_name}</td></table>`
document.body.innerHTML = ta;

//array of 10 objects with different names  and different ages
let students = [
    {name:"jude", age:23},
    {name:"jude", age:23},
    {name:"jude", age:23}]


let person = new Object();
person.name = "jude";
person.age = 23;
console.table(person);
