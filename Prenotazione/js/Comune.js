function salvaBigliettoLocal(biglietto) {
    let jsn = JSON.stringify(biglietto);
    localStorage.setItem("biglietto", jsn);
}

function leggiBigliettoLocal() {
    let obj = localStorage.getItem("biglietto");
    let obj2 = JSON.parse(obj);
    return Object.assign(new Biglietto(), obj2);
}

function salvaBigliettiLocal(biglietti) {
    let jsn = JSON.stringify(biglietti);
    localStorage.setItem("biglietti", jsn);
}

function leggiBigliettiLocal() {
    let obj = localStorage.getItem("biglietti");
    let vettoreBiglietti = JSON.parse(obj) || []; //modo rapido per un if, se ritorna null mettici le parentesi quadre (vettore vuoto)
    let vettore = [];
    for (const biglietto of vettoreBiglietti) {
        vettore.push(Object.assign(new Biglietto(), biglietto));
    }

    return vettore;
}

