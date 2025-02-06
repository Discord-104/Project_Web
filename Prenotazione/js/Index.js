document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('confirmButton').addEventListener('click', function() {
        // Selezioniamo i campi del modulo
        let nome = document.getElementById('nome');
        let cognome = document.getElementById('cognome');
        let born = document.getElementById('born');
        let posti = document.getElementById('posti');
        let numero = document.getElementById('numero');
        let checkbox = document.getElementById('checkbox');
        let d = document.getElementById("sss").value;
        
        // Reset degli errori
        nome.classList.remove('error');
        cognome.classList.remove('error');
        born.classList.remove('error');
        posti.classList.remove('error');
        numero.classList.remove('error');
        checkbox.classList.remove('error');

        // Variabile di controllo per la validazione
        let isValid = true;
        let messages = [];

        if(d == ''){
            alert("suca");
        }

        // Controllo del campo nome
        if (nome.value == '') {
            isValid = false;
            nome.classList.add('error');
            messages.push('Il campo Nome è obbligatorio.' + '\n');
        }

        // Controllo del campo cognome
        if (cognome.value == '') {
            isValid = false;
            cognome.classList.add('error');
            messages.push('Il campo Cognome è obbligatorio.' + '\n');
        }

        // Controllo del campo data di nascita
        if (born.value == '') {
            isValid = false;
            born.classList.add('error');
            messages.push('Il campo Data di nascita è obbligatorio.' + '\n');
        }

        // Controllo della selezione del posto
        if (posti.value == '') {
            isValid = false;
            posti.classList.add('error');
            messages.push('Seleziona una colonna.' + '\n');
        }

        // Controllo del numero del posto
        if (numero.value == '' || numero.value < 0 || numero.value > 10) {
            isValid = false;
            numero.classList.add('error');
            messages.push('Inserisci un numero di posto valido tra 0 e 10.' + '\n');
        }

        // Controllo dell'accettazione dei termini e condizioni
        if (!checkbox.checked) {
            isValid = false;
            checkbox.classList.add('error');
            messages.push('Devi accettare i termini e le condizioni.' + '\n');
        }

        // Stampa dei messaggi di errore nella console
        if (isValid) {
            
            alert('Modulo inviato con successo!');
            let dataInserimento = new Date();
            let biglietto = new Biglietto(nome.value, cognome.value, born.value, posti.value, numero.value, checkbox.checked, dataInserimento);
            console.log(biglietto);
            let vettoreBiglietti = leggiBigliettiLocal();
            vettoreBiglietti.push(biglietto);
            salvaBigliettiLocal(vettoreBiglietti);
            window.location.href = 'Seconda.html'
        }
        else
        {
            let errorMessage = "";
            for (let message of messages) {
                errorMessage += message + "\n";
            }
            alert(errorMessage);
        }
    });
});
