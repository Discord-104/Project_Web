class Salvadanaio {
    constructor(radio, descrizione, importo, data) {
        this.data = data;
        this.descrizione = descrizione;
        this.importo = importo;
        this.radio = radio;
    }

    getRadio(){
        return this.radio;
    }

    getDescrizione(){
        return this.descrizione;
    }

    getImporto(){
        return this.importo;
    }

    getData(){
        return this.data;
    }
    
}