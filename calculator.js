const btns = document.querySelectorAll(".upperC,.lowerk");
let dis = document.querySelector(".display");
let show = "";
let ans = 0;

btns.forEach((btn) => {
    btn.addEventListener("click",(e)=>{
        if(e.target.getAttribute("id") === "AC"){
            if(show.length>0){
                show = show.slice(0,-1);
                dis.innerText = show;
            } else {
                dis.innerText = "";
            }
        } else if(e.target.getAttribute("class") === "upperC"){
            show = "";
            dis.innerText = show;
        }else if(e.target.getAttribute("id") === "equal"){
            ans = eval(show);
            dis.innerText = ans;
            show = "";
        } else {
            show += btn.innerText;
            dis.innerText = show;
        }
    })
}) 






