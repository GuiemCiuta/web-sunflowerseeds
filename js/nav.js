document.addEventListener("scroll", function () {
  const nav = document.getElementById("nav");
  console.log("hola nav");

  if (window.scrollY <= 50) {
    nav.classList.remove("nav--add-contrast");
  } else {
    nav.classList.add("nav--add-contrast");
  }
});
