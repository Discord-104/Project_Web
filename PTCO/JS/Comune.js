function calculateDistance(lat1, lon1, lat2, lon2) {
    const toRadians = (degrees) => degrees * Math.PI / 180;

    const R = 6371; // Raggio della Terra in km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
}

// Funzioni per gestire localStorage
function salvaStudenteLocal(studente) {
    let jsn = JSON.stringify(studente);
    localStorage.setItem("studenti", jsn);
}

function leggiStudentiLocal() {
    let obj = localStorage.getItem("studenti");
    let vettoreStudenti = JSON.parse(obj) || [];
    let vettore = [];
    for (const studente of vettoreStudenti) {
        vettore.push(Object.assign(new Studente(), studente));
    }

    return vettore;
}

function salvaAziendaLocal(azienda) {
    let jsn = JSON.stringify(azienda);
    localStorage.setItem("aziende", jsn);
}

function leggiAziendeLocal() {
    let obj = localStorage.getItem("aziende");
    let vettoreAziende = JSON.parse(obj) || [];
    let vettore = [];
    for (const aziende of vettoreAziende) {
        vettore.push(Object.assign(new Azienda(), aziende));
    }

    return vettore;
}
