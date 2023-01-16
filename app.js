// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay



const abrir = document.querySelector(".modal-btn")
const modal = document.querySelector(".modal-overlay")
const  cerrar = document.querySelector(".close-btn")


abrir.addEventListener("click", function(){
    modal.classList.toggle("open-modal")
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("open-modal")
});