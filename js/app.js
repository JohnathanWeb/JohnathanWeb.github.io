$(document).ready(function(){

    /* =========================
       SLIDER (TESTIMONIOS)
    ========================= */
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'
    });

    /* =========================
       MENÚ MÓVIL
    ========================= */
    

    /* =========================
       DESCARGAR CV
    ========================= */
   window.downloadCV = function () {
    const link = document.createElement("a");
    link.href = "./cv/CV.pdf";
    link.download = "CV-Johnathan-Huaman-Rojas.pdf";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};


    /* =========================
       CONTACTO (MAILTO SIMPLE)
    ========================= */
    const form = document.getElementById('contact-form');

    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();

            const name = form.querySelector('input[type="text"]').value;
            const email = form.querySelector('input[type="email"]').value;
            const message = form.querySelector('textarea').value;

            const subject = encodeURIComponent("Mensaje de Portafolio - " + name);
            const body = encodeURIComponent(
                "Nombre: " + name + "\n" +
                "Correo: " + email + "\n\n" +
                "Mensaje:\n" + message
            );

            window.location.href = `mailto:johnathan_rojas@hotmail.com?subject=${subject}&body=${body}`;
        });
    }

});

function openModal(img){
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modal-img");

    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal(){
    document.getElementById("modal").style.display = "none";
}