// const b=new Buffer.from('abcxyz')

// console.log(b.toString()); //result will be ASCII values in hexadecimal
// b.write('other');
// console.log(b.toString());

// const fs=require('fs');
// const data=fs.readFileSync("./myReadMe.txt",'UTF-8')
// console.log('Start')
// fs.writeFileSync('./logs.txt',"10th April 2024:Day 7");
// console.log(data);
// console.log('End');


//promises
// console.log('Start')
// const fsPromises=require('fs/promises');
// const pr=fsPromises.readFile('./myReadMe.txt',{encoding:'UTF-8'});
// pr.then((res)=>{
//     console.log(res)
// })
// console.log('End')


//callback in File System
// const fs=require('fs');

// const data=fs.readFile('./myReadMe.txt',{encoding:'utf8'},(err,data)=>{
//     console.log(data)
// })

//min-project

const http=require('http');
const fs=require('fs')

const data=fs.readFileSync('./data.json','utf8')
const htmlTemplate=fs.readFileSync('./page.html',{encoding:'utf-8'})
const cardTemplate=fs.readFileSync('./card.html','utf8')

// console.log(data);
const dataObj=JSON.parse(data);
// console.log(dataObj)
const products=dataObj.products;
console.log(products)


// const card1=cardTemplate
// .replace('__TITLE__',products[0].title)
// .replace('__INFO__',products[0].description);

// const card2=cardTemplate
// .replace('__TITLE__',products[1].title)
// .replace('__INFO__',products[1].description);

// const page=htmlTemplate.replace('__PRODUCTS__CARDS__',card1);
// console.log("\n : card1",typeof(card1));
// console.log("\n : card1",typeof(card2));
// const allCards=card1+card2;
// console.log("\n: All Cards ",allCards);

const allCards=products.map((elem)=>{
    let newCard=cardTemplate;
    newCard=newCard.replace('__TITLE__',elem.title);
    newCard=newCard.replace('__INF0__',elem.description);
    return newCard;
})
const allCardsString=allCards.join("");
const page=htmlTemplate.replace('__PRODUCTS__CARDS__',allCardsString);



const app=http.createServer((req,res)=>{
// console.log('Request received')
console.log(req.url)
// console.log(Object.keys(req))
// res.end('<h1>Hello</h1>')
res.writeHead(200,{
    'content-type':'text/html',
})
res.end(allCards);
});
app.listen(1400,()=>{
    console.log('.....Server Started....')
}); //http://localhost:1400/