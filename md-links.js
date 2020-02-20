const mdLinks = require('./index');
const marked = require('marked');
const fetch = require('node-fetch');
const file = process.argv[2];
const path = require('path');
const absolutePath = path.normalize(path.resolve(file)); // normalize() arregla la ruta. resolve() la hace absoluta



function verifyMdFile(absolutePath) { // Función para detectar archivos tipo .md
  if (path.extname(absolutePath) === '.md') {
    console.log('Se ha ingresado archivo .md correctamente')
    getLinks();
  } else {
    console.log('error. Ingrese un archivo .md');
  }
};

function getLinks() { // Función para obtener arreglo de todos los links
  let printLinks = new Promise((resolve, reject) => {
    mdLinks.readingFile(absolutePath)
      .then(datos => {
        let renderer = new marked.Renderer();
        let links = [];
        renderer.link = function (href, title, text) {
          links.push({
            href: href,
            text: text,
            file: absolutePath,
          });
        };
        marked(datos, {
          renderer: renderer
        });
        links = httpLinks(links); // Filtrar por prefijo http
        links = validLinks(links)
        return resolve(links)
      })
      .catch(err => {
        reject(console.log(err));
      })
  })
  return printLinks
}

function validLinks(links) { // Función que filtra por estado de links
  links.map(element => {
    fetch(element.href)
      .then(response => {
        if (response.status === 200) {
          console.log('(Texto: "' + element.text + '"', 'link: ' + element.href, 'Estado: ' + response.status + ')');
        } else {
          console.log('(Texto: "' + element.text + '"', 'link: ' + element.href, 'Estado: ' + response.status + ')');
        }
      })
      .catch(error =>
        console.log('Error. Este link no pudo ser leído ' + element.href))
  });
};

function httpLinks(links) { // Función que filtra por prefijo http de links
  let httpLinks = [];
  links.filter((element) => {
    let prefix = element.href.substring(0, 4);
    if (prefix == 'http') {
      return true;
    } else {
      return false;
    }
  })
  return httpLinks;
};

verifyMdFile(absolutePath);

getLinks();
getLinks().then(printLinks => {
  console.log(links)
})
