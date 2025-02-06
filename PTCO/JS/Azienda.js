class Azienda {
    constructor(nome, mail, telefono, lat, lon) {
        this.nome = nome;
        this.mail = mail;
        this.telefono = telefono;
        this.lat = lat;
        this.lon = lon;
        this.studentiAssociati = []; // Lista di studenti associati
    }

    getNome() {
        return this.nome;
    }

    getMail(){
        return this.mail;
    }

    getTelefono(){
        return this.telefono;
    }

    getLat(){
        return this.lat;
    }

    getLon(){
        return this.lon;
    }

    getStudentiAssociati(){
        return this.studentiAssociati;
    }
}