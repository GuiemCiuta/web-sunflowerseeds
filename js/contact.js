const changeStylesIfFilled = (el) => {
  if (!el.value.length) {
    el.classList.remove("contact-form__input--filled");
    return;
  }

  el.classList.add("contact-form__input--filled");
};

const execAnimation = (animName) => {
  const allEls = document.querySelectorAll(`[data-animation="${animName}"]`);
  if (!allEls.length) return;

  for (let el of allEls) {
    el.classList.add("animation");
  }
};

function checkAllFieldsAreFilled() {
  return Boolean(document.getElementById("name").value.length) && Boolean(document.getElementById("email").value.length) && Boolean(document.getElementById("message").value.length)
}

let sending = false;
const sendForm = async () => {
  if (sending) return;


  sending = true;
  const params = new URLSearchParams();
  params.append("name", document.getElementById("name").value);
  params.append("email", document.getElementById("email").value);
  params.append("message", document.getElementById("message").value);

  return;
};

const form = document.getElementById("contact-form");

form.addEventListener("change", (e) => {
  const target = e.target;
  if (!target.classList.contains("contact-form__input")) return;
  changeStylesIfFilled(target);
});

const sendBtn = document.getElementById("send-btn");

sendBtn.addEventListener("click", async () => {
  const privacyPoliticsSignature = document.getElementById("privacy-politics-signature");

  if (!checkAllFieldsAreFilled()) {
    alert("Por favor, rellena todos los campos");
    return;
  }

  if (!privacyPoliticsSignature.checked) {
    const privacyPoliticsMsg = {
      es: "Por favor, lee y acepta las políticas de privacidad.",
      ca: "Sisplau, llegiu i accepteu les polítiques de privacidat.",
      en: "Please, read and agree to privacy politics."
    };

    alert(privacyPoliticsMsg[DEFAULT_LANG]);
    return;
  }


  execAnimation("send");
  await sendForm();
});
