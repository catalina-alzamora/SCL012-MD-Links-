const mdLinks = require('./index');
const marked = require('marked');
const file = process.argv[2];
const path = require('path');
const absolutePath = path.normalize(path.resolve(file)); // normalize() arregla la ruta, y resolve() la hace absoluta


function verifyMdFile(absolutePath) { // Función para detectar archivos tipo .md
  if (path.extname(absolutePath) === '.md') {
    console.log('es md')
    console.log(mdLinks.readingFile(absolutePath)); // llamando función para leer archivo

  } else {
    console.log('error. Ingrese un archivo .md');
  }
};

verifyMdFile(absolutePath);
