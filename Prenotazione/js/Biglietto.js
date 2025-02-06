class Biglietto{
    constructor(nome, cognome, born, posti, numero, checkbox, dataInserimento){
        this.nome = nome;
        this.cognome = cognome;
        this.born = born;
        this.posti = posti;
        this.numero = numero;
        this.checkbox = checkbox;
        this.dataInserimento = dataInserimento;

    }
    getNome() {
        return this.nome;
    }

    getCognome(){
        return this.cognome;
    }

    getBorn(){
        return this.born;
    }

    getPosti(){
        return this.posti;
    }

    getNumero(){
        return this.numero;
    }

    getCheckbox(){
        return this.checkbox;
    }

    getDataInserimento(){
        return this.dataInserimento;
    }

    
}