document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitAzienda').addEventListener('click', function() {
        let nome = document.getElementById('nome').value;
        let mail = document.getElementById('mail').value;
        let telefono = document.getElementById('telefono').value;
        let lat = parseFloat(document.getElementById('lat').value);
        let lon = parseFloat(document.getElementById('lon').value);
    
        let azienda = new Azienda(nome, mail, telefono, lat, lon);

        let aziende = leggiAziendeLocal();
        aziende.push(azienda);
        salvaAziendaLocal(aziende);
  
        alert('Azienda inserita con successo!');
    });
});