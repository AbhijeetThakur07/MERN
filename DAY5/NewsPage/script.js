console.log("...APP started")

function callAPI(){
    fetch("https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=fdf76612d6434ae18e6da7dc2e95679f")
    .then((res)=>{
        return res .json();
    })
    .then((data)=>{
        renderUI(data);
    })
}
// callAPI(); 

function renderUI(data){
    //got the articles from data
    const articles=data.articles;
    for(let i=0;i<articles.length;i++){
        //single article from the articles array
    const ar=articles[i];
    console.log(ar);


    // console.log(data);
    const root=document.getElementById('root');

    //created parent div
    const div=document.createElement('div');
    div.setAttribute('class','news-card')
    const h3=document.createElement('h3'); 
    h3.innerText=ar.title;
    div.appendChild(h3);

    const img=document.createElement('img');
    img.src=ar.urlToImage;
    div.appendChild(img)
    
    const para1 = document.createElement('p');
    para1.innerHTML = ar.description;
    div.appendChild(para1);
    
    const a = document.createElement('a');
    a.href = ar.url;
    a.target="_blank";
    a.textContent='Read More';
    div.appendChild(a);

    // div.innerText=ar.title;
    root.appendChild(div);
    }

    
}

// renderUI();
callAPI();