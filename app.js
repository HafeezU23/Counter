
let inc=document.querySelector("#increase");
let dec=document.querySelector("#decrease");
let res=document.querySelector("#Reset");
let result=document.querySelector("#counting");
let counter=0;

inc.addEventListener("click",()=>{
    counter++;
    result.innerText=counter;
    if(counter===0){
        result.style.color="black";
    }
    else if(counter>0){
       result.style.color="green";
    }
    else{
        result.style.color="red";
    }
});

dec.addEventListener("click",()=>{
    counter--;
    result.innerText=counter;
    if(counter===0){
        result.style.color="black";
    }
    else if(counter>0){
       result.style.color="green";
    }
    else{
        result.style.color="red";
    }
});

res.addEventListener("click",()=>{
    counter=0;
    result.innerText=counter;
    result.style.color="black";
});