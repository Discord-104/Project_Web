class Studente {
    constructor(nome, cognome, dataNascita, classe, autoMotoMunito, accompagnato, maxDistanza, lat, lon) {
        this.nome = nome;
        this.cognome = cognome;
        this.dataNascita = dataNascita;
        this.classe = classe;
        this.autoMotoMunito = autoMotoMunito;
        this.accompagnato = accompagnato;
        this.maxDistanza = maxDistanza;
        this.lat = lat;
        this.lon = lon;
        this.aziendaAssociata = null; // Nessuna azienda associata inizialmente
    }

    getNome(){
        return this.nome;
    }

    getCognome(){
        return this.cognome;
    }

    getDataNascita(){
        return this.dataNascita;
    }

    getClasse(){
        return this.classe;
    }

    getautoMotoMunito(){
        return this.autoMotoMunito;
    }

    getAccompagnato(){
        return this.accompagnato;
    }

    getmaxDistanza(){
        return this.maxDistanza;
    }

    getLat(){
        return this.lat;
    }

    getLon(){
        return this.lon
    }

    getaziendaAssociata(){
        return this.aziendaAssociata;
    }
}