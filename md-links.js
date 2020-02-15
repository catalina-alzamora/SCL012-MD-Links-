const mdLinks = require('./index');
const file = process.argv[2];
const path = require('path');
const absolutePath = path.normalize(path.resolve(file)); // normalize() arregla la ruta, y resolve() la hace absoluta

// console.log(mdLinks(absolutePath)); // llamando función para leer archivo

function isMd(absolutePath) {
  if (path.extname(absolutePath) === '.md') {
    console.log('es md')
  } else {
    console.log('error. Ingrese un archivo .md');
  }
};

isMd(absolutePath);
