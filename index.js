const displaycount=document.getElementById('displaycount')
const increase=document.getElementById('increase')
const reset= document.getElementById('reset')
const decrease= document.getElementById('decrease')
let count;
increase.onclick=function(){
    count++;
    displaycount.innerText=count
}
reset.onclick=function(){
    count=0;
    displaycount.innerText=count
}
decrease.onclick=function(){
    count--;
    displaycount.innerText=count
}