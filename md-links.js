const mdLinks = require('./index');
const marked = require('marked');
const file = process.argv[2];
const path = require('path');
const absolutePath = path.normalize(path.resolve(file)); // normalize() arregla la ruta. resolve() la hace absoluta


mdLinks.readingFile(absolutePath).then(absolutePath => console.log(absolutePath)); // llamando función para leer archivo

/*function verifyMdFile(absolutePath) { // Función para detectar archivos tipo .md
  if (path.extname(absolutePath) === '.md') {
    console.log('es md')
    mdLinks.readingFile(absolutePath).then(absolutePath => console.log(absolutePath)); 
  } else {
    console.log('error. Ingrese un archivo .md');
  }
};
verifyMdFile(absolutePath);*/
