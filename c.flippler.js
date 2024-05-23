let buttonclick= document.querySelector("button");

 let colorhex= ["0" ,"1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
 function randomhex( ){
    let hex=Math.floor(Math.random()*colorhex.length);
    return colorhex[hex];
 };
 function sixtimes (){
      let randoms="";
    for ( let i=0;i<6;i++){
         randoms+=randomhex();
    };

    return randoms;
 }
buttonclick.addEventListener("click",() =>{
    let hexvalues= "#"+sixtimes();
    let container= document.getElementById("container");
    let text= document.querySelector("span");
    text.textContent=hexvalues;
   container.style.backgroundColor = hexvalues;
});

