

const arrayImg = [
    "./Assets/Img/Banner1-carroussel,Lm.webp",
    "./Assets/Img/Banner2-carroussel,Lm.webp",
    "./Assets/Img/Banner3-carroussel,Lm.webp",
    "./Assets/Img/Banner4-carroussel,Lm.webp",
    "./Assets/Img/Banner5-carroussel,Lm.webp"
];

document.Imagen.src = arrayImg[0];

const rightImg = document.querySelector(".caright");
const leftImg = document.querySelector(".caleft");
let cont = 0

function mover_derecha(){
    cont++;
    if (cont > 4){
        cont = 0
    }
    console.log(cont)
    document.Imagen.src = arrayImg[cont];
    

}
function mover_izquierda(){
    cont--;
    if (cont < 0){
        cont = 4
    }
    console.log(cont)
    document.Imagen.src = arrayImg[cont];
    
}

rightImg.addEventListener("click", mover_derecha);
leftImg.addEventListener("click", mover_izquierda);

const navBtn = document.querySelector('.expand-nav');
const elements = document.querySelectorAll('#hidden')

navBtn.addEventListener('click', () => {
    
    if(elements.classList === ('hide')){
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('h')
            elements[i].classList.remove('hide')
    
            
        }
    }else{
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.toggle('hide')
            elements[i].classList.remove('h')
    
            
        }
    }
    
    
    
    

})