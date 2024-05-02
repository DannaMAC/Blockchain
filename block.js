const SHA256 = require('crypto-js/sha256')
class Block {
    //Index = Posición del bloque de la cadena.
    //data = EL contenido del bloque de la cadena.
    //previousHash = Valor del bloque anterior de la cadena e cifrada.
    //date = Fecha de la creación del bloque
    //bash = Validació como cadena valida.
    //nouce = Numero aleatorio de la cadena de bloques.
    constructor(index, data, previousHash = ''){
        this.index = index;
        this.data = data; 
        this.previousHash = previousHash;
        this.nouce = 0;
        this.hash = this.createdHash();
    }
    createdHash(){//Hash es una cadena
        const originalChain = `${this.index}|${this.data}|${this.date}|${this.nouce}`;
        return SHA256(originalChain).toString(); 
    }

    mine(dif){
        while(!this.hash.startsWith(dif)){
            this.nouce++;
            this.hash = this.createdHash();
        }
    }
}

module.exports = Block;