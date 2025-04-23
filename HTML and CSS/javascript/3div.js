let div=document.querySelectorAll(".box");
let index=1;
for (d of div){
    d.innerText=`${index} div`;
    index++;
} 