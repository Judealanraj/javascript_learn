async function say_hello(){
    console.log("hello");
    return new Promise((resove,reject) =>{
        setTimeout(() => {
            resove("helloooooooooooooo");
            }, 2000);
    }
    );
    
}
say_hello();
console.log(say_hello().then(result=>{console.log(result);
}));
