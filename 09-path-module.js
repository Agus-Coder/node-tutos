const path = require('path');

console.log(path.sep) //separador de directorios

const filePath = path.join('/content','subfolder','test.txt')
console.log(filePath)

const base = path.basename(filePath) //te devuelve el contenido final de un determinado camino
console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','test.txt') //nos devuelve la ubcicaci[on absoluta del archivo en cuestion]
console.log(absolute)