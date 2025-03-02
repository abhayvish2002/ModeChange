let btn=document.querySelector(".btn");
let currmode="light";

btn.addEventListener("click",() =>{

    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="blue";
    }else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="red";
    }
    console.log(currmode);
});
