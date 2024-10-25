var context = new AudioContext();

function jsNota(frecuencia) {
    var o = context.createOscillator();
    var g = context.createGain();
    o.connect(g);
    o.type = "sawtooth";
    o.frequency.value = frecuencia;
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 0.4);
}

var notasBlancas = {
    '1': { frecuencia: 261.63, clase: '.do' },
    '2': { frecuencia: 293.66, clase: '.re' },
    '3': { frecuencia: 329.63, clase: '.mi' },
    '4': { frecuencia: 349.23, clase: '.fa' },
    '5': { frecuencia: 392.00, clase: '.sol' },
    '6': { frecuencia: 440.00, clase: '.la' },
    '7': { frecuencia: 493.88, clase: '.si' },
    '8': { frecuencia: 523.25, clase: '.do8' }
};

var notasNegras = {
    'w': { frecuencia: 277.18, clase: '.doS' },
    'e': { frecuencia: 311.13, clase: '.reS' },
    'r': { frecuencia: 369.99, clase: '.faS' },
    't': { frecuencia: 415.30, clase: '.solS' },
    'y': { frecuencia: 466.16, clase: '.laS' }
};

window.addEventListener('keydown', function(event) {
    var tecla = event.key;
    var frecuencia;

    if (tecla in notasBlancas) {
        frecuencia = notasBlancas[tecla].frecuencia;
        activarTecla(notasBlancas[tecla].clase);
    } else if (tecla in notasNegras) {
        frecuencia = notasNegras[tecla].frecuencia;
        activarTecla(notasNegras[tecla].clase);
    }

    if (frecuencia) {
        jsNota(frecuencia);
    }
});

function activarTecla(clase) {
    const keyElement = document.querySelector(clase);
    if (keyElement) {
        keyElement.classList.add('tecla-activa-white');
        setTimeout(() => {
            keyElement.classList.remove('tecla-activa-white');
        }, 200);
    }
}
