document.addEventListener("DOMContentLoaded", function () {
    let mostrarPortatilVacio = true;

    setTimeout(function () {
        setInterval(function () {
            if (window.innerWidth < WIDTH_BREAKPOINT) {
                const newUrl = mostrarPortatilVacio ? "./imgs/mockup-portatil.png" : "./imgs/mockup-portatil-vacio.png"
                mostrarPortatilVacio = !mostrarPortatilVacio;

                document.getElementById("portatil-vacio").src = newUrl;
            }
        }, 1500);
    }, 500);
});