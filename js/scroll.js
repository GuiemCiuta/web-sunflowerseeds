const controller = new ScrollMagic.Controller();

// create a scene
const scene = new ScrollMagic.Scene({
    triggerElement: "#caja2",
    triggerHook: 0,
    duration: 500, // the scene should last for a scroll distance of 100px
})
    .setPin('#caja2') // pins the element for the the scene's duration
    .addTo(controller); // assign the scene to the controller


scene.on("progress", function (event) {
    document.getElementById("caja2").style.transform = `translateX(-${event.progress * 100}%)`;
}); 