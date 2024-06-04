let texts;

function assignTextToElement(role, text) {
    const element = document.querySelector(`[data-role="${role}"]`);

    console.log(role)

    if (element) {
        console.log(text);
        element.innerHTML = text;
    }

}

async function fetchLang(lang) {
    const DEFAULT_LANG = "es";

    if (!lang) {
        lang = DEFAULT_LANG;
    }

    try {
        const res = await fetch(`./langs/${lang}.json`);
        texts = await res.json();

        for (let i = 0; i < Object.keys(texts).length; i++) {
            const key = Object.keys(texts)[i];
            const text = texts[key];

            assignTextToElement(key, text);
        }

        console.log(texts);
    } catch (err) {
        console.log(err);
        alert("No se ha encontrado el idioma...");
    }
}

fetchLang("es");