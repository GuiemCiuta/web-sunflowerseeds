const controller = new ScrollMagic.Controller();

const screensScene = new ScrollMagic.Scene({
  triggerElement: "#section-pantalla",
  triggerHook: 0,
  duration: "200%", // the scene should last for a scroll distance of 100px
})
  .setPin("#section-pantalla") // pins the element for the the scene's duration
  .addTo(controller); // assign the scene to the controller

screensScene.on("progress", function (event) {
  document.getElementById("screens-carousel").style.transform = `translateX(-${event.progress * 100 * 1400 / window.innerWidth}%)`;

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
  duration: "300%", // the scene should last for a scroll distance of 100px
})
  .setPin("#section-funcionalidades") // pins the element for the the scene's duration
  .addTo(controller); // assign the scene to the controller

featuresScene.on("progress", function (event) {
  if (window.innerWidth < WIDTH_BREAKPOINT || window.innerHeight > HEIGHT_BREAKPOINT) {
    featuresScene.destroy();
    return;
  }

  const firstActOffset = .2;
  const firstActDuration = 0.2;
  const firstActProgress = (event.progress - firstActOffset) / firstActDuration;

  const secondActOffset = .65;
  const secondActDuration = .15;
  const secondActProgress = (event.progress - secondActOffset) / secondActDuration;

  const thirdActOffset = .9;
  const thirdActDuration = 1 - thirdActOffset;
  const thirdActProgress = (event.progress - thirdActOffset) / thirdActDuration;

  // En el último acto no habrá scroll
  if (event.progress < secondActOffset) {
    document.getElementById("features-wrapper").style.transform = `translateY(-${event.progress * 310 * window.innerHeight / 1000}%)`;
  }

  if (event.progress > firstActOffset) {
    document.getElementById("share-text-text").style.transform = `translateY(${firstActProgress * 300 - 200}%)`;

    if (event.progress > .45) {
      document.getElementById("portatil-vacio").src = "./imgs/mockup-portatil.png";
    } else {
      document.getElementById("portatil-vacio").src = "./imgs/mockup-portatil-vacio.png";
    }
  }

  if (event.progress > secondActOffset) {
    document.getElementById("ocr-whole-pic").style.opacity = 1 - secondActProgress;
  }

  if (event.progress > thirdActOffset) {
    document.getElementById("ocr-cropped-pic").style.opacity = 1 - thirdActProgress;
  }
});
