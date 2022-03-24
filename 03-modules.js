// Every file is a module in node.js

const anyname = require('./04-names')
const saybye = require('./05-function')
const uncleSam = require('./06-alternative-flavor')

saybye(anyname.agus)
sayHi('Agus')


console.log(uncleSam)

require('./07-mind-grenade') // it is not assigned to a variable but stills executes

//it is not an exporting, it is an EXECUTING!