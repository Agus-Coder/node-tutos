const { readFile, writeFile } = require('fs')

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
            (err,result)=>{
                if(err){
                    console.log(err)
                }
                console.log(result)
            }
        )
    })
})