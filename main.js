const btnStart = document.querySelector(".btn-start");
const btnPause = document.querySelector(".btn-pause");
const btnZerar = document.querySelector(".btn-zerar");
const cronometro = document.querySelector(".cronometro");
const ultimoTempo = document.querySelector(".ultimo-tempo");

let tempo = 0;
let timer;

function getTimeFromSeconds(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: "GMT"
    });
}
btnStart.addEventListener("click", () => playCronometro());

function playCronometro() {
    if (!timer) {
        timer = setInterval(() => {
            tempo++;
            cronometro.innerHTML = getTimeFromSeconds(JSON.stringify(tempo));
        }, 1000);
    } else {
        return;
    }
}

function pauseCronometro() {
    insereUltimoTempo()
    clearInterval(timer);
    timer = 0;
}
btnPause.addEventListener("click", () => pauseCronometro());

function zerarCronometro() {
    insereUltimoTempo()
    cronometro.innerHTML = "00:00:00";
    tempo = 0;
    clearInterval(timer);
    timer = 0;
}

function insereUltimoTempo() {
    ultimoTempo.innerHTML = getTimeFromSeconds(tempo);
}
btnZerar.addEventListener("click", () => zerarCronometro());