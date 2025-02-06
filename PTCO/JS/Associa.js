document.addEventListener('DOMContentLoaded', function() {
        let studenti = leggiStudentiLocal();
        let aziende = leggiAziendeLocal();
        
        let studenteSelect = document.getElementById('studente');
        let aziendaSelect = document.getElementById('azienda');

        // Popolazione delle select con gli studenti
        for (let i = 0; i < studenti.length; i++) {
            let studente = studenti[i];
            let option = document.createElement('option');
            option.value = studente.getNome();
            option.textContent = studente.getNome() + " " + studente.getCognome();
            studenteSelect.appendChild(option);
        }

        // Popolazione delle select con le aziende
        for (let i = 0; i < aziende.length; i++) {
            let azienda = aziende[i];
            let option = document.createElement('option');
            option.value = azienda.getNome();
            option.textContent = azienda.getNome();
            aziendaSelect.appendChild(option);
        }
    
    document.getElementById('submitAssocia').addEventListener('click', function() {

        let studenteNome = studenteSelect.value;
        let aziendaNome = aziendaSelect.value;

        let studente = null;
        let azienda = null;

        // Ricerca dello studente selezionato
        for (let i = 0; i < studenti.length; i++) {
            if (studenti[i].getNome() == studenteNome) {
                studente = studenti[i];
                break;
            }
        }

        // Ricerca dell'azienda selezionata
        for (let i = 0; i < aziende.length; i++) {
            if (aziende[i].getNome() == aziendaNome) {
                azienda = aziende[i];
                break;
            }
        }

        // Verifica e associazione
        if (studente && azienda) {
            if (azienda.getStudentiAssociati().length < 2 && 
                calculateDistance(studente.getLat(), studente.getLon(), azienda.getLat(), azienda.getLon()) <= studente.getmaxDistanza()) {

                studente.aziendaAssociata = aziendaNome;
                azienda.getStudentiAssociati().push(studenteNome);

                salvaStudenteLocal(studenti);
                salvaAziendaLocal(aziende);

                alert('Associazione avvenuta con successo!');
            } else {
                alert('Associazione non possibile. Verifica distanza o numero massimo di studenti per questa azienda.');
            }
        } else {
            alert('Studente o Azienda non trovati.');
        }
    });
});
