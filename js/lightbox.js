const imagenes = document.querySelectorAll('.img-gallery')
const imagenesLight = document.getElementById('agregar-imagen')
const contenedorLight = document.getElementById('imagen-light')
const hamburger1 = document.getElementById('hamburger')

imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=> {
        showImg(imagen.getAttribute('src'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImg')
        hamburger1.style.opacity = '1'    
    }
})

const showImg = (img)=>{
    imagenesLight.src = img;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImg')
    hamburger1.style.opacity = '0'
}