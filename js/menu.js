const hamburger = document.getElementById('hamburger')
const menu = document.getElementById('menu-navegacion')

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('spread')
})

window.addEventListener('click', (e)=>{
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburger){
        menu.classList.toggle('spread')
    }
})