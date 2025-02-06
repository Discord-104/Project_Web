document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitStudente').addEventListener('click', function() {
        let nome = document.getElementById('nome').value;
        let cognome = document.getElementById('cognome').value;
        let dataNascita = document.getElementById('born').value;
        let classe = document.getElementById('classe').value;
        let autoMotoMunito = document.getElementById('autoMotoMunito').checked;
        let accompagnato = document.getElementById('accompagnato').checked;
        let maxDistanza = document.getElementById('maxDistanza').value;
        let lat = parseFloat(document.getElementById('lat').value);
        let lon = parseFloat(document.getElementById('lon').value);
    
        let studente = new Studente(nome, cognome, dataNascita, classe, autoMotoMunito, accompagnato, maxDistanza, lat, lon);
        let studenti = leggiStudentiLocal()
        studenti.push(studente);
        salvaStudenteLocal(studenti);
 
        alert('Studente inserito con successo!');
    });
});


