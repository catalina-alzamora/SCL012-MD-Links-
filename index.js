const fs = require('fs');

module.exports = (absolutePath) => {
  return new Promise((resolve, reject) => { // Función para leer archivo
    fs.readFile(absolutePath, function (err, data) {
      if (err) {
        return reject(err);
      }
      resolve(console.log(data.toString()));
    });
  })
};

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


/* Pasos a seguir:
-obtener ruta y volverla absoluta con resolve()
-leer el directorio con .readdir
-leer archivo con .readFile
-detectar si es archivo md con .extname
-detectar si tiene links 
-validar links
*/
