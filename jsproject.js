
 let colors = ["red","#0F9D58","#4285F4","orange","#F4B400","grey","creem","purple"]
 
 let i=0
function myFunction(){
    document.querySelector("div").style.color = colors[i];
    document.querySelector("button").innerHTML = colors[i];
    document.querySelector("button").style.color = colors[i];
    i++;
    
}
