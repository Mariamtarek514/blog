let bar=document.getElementsByTagName('i');
let ck=document.getElementById('ul');
function barsClick() {
    ck.classList.toggle("hoverUl");
};
let navShowBtn =document.getElementById("navbar-show-btn");
let navCloseBtn =document.getElementById("navbar-close-btn");

navCloseBtn.addEventListener("click",function(){
    ck.classList.remove("hoverUl");
});
document.addEventListener("click",(e)=>{
    if(e.target.id != "navbar-collapse" && e.target.id !="navbar-show-btn" && e.target.parentElement.id !="navbar-show-btn"){
        ck.classList.remove("hoverUl");
    }
})