// Attende il caricamento completo del DOM e poi carica la lista di film
document.addEventListener('DOMContentLoaded', function(){
    caricaFilm();
});

// Aggiunge un nuovo film alla lista e aggiorna la visualizzazione
function aggiungiFilm() {
    // Recupera i valori dai campi del modulo
    let titolo = document.getElementById('titolo').value;
    let descrizione = document.getElementById('descrizione').value;
    let dataUscita = document.getElementById('data-uscita').value;

    // Verifica che tutti i campi siano compilati
    if (titolo && descrizione && dataUscita) {
        // Crea un oggetto film con i dati inseriti
        let film = {
            titolo,
            descrizione,
            dataUscita,
            guardato: false // Imposta lo stato iniziale del film come non visto
        };

        // Recupera la lista di film dal localStorage, se non esiste inizializza un array vuoto
        let filmList = JSON.parse(localStorage.getItem('filmList')) || [];
        // Aggiunge il nuovo film alla lista
        filmList.push(film);
        // Salva di nuovo la lista aggiornata nel localStorage
        localStorage.setItem('filmList', JSON.stringify(filmList));

        // Aggiorna la visualizzazione della lista di film e pulisce il modulo
        aggiornaListaFilm();
        pulisciForm();
    }
}

// Carica i film dalla lista e aggiorna la visualizzazione
function caricaFilm() {
    aggiornaListaFilm();
}

// Aggiorna la lista di film visualizzata sul sito
function aggiornaListaFilm() {
    // Recupera la lista di film dal localStorage
    let filmList = JSON.parse(localStorage.getItem('filmList')) || [];
    // Trova l'elemento del DOM dove inserire la lista di film
    let filmListElement = document.getElementById('film-list');
    // Pulisce l'elemento esistente per aggiornare con i nuovi dati
    filmListElement.innerHTML = '';

    // Ottiene la data
    let oggi = new Date();

    // Itera su ogni film nella lista
    for (let index = 0; index < filmList.length; index++) {
        let film = filmList[index];
        let filmItem = document.createElement('li'); // Crea un elemento della lista per il film

        // Gestione delle classi
        filmItem.className = 'film-item'; // Assegna una classe CSS per lo stile
        if (film.guardato) {
            filmItem.classList.add('guardato'); // Aggiunge una classe se il film è stato visto
        }
        if (film.dataUscita < oggi) {
            filmItem.classList.add('grigio'); // Aggiunge una classe se il film è uscito prima di oggi
        }

        // Crea e aggiunge il titolo e la data di uscita del film all'elemento della lista
        let filmTitle = document.createElement('span');
        filmTitle.textContent = film.titolo + ' (' + film.dataUscita + ')';
        filmItem.appendChild(filmTitle);

        // Crea e aggiunge la descrizione del film all'elemento della lista
        let descrizioneDiv = document.createElement('div');
        descrizioneDiv.className = 'descrizione'; // Assegna una classe CSS per lo stile
        descrizioneDiv.textContent = film.descrizione;
        filmItem.appendChild(descrizioneDiv);

        // Crea e aggiunge un checkbox per segnare se il film è stato visto
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = film.guardato;

        // Aggiunge un listener per l'evento di cambiamento del checkbox
        checkbox.onchange = function() {
            toggleGuardato(index); // Chiama la funzione per aggiornare lo stato del film
        };

        filmItem.appendChild(checkbox);

        // Mostra il film solo se non è stato visto o se la casella "Mostra guardati" è selezionata
        if (!film.guardato || (film.guardato && document.getElementById('mostra-guardati').checked)) {
            filmListElement.appendChild(filmItem); // Aggiunge l'elemento alla lista visualizzata
        }
    }
}

// Pulisce i campi del modulo dopo l'aggiunta di un film
function pulisciForm() {
    document.getElementById('titolo').value = '';
    document.getElementById('descrizione').value = '';
    document.getElementById('data-uscita').value = '';
}

// Alterna lo stato di "guardato" di un film e aggiorna la visualizzazione
function toggleGuardato(index) {
    // Recupera la lista di film dal localStorage
    let filmList = JSON.parse(localStorage.getItem('filmList'));
    // Alterna lo stato del film selezionato
    filmList[index].guardato = !filmList[index].guardato;
    // Salva la lista aggiornata nel localStorage
    localStorage.setItem('filmList', JSON.stringify(filmList));
    // Aggiorna la visualizzazione della lista di film
    aggiornaListaFilm();
}

// Aggiorna la visualizzazione della lista di film in base alla selezione "Mostra guardati"
function toggleMostraGuardati() {
    aggiornaListaFilm();
}
