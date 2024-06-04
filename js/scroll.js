const controller = new ScrollMagic.Controller();

// create a scene
const scene = new ScrollMagic.Scene({
    triggerElement: "#section-pantalla",
    triggerHook: 0,
    duration: 1500, // the scene should last for a scroll distance of 100px
})
    .setPin('#section-pantalla') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller


scene.on("progress", function (event) {
    document.getElementById("screens-carousel").style.transform = `translateX(-${event.progress * 100}%)`;

    if (event.progress > .35) {
        document.querySelector(`[data-role="intro.title_2"]`).innerHTML = texts?.["intro.title_2_alt"];
        document.querySelector(`[data-role="intro.title_2"]`).classList.add("word-change--active");
    } else {
        document.querySelector(`[data-role="intro.title_2"]`).innerHTML = texts?.["intro.title_2"];
        document.querySelector(`[data-role="intro.title_2"]`).classList.remove("word-change--active");
    }
});