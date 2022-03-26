const { readFile, writeFile } = require('fs')

console.log('start')

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }

        const second = result;
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}. Este archivo fue generado por node mediante writeFileAsync`,
            (err, result) => {
                if (err) {
                    console.log(err)
                }
                console.log('end first task')
            }
        )
    })
})

//la lectura y escritura es sincronica porque la funcion escribir se encuentra dentro de la funcion leer. vos cuando lees, terminas escribiendo 

console.log('start new task')

//un console log aca te muestra el inicio de dos tareas antes de terminar la primera, lo cual es beneficioso para un servidor, como ya conoces.