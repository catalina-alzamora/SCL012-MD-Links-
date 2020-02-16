const fs = require('fs');

module.exports = (absolutePath) => {

};

const readingFile = (path => { // Función para leer archivo
  let content = new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  })
  return content
})

/*function readingDir(absolutePath) { // Función para reconocer directorios
  return new Promise((resolve, reject) => {
    fs.stat(absolutePath, (err, stats) => {
      if (err) {
        reject(err);
      }
      resolve(console.log(stats.isDirectory()));
    });
  })
};
module.exports.readingDir = readingDir;*/

module.exports.readingFile = readingFile;


/* Pasos a seguir:
-obtener links 
-validar links
*/
