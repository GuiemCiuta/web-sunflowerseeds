let texts;
const DEFAULT_LANG = "es";

function assignTextToElement(role, text) {
    const elements = document.querySelectorAll(`[data-role="${role}"]`);

    for(let element of elements) {
        element.innerHTML = text;
    }
}

async function fetchLang(lang) {

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