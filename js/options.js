document.addEventListener("DOMContentLoaded", function () {
  initResaltarLetras();
  initCambiarTamanioLetras();
  initCambiarInterlineado();
  initCambiarEspaciadoPalabras();
  initCambiarEspaciadoLetras();
});

function initResaltarLetras() {
  const resaltarLetrasConfusas = document.getElementById(
    "resaltar-letras-switch"
  );

  resaltarLetrasConfusas.addEventListener("input", function () {
    // No usamos classList.toggle porque a veces da problemas
    if (resaltarLetrasConfusas.checked) {
      document.querySelectorAll(".letra-b").forEach(function (elem) {
        elem.classList.add("letra-b--active");
      });
    } else {
      document.querySelectorAll(".letra-b").forEach(function (elem) {
        elem.classList.remove("letra-b--active");
      });
    }

    if (resaltarLetrasConfusas.checked) {
      document.querySelectorAll(".letra-d").forEach(function (elem) {
        elem.classList.add("letra-d--active");
      });
    } else {
      document.querySelectorAll(".letra-d").forEach(function (elem) {
        elem.classList.remove("letra-d--active");
      });
    }
  });
}

function initCambiarTamanioLetras() {
  const labelCambiarTamanio = document.getElementById("label-tamanio");
  const inputCambiarTamanio = document.getElementById("input-tamanio");

  inputCambiarTamanio.addEventListener("input", function () {
    console.log(labelCambiarTamanio.style.fontSize);

    labelCambiarTamanio.style.fontSize =
      12 + (inputCambiarTamanio.value * 20) / 100 + "px";
  });
}

function initCambiarInterlineado() {
  const labelInterlineado = document.getElementById("label-interlineado");
  const inputInterlineado = document.getElementById("input-interlineado");

  inputInterlineado.addEventListener("input", function () {
    labelInterlineado.style.lineHeight =
      1 + (inputInterlineado.value * 10) / 1000;
  });
}

function initCambiarEspaciadoPalabras() {
  const labelEspaciadoPalabras = document.getElementById(
    "label-espaciado-palabras"
  );
  const inputEspaciadoPalabras = document.getElementById(
    "input-espaciado-palabras"
  );

  inputEspaciadoPalabras.addEventListener("input", function () {
    labelEspaciadoPalabras.style.wordSpacing =
      1 + (inputEspaciadoPalabras.value * 10) / 100 + "px";
  });
}

function initCambiarEspaciadoLetras() {
  const labelEspaciadoLetras = document.getElementById(
    "label-espaciado-letras"
  );
  const inputEspaciadoLetras = document.getElementById(
    "input-espaciado-letras"
  );

  inputEspaciadoLetras.addEventListener("input", function () {
    labelEspaciadoLetras.style.letterSpacing =
      (inputEspaciadoLetras.value * 10) / 100 + "px";
  });
}
