// Funzione per aggiornare la tabella degli studenti
function aggiornaTabella(studenti, filter, tableBody) {
    tableBody.innerHTML = '';
    let filtroValore = filter.value;

    for (let i = 0; i < studenti.length; i++) {
        let studente = studenti[i];
        let row = tableBody.insertRow();
        let nomeCell = row.insertCell();
        let cognomeCell = row.insertCell();
        let classeCell = row.insertCell();
        let aziendaCell = row.insertCell();
        let distanzaCell = row.insertCell();

        nomeCell.textContent = studente.getNome();
        cognomeCell.textContent = studente.getCognome();
        classeCell.textContent = studente.getClasse();

        if (studente.getaziendaAssociata()) {
            aziendaCell.textContent = studente.getaziendaAssociata();
        } else {
            aziendaCell.textContent = 'Nessuna';
        }

        let distanza = '';
        if (studente.getaziendaAssociata()) {
            let aziende = leggiAziendeLocal();
            for (let j = 0; j < aziende.length; j++) {
                let azienda = aziende[j];
                if (azienda.getNome() == studente.getaziendaAssociata()) {
                    distanza = calculateDistance(studente.getLat(), studente.getLon(), azienda.getLat(), azienda.getLon()).toFixed(2) + ' km';
                    break;
                }
            }
        }

        distanzaCell.textContent = distanza;

        if (!studente.getaziendaAssociata()) {
            row.style.color = 'red';
        } else {
            row.style.color = '';
        }
    }

    if (filtroValore == 'associati') {
        let studentiAssociati = [];
        for (let i = 0; i < studenti.length; i++) {
            if (studenti[i].getaziendaAssociata()) {
                studentiAssociati.push(studenti[i]);
            }
        }

        studentiAssociati.sort(function(a, b) {
            let aziende = leggiAziendeLocal();
            let aziendaA = null;
            let aziendaB = null;

            for (let j = 0; j < aziende.length; j++) {
                if (aziende[j].getNome() == a.getaziendaAssociata()) {
                    aziendaA = aziende[j];
                }
                if (aziende[j].getNome() == b.getaziendaAssociata()) {
                    aziendaB = aziende[j];
                }
            }

            let distanzaA = calculateDistance(a.getLat(), a.getLon(), aziendaA.getLat(), aziendaA.getLon());
            let distanzaB = calculateDistance(b.getLat(), b.getLon(), aziendaB.getLat(), aziendaB.getLon());

            return distanzaA - distanzaB;
        });

        for (let i = 0; i < studentiAssociati.length; i++) {
            let studente = studentiAssociati[i];
            let row = tableBody.insertRow();
            let nomeCell = row.insertCell();
            let cognomeCell = row.insertCell();
            let classeCell = row.insertCell();
            let aziendaCell = row.insertCell();
            let distanzaCell = row.insertCell();

            nomeCell.textContent = studente.getNome();
            cognomeCell.textContent = studente.getCognome();
            classeCell.textContent = studente.getClasse();

            if (studente.getaziendaAssociata()) {
                aziendaCell.textContent = studente.getaziendaAssociata();
            } else {
                aziendaCell.textContent = 'Nessuna';
            }

            let distanza = '';
            if (studente.getaziendaAssociata()) {
                let aziende = leggiAziendeLocal();
                for (let j = 0; j < aziende.length; j++) {
                    let azienda = aziende[j];
                    if (azienda.getNome() == studente.getaziendaAssociata()) {
                        distanza = calculateDistance(studente.getLat(), studente.getLon(), azienda.getLat(), azienda.getLon()).toFixed(2) + ' km';
                        break;
                    }
                }
            }

            distanzaCell.textContent = distanza;

            if (!studente.getaziendaAssociata()) {
                row.style.color = 'red';
            } else {
                row.style.color = '';
            }
        }
    }
}

// Funzione principale eseguita al caricamento del DOM
document.addEventListener('DOMContentLoaded', function() {
    let studenti = leggiStudentiLocal();
    let filter = document.getElementById('filter');
    let tableBody = document.getElementById('studentiTable').getElementsByTagName('tbody')[0];

    filter.addEventListener('change', function() {
        aggiornaTabella(studenti, filter, tableBody);
    });

    aggiornaTabella(studenti, filter, tableBody);
});
