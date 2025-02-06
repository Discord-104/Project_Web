document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("submit").addEventListener('click', function() {
            let tipo = document.querySelector('input[name="tipo"]:checked').value;
            let descrizione = document.getElementById('descrizione').value;
            let importo = document.getElementById('importo').value;
            let data = document.getElementById('data').value;

            if (!data) {
                data = new Date();
            }

            let saldo = parseFloat(localStorage.getItem('saldo') || '0');

            if (tipo === 'prelievo' && importo > saldo) {
                document.getElementById('errore').textContent = "Errore: il saldo è insufficiente per il prelievo.";
                return;
            }

            // Aggiorna il saldo
            saldo = tipo === 'versamento' ? saldo + importo : saldo - importo;
            localStorage.setItem('saldo', saldo.toFixed(2));

            // Salva la transazione nella localStorage
            let transazioni = JSON.parse(localStorage.getItem('transazioni') || '[]');
            transazioni.push({ tipo, descrizione, importo, data });
            localStorage.setItem('transazioni', JSON.stringify(transazioni));

            alert('Transazione salvata con successo!');
            window.location.href = 'index.html'; // Ritorna alla pagina del saldo
    });
});