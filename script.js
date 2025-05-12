let body = document.querySelector("body");
let navEl = document.querySelectorAll("nav a");
let buttons = document.querySelectorAll(".button");

buttons.forEach((button)=>{
    button.addEventListener("click",(el)=>{
        if(el.target.id === el.target.id){
            body.style.backgroundColor = el.target.id ;
            body.style.color = `black`;
        }
        if(el.target,id === `blue`){
            body.style.backgroundColor = el.target.id;
            body.style.color = "white";
            for(e of navEl){
                e.style.color = `white`;
                e.style.border = `2px solid #fff`
            }
        }else{
            for(e of navEl){
                e.style.color = `black`;
                e.style.border = `2px solid #212121`
            }
        }
    })
})