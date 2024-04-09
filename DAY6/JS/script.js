// const pr=new Promise((resolve,reject)=>{
// if(true){
//     resolve();
// }
// else{
//     reject();
// }
// });
// console.log(pr);

// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Done123');},10000);
//     });
//     console.log(pr);
// pr.then((res)=>{
//     console.log(res)
// })

// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('Some items are out of stock');},5000);
//     });
//     console.log(pr);
// pr.then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log(err)
// })

// const pr=new Promise((resolve,reject)=>{
//          setTimeout(()=>{
//             reject('Some items are out of stock');},0);
//          });

//          setTimeout(()=>{
//             console.log('First Timeout.....');},0);

//          console.log(pr);
//          pr.then((res)=>{
//                  console.log(res)
//              }).catch((err)=>{
//                  console.log(err)
//              })

//  setTimeout(()=>{
//     console.log('I am  one');
//  },0);

// const pr=new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res('done')},0);
//     })

//  pr.then(function b(res){
//     console.log('Promise Completed:',res);
//  })

//  setTimeout(function xyz(){
//     console.log('I am  two');
//  },0);

//map function

// const arr=[10,22,34]
// const ans=arr.map((a)=>{
//     console.log(a);
//     return a;
// });
// console.log(ans)

// const ans2=arr.map((a=>a**2));
// console.log(ans2);

//filter function

// const arr=[10,22,34];
// const ans=arr.filter((a)=>{
//    if(a>20){
//     return true;
//    }
//    else{
//     return false;
//    }
// })
// console.log(arr)
// console.log(ans)

// const arr=[
//     'Delhi',
//     'Mumbai',
//     'chennai',
//     'Kolkata',
//     'Pune',
//     'India',
//     'Russia',
//     'USA',
//     'Iraq'
// ]
// const ans=arr.filter((a)=>{
//     if(a.includes('i')||a.includes('I')){
//         return true;
//     }
//     else{
//         return false;
//     }
// });
// console.log(ans)

// const arr = [
//   "Delhi,India",
//   "Mumbai,india",
//   "Chennai,India",
//   "Shanghai,China",
//   "Beijing,china",
//   "Washington,USA",
//   "Texas,USA",
//   "Baghdad,Iraq",
// ];

// const ans=arr.filter((a)=>{
//     const ns=a.toLowerCase();
//     console.log(ns);
//     if(ns.includes('india')){
//         return true;
//     }
//     else{
//         return false;
//     }
// })
// console.log(ans)

// const ans2=arr.filter((a)=>a.toLowerCase().includes('india'))
// console.log(ans2)

//reduce function

// const arr=[10,22,34,50];
// const ans=arr.reduce((a,b,c,d)=>{
// console.log(a,b,c,d);
// return a+b;
// })
// console.log(ans);

const arr=["ab","cd","xy","z"]

const ans=arr.reduce((a,b,c,d)=>{
    console.log(a,b,c,d);
    return a+b;
})
console.log(ans)


