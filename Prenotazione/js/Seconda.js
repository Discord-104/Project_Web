document.addEventListener('DOMContentLoaded', function() {
    let biglietti = leggiBigliettiLocal();
    let tbody = document.querySelector('#bigliettiTable tbody');

    for (const b of biglietti) {
        let tr = document.createElement('tr');
        tr.innerHTML = 
            '<td>' + b.nome + '</td>' +
            '<td>' + b.cognome + '</td>' +
            '<td>' + b.born + '</td>' +
            '<td>' + b.posti + '</td>' +
            '<td>' + b.numero + '</td>' +
            '<td>' + b.dataInserimento + '</td>';
        tbody.appendChild(tr);
        for (const biglietto of biglietti) {
            if(b != biglietto){
                if(b.posti == biglietto.posti && b.numero == biglietto.numero){
                    tr.className = 'duplicata';
                }
            }
           
        }

       
    }
});

function TornaIndietro() {
     window.location.href = 'Index.html'
}

document.addEventListener('DOMContentLoaded', function() {
    let isEditMode = false;
    document.getElementById('Modifica').addEventListener('click', function() {
        let rows = document.querySelectorAll('#bigliettiTable tbody tr');

        if (!isEditMode) {
            for (const row of rows) {
                let button = document.createElement('button');
                button.innerText = 'Cancella';
                button.classList.add('cancelButton');
                button.addEventListener('click', function() {
                    let nome = row.cells[0].innerText;
                    let cognome = row.cells[1].innerText;
                    let born = row.cells[2].innerText;
                    let posti = row.cells[3].innerText;
                    let numero = row.cells[4].innerText
                    let dataInserimento = row.cells[5].innerText;

                    let biglietti = leggiBigliettiLocal();
                    let newBiglietti = [];
                    //ciclo for per creare un nuovo array senza l'elemento da rimuovere
                    for (let i = 0; i < biglietti.length; i++) {
                        let b = biglietti[i];
                        if (!(b.nome == nome && b.cognome == cognome && b.born == born && b.posti == posti && b.numero == numero && b.dataInserimento == dataInserimento)) {
                            newBiglietti.push(b);
                        }
                    }
                    salvaBigliettiLocal(newBiglietti);

                    row.remove();
                });
                row.append(button);
            }
            isEditMode = true;
        } else {
            let buttons = document.querySelectorAll('.cancelButton');
            for (const button of buttons) {
                button.remove();
            }
            isEditMode = false;
        }
    });
});