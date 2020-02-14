const mdLinks = require('./index');
const file = process.argv[2];
const path = require('path');
const absolutePath = path.resolve(file);

// console.log(mdLinks(absolutePath)); // llamando función para leer archivo
console.log('¿es directorio?' + mdLinks.readingDir(absolutePath))
