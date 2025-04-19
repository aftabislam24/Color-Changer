let body = document.querySelector("body");
let buttons = document.querySelectorAll(".button");

buttons.forEach((button)=>{
    button.addEventListener("click",(el)=>{
        if(el.target.id === el.target.id){
            body.style.backgroundColor = el.target.id ;
            body.style.color = `black`;
        }else if(el.target.id === el.target.id){
            body.style.backgroundColor = el.target.id ;
            body.style.color = `black`;
        }else if(el.target.id === el.target.id){
            body.style.backgroundColor = el.target.id ;
            body.style.color = `white`;
         }else if(el.target.id === el.target.id){
            body.style.backgroundColor = el.target.id ;
            body.style.color = `black`;

         }
    })
})