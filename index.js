const fs = require('fs');

module.exports = (absolutePath) => {

};

const readingFile = (absolutePath) => {
  return new Promise((resolve, reject) => { // Función para leer archivo
    fs.readFile(absolutePath, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(console.log(data));
    });
  })
}

function readingDir(absolutePath) { // Función para reconocer directorios
  return new Promise((resolve, reject) => {
    fs.stat(absolutePath, function (err, stats) {
      if (err) {
        return reject(err);
      }
      resolve(console.log(stats.isDirectory()));
    });
  })
};

module.exports.readingDir = readingDir;
module.exports.readingFile = readingFile;

/* Pasos a seguir:
-obtener links 
-validar links
*/
