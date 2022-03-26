const {readFileSync, writeFileSync} = require('fs')

//eso es lo mismo que const fs = require('fs')

console.log('start')

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}. Este archivo fue generado por node mediante writeFileSync`,
    {flag: 'a'}
)

console.log('end first task')

console.log('start new task')

//si haces un console log vas a ver como los console.log te muestran el inicio y fin de cada tarea. en este archivo
//la tarea siguiente no empieza hasta terminar la anterior, lo cual no es tan beneficioso si tenesmuchas tareas iniciando casi al mismo tiempo