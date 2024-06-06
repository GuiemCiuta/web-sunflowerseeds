document.addEventListener("DOMContentLoaded", function () {
    let isPlaying = false;
    const synth = window?.speechSynthesis;


    document.getElementById("text-to-speech-btn").addEventListener("click", function () {
        
        if ('speechSynthesis' in window) {
            let text = texts["features.text_to_speech.text"];
            const utterThis = new SpeechSynthesisUtterance(text);
            utterThis.lang = 'es-ES';
            
            console.log(utterThis);

            if (isPlaying) {
                synth.cancel();
                isPlaying = false;
                document.getElementById("txt-to-speech-img").src = "./imgs/icons/audio.svg";
                return;
            }

            document.getElementById("txt-to-speech-img").src = "./imgs/icons/close.svg";
            isPlaying = true;
            synth.speak(utterThis);

        } else {
            alert("Tu navegador no soporta texto a voz...");
        }

    })
});