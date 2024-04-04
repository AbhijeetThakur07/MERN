//JS INTRO

// function env(){
// console.log(message)
// var message='Hello World!';
//var is function scope
//re-defined
//re-declared

// var age=20;
// age="Done";

// console.log(message)
// message="else";
// console.log(message)
// console.log(age)
// }
// for(var i=0;i<5;i++){
//     console.log("___",i)
// }
// console.log(i)
// }

// env();

// let message='hello!';
//re-declaration don't work in let
//js is interpreted and compiled language both
// console.log(message)

//const
//constant variable can not be redeclared
//declared and initialized at the same time
// const message="Hello!";
// console.log(message)

//Hoisting

//loosely typed
//dynamically typed

// let age=20;
// console.log(typeof(age))

//mutable and immutable datatypes
//undefined vs null datatypes

// let arr=['a','b','c','d'];
// arr[0]='abcd';
// console.log(arr)

//type coercion
// let age=20;
// let str="12";
// let ans=age-(-str); //important
// console.log(ans);
// console.log(typeof(ans));

//parseInt()
//===
//!==

//Template_Literal
// const str='Abhijeet';
// const usrName=`My name is: ${str}`;
// const usrName='My name is:';
// const ans=`${usrName} ${str}`;
// console.log(ans);
// console.log(usrName);

//Destructuring Assignment
// let obj={name:'Abhijeet',age:34,city:"Delhi"};
// let {name,age}=obj;
// console.log(`Hello ${name}`);
// console.log("Your Age "+age);

//Default Parameters
// function greeting(name="Guest"){
//     return `Hello ${name}`;
// }

// function  print(str){
//     console.log(str)
// }
// const s='Hello!';
// print('Hello');

//0, null, undefined,'' are false values
// let a=1;
// if(a){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }

//function declaration
// function print(){
//     console.log('-------');
// }

//function assignment (named)
// let a=function print(){
// console.log('-------');
// }

//function assignment (anonymous)
// let b=function(){
// }
// print();
// a();
// b();

//arrow function
// const sum=(a,b)=>{
//     let c=a+b;
//     return c;
// }
// let y=sum(3,2);
// console.log(y);

//switch
// let a=2;
// switch(a){
//     case 1:console.log("one");
//     break;
//     case 2:console.log("Two");
//     break;
//     default:console.log("None");
//     break;
// }


//object initialization

// const obj=new Object();
// obj[1]='one';
// obj[2]='two';
// obj[name]='Abhijeet';
// console.log(obj);

// const obj = {
//   1: "one",
//   name: "Abhijeet",
//   12: "twelve",
// };
// console.log(obj);


const obj={
    firstname:"Abhijeet",
    lastname:"Singh",
    age:25,
    country:'India',
}
// const fullname1=obj.firstname+' '+obj.lastname;
// const fullname2=`${obj.firstname} ${obj.lastname}`;
// console.log(fullname1);
// console.log(fullname2);

//important
const x=prompt('Please tell the property to know');
console.log(obj[x]);
