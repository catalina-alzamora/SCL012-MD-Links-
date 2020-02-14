module.exports = () => {
  // ...
};


// obtener ruta y volverla absoluta con resolve()

// leer el directorio con .readdir

// leer archivo con .readFile

// detectar si es archivo md con .extname

// detectar si tiene links 

// validar links


const fs = require('fs')
const path = require('path')

const file = process.argv[2]
const absolutePath = path.resolve(file)

let readingFile = (absolutePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(absolutePath, function (err, data) {
      if (err) {
        return reject(err);
      }
      resolve(console.log(data.toString()));
    });
  })
}

readingFile(absolutePath);









/*const {
  readFile
} = require('fs');
const mifuncion = () => {
  return new Promise (resolve,reject) = {
    readFile(
      resolve(process.argv[2]), {
        encoding: 'utf-8'
      },
      (error, data) => {
        console.log(error)
        console.log(data)
        if(error) return reject(error);
        resolve(data)
        mifuncion()
        .then(filedata);
      })
      .catch ((error) =>
      console.log(error))
  }
}
*/
