// const figlet=require('figlet');

// figlet('Abhijeet',(err,data)=>{
//     console.log(data);
// })

// fetch("https://api.github.com/users/deepak3440")
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data);
// })
// .catch((err)=>{
//     console.log('Error Occured!')
// })
// console.log('End')

//async await

// console.log('Start')
// async function getApi(){
//     console.log('API calling....')
//     const pr=await fetch('https://api.github.com/users/abhijeet04')
//     console.log('Making JSON......')
//     const data=await pr.json();
//     console.log('Fetched Data');
// }
// getApi();
// console.log('End')

console.log("Start");

async function callApi(){
    const pr= await new Promise((res,rej)=>{
        console.log("Promise 1...")
        setTimeout(()=>{
            console.log("Timeout 1....")
        },10000);
        })
        console.log("Promise 1 Completed")
        const pr2=await new Promise((res,rej)=>{
            console.log('Promise 2...');
            setTimeout(()=>{
                console.log('Timeout 2...');
            },10000)
            })
        console.log('Promise 2 Completed')
}
callApi();
console.log('End')