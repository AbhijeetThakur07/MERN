// const res =document.querySelector('div');
// console.log(res)
// res[0].innerHTML="<p>Hello</p>";
// res.remove();
// const a=document.querySelector('p:nth-of-type(2)');
// res.removeChild(a);


function getInfo(e){
    //object of event
    // console.log(e)
    // const d=document.querySelector("div")
    // const a=document.createElement("p")
    // a.innerText="My name is Abhijeet"
    // d.prepend(a)
    console.log(e)
    e.target.style.backgroundColor='red';
    e.target.style.color='Yellow';
}
