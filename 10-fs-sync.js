const {readFileSync, writeFileSync} = require('fs')

//eso es lo mismo que const fs = require('fs')

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/second.txt','utf8');

writeFileSync(
    './content/result-sync.txt',
    `Here is the result: ${first}, ${second}. Este archivo fue generado por node mediante writeFileSync`,
    {flag: 'a'}
)