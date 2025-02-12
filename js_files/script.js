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



function func_1() {
    console.log("first");
}

function func_2() {
    console.log("second");
}

async function func_3() {
    console.log("third");
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("third after 3 seconds");
}

function func_4() {
    console.log("fourth");
}

// Example of calling the functions
func_1();
func_2();
func_3();
func_4();


// call
const personn = {
    f_name : "jude" ,
    fullname: function(){
        console.log(this.f_name);
    }
}

const person1={
    f_name: "jude1"
}

const person2={
    f_name: "jude3"
}

personn.fullname.call(person2);


// setInterval(myFunction, 4000);

// function myFunction() {
//   let d = new Date();
//   console.log(
//   d.getHours() + ":" +
//   d.getMinutes() + ":" +
//   d.getSeconds())
// }



const f_promise = new Promise((resolve,reject) => {
    setTimeout(() => {
    let success = true;
    if(success){
        resolve("operation success");
    }
    else{
        reject("operation failed");
    }}
    , 2000);
}
)


f_promise
.then((result)=>{console.log(result)})
.catch((result)=>{console.log(result)})
.finally(()=>{console.log("finished")})