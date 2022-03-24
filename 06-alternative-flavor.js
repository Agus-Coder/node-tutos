//Este mini tutorial muestra como se puede exportar de dos maneras extras a lo que se hizo antes. fijate que una crea un array
//mientras que el otro exporta un objeto creado.

const items = ['item1', 'item2']
const person = {
    name: 'boubbaloo'
}
// you can export like this:
module.exports.items = ['item1', 'item2']

module.exports.singlePerson = person;

//both do the same as past examples 