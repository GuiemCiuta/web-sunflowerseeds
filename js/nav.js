document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("nav").innerHTML = `<ul class="nav__links">
        <li class="nav__li">
          <a href="./index.html" class="nav__link" data-role="nav.home"
            >Inicio</a
          >
        </li>
        <li class="nav__li">
          <a
            href="./sobre-el-proyecto.html"
            class="nav__link"
            data-role="nav.about"
            >Sobre el proyecto</a
          >
        </li>
        <li class="nav__li">
          <a href="./contacto.html" class="nav__link" data-role="nav.contact"
            >Contacto</a
          >
        </li>
      </ul>`;
});

document.addEventListener("scroll", function () {
  const nav = document.getElementById("nav");

  if (window.scrollY <= 50) {
    nav.classList.remove("nav--add-contrast");
  } else {
    nav.classList.add("nav--add-contrast");
  }
});
