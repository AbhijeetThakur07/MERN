// console.log('GEC Start');
// function printPretty(){
// console.log('prettyStart')
// let ans=2+3;
// console.log(ans)
// console.log('prettyEnd')
// }
// setTimeout(printPretty,10000)
// console.log('GEC End')

// console.log('GEC Start');
// function printPretty(e){
// console.log('prettyStart')
// let ans=2+3;
// console.log(ans)
// console.log('prettyEnd')
// }
// setTimeout(printPretty,10000)
// console.log('GEC End')
// const btn=document.getElementById('btn')
// btn.addEventListener("click",printPretty)

// console.log('start')
// const request=fetch("https://api.github.com/users/deepak3440")
// console.log(request)

// request.then(()=>console.log('Fetched'));
// console.log('end')

// console.log('start')
// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// console.log('end')

console.log("start");
const req = fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((data) => console.log(data));
//   .catch((err)=>{
//     console.log("error");
//   });

console.log("end");

