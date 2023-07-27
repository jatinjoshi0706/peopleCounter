let count=0
function Increment(){
    count+=1;
    document.getElementById("count").innerText=count;  
}
// {/* <p id="save-el">Previous entires: </p> */}
let countStr=document.getElementById("save-el")

function save(){
    let countStr001=count+"-"
    countStr.innerText+=countStr001
    count=0
    document.getElementById("count").innerText=count;
}
