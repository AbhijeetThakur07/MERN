function fetchAPI(){
    const url='https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/London%2CUK?unitGroup=us&key=ZWMDKK78S7S4JVVJWN24XDWCH'
    fetch(url)
    .then((res)=>res.json())
        // .then(console.log);  
        .then((val)=>{
            renderUI(val)
        });  
}
fetchAPI()

function renderUI(data){
    console.log(data);
    const days=data.days;
    console.log(days)

    const row=document.createElement('tr');
    //make heading row
    const cell1=document.createElement('th');
    cell1.innerText='Date';
    row.append(cell1);

    const cell2=document.createElement('th');
    cell2.innerText='Maximum Temperature';
    row.append(cell2);

    const cell3=document.createElement('th');
    cell3.innerText='Minimum Temperature';
    row.append(cell3);

    root.append(row);
    for(let i=0;i<days.length;i++){
        const childRow=document.createElement('tr');
        const c1=document.createElement("td");
        c1.innerText=days[i].datetime;
        childRow.append(c1);
    
        const c2=document.createElement("td");
        c2.innerText=days[i].tempmax;
        childRow.append(c2);
    
        const c3=document.createElement("td");
        c3.innerText=days[i].tempmin;
        childRow.append(c3);
    
        root.append(childRow);

    }
}
renderUI();
