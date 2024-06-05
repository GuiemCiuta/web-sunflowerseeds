const controller = new ScrollMagic.Controller();

const screensScene = new ScrollMagic.Scene({
  triggerElement: "#section-pantalla",
  triggerHook: 0,
  duration: 1500, // the scene should last for a scroll distance of 100px
})
  .setPin("#section-pantalla") // pins the element for the the scene's duration
  .addTo(controller); // assign the scene to the controller

screensScene.on("progress", function (event) {
  document.getElementById("screens-carousel").style.transform = `translateX(-${
    event.progress * 100
  }%)`;

  if (event.progress > 0.35) {
    document.querySelector(`[data-role="intro.title_2"]`).innerHTML =
      texts?.["intro.title_2_alt"];
    document
      .querySelector(`[data-role="intro.title_2"]`)
      .classList.add("word-change--active");
  } else {
    document.querySelector(`[data-role="intro.title_2"]`).innerHTML =
      texts?.["intro.title_2"];
    document
      .querySelector(`[data-role="intro.title_2"]`)
      .classList.remove("word-change--active");
  }
});

const featuresScene = new ScrollMagic.Scene({
  triggerElement: "#section-funcionalidades",
  triggerHook: 0,
  duration: 2000, // the scene should last for a scroll distance of 100px
})
  .setPin("#section-funcionalidades") // pins the element for the the scene's duration
  .addTo(controller); // assign the scene to the controller

featuresScene.on("progress", function (event) {
  const firstActDuration = 0.7;
  const firstActProgress = event.progress / firstActDuration;

  const secondActDuration = 1 - firstActDuration;

  if (firstActDuration > event.progress) {
    document.getElementById(
      "features-wrapper"
    ).style.transform = `translateY(-${firstActProgress * 113}%)`;
  } else if (secondActDuration > event.progress - firstActDuration) {
    console.log("hola");
    //document.getElementById("ocr-whole-pic").style.;

    const secondActProgress =
      (event.progress - firstActDuration) / secondActDuration;

    console.log(secondActProgress);

    document.getElementById("ocr-whole-pic").style.filter = `grayscale(${
      secondActProgress * 100
    }%)`;

    document.getElementById("ocr-whole-pic").style.opacity =
      1 - secondActProgress * .4;
  }
});
