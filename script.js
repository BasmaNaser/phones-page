let img=document.querySelector('.imgs')
let container=document.querySelector('.container')
let all = document.querySelector('.all')
function phones(phone,color){
    img.src=phone;
    container.style.backgroundColor=color
    all.style.color=color
}
