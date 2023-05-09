

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