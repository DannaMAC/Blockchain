const Blockchain = require('./blockchain');

const blockchain = new Blockchain("Hola a mi cadena de bloques", "00");

blockchain.addBlock("Datos del segundo bloque");
blockchain.addBlock("datos del tercer bloque");

console.log(blockchain);