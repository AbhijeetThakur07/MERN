// let a =new String("Hello");
// let b="Hello";

// if(a===b){
//     console.log("Yes");
// }
// else{
//     console.log("no");
// }

// const obj={
//     "name":"Abhijeet",
//     "lastname":"Singh",
//     "age":22
// }
// obj.age=22;
// console.log(obj.age);


//object length cannot be counted

//array can be reassigned when variable is let  or var but not const 
// let arr=[1,2,34];
// arr=[4,2,3];
// console.log(arr);

// const arr=[1,2,34];
// arr[1]=20;
// console.log(arr)

// const arr=[1,2,34];
// arr[10]=20;
// console.log(arr)

// const arr=[1,2,3,4];
// console.log(typeof(arr));

// const obj={
//     1:"Abhijeet"
// }
// console.log(obj.1); //error

// const arr=[1,2,3,4];
// console.log(Array.isArray(obj));
// console.log(Array.isArray(arr));

//checkIfObject ([1,2,3,4])
// function checkIfObject(x){
//    if(Array.isArray(x)){
//    console.log("not object");
//    }
// else if(typeof(x)=="object"){
//    console.log("object");
// }
// else{
//     console.log("not object");
// }
// }
// checkIfObject([]);

//checkIfObject ({name:"Abhijeet"})


// console.log(window)
// console.log(innerHeight)
// console.log(innerWidth)
// console.log(window.document)

// console.dir(window.document)

// const res=document.getElementsByTagName('h3')
// console.log(res)

// const res=document.getElementById('ht2')
// console.log(res)

// const res=document.querySelectorAll('h3')
// console.log(res)

// const res=document.querySelector('h3')
// console.log(res)

// const res=document.getElementById("ht2");
// res.innerText="Hello World!"
// console.log(res)

// const res=document.getElementsByTagName("p");
// res[0].innerHTML="Hello World!"
// console.log(res)
// res[0].tagName="h1";
// console.log(res);
// res[0].setAttribute('tagname','p1')


const ne=document.createElement("h3");
ne.innerText="Created Element!";
// console.log(ne);
// document.body.appendChild(ne);
const firstDiv=document.getElementsByTagName("div");
firstDiv[0].appendChild(ne);


//To remove a paragraph 
const a=document.getElementsByTagName("p");
console.log(a)
a[0].remove()
// a[0].innerHTML=" "






