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
    alert(texts["contact.error.fillup_all_fields"]);
    return;
  }

  if (!privacyPoliticsSignature.checked) {
    alert(texts["contact.error.fillup_all_fields"]);
    return;
  }


  execAnimation("send");
  await sendForm();
});
