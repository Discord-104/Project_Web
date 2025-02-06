class Comune {
    constructor(saldoIniziale) {
        this.saldo = saldoIniziale || 0;
        this.transazioni = JSON.parse(localStorage.getItem('transazioni')) || [];
    }

    // Ottiene il saldo attuale
    getSaldo() {
        return this.saldo;
    }

    // Aggiunge una nuova transazione
    aggiungiTransazione(tipo, descrizione, importo, data) {
        if (tipo === 'prelievo' && importo > this.saldo) {
            return "Errore: saldo insufficiente per il prelievo!";
        }

        this.saldo = tipo === 'versamento' ? this.saldo + importo : this.saldo - importo;

        // Aggiungi transazione alla lista
        this.transazioni.push({ tipo, descrizione, importo, data });

        // Salva saldo e transazioni nel localStorage
        localStorage.setItem('saldo', this.saldo.toFixed(2));
        localStorage.setItem('transazioni', JSON.stringify(this.transazioni));

        return "Transazione completata con successo!";
    }

    // Ottiene tutte le transazioni
    getTransazioni() {
        return this.transazioni;
    }
}
