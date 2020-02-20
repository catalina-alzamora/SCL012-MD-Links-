const mdLinks = require('./index');
const marked = require('marked');
const fetch = require('node-fetch');
const chalk = require('chalk');
const file = process.argv[2];
const path = require('path');
const absolutePath = path.normalize(path.resolve(file)); // normalize() arregla la ruta. resolve() la hace absoluta


function verifyMdFile(absolutePath) { // Función para detectar archivos tipo .md
  if (path.extname(absolutePath) === '.md') {
    console.log('archivo corresponde a .md')
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
        links = validLinks(links); // Filtrar por status
        console.log(links)
        return resolve(links)
      })
      .catch(err => {
        //(console.log(err));
      })
  })
  return printLinks
}

function validLinks(links) { // Función que filtra por estado de links
  links.map(element => {
    fetch(element.href)
      .then(response => {
        if (response.status === 200) {
          console.log(chalk.blue('Texto: ' + element.text + ' '), ('Link: ' + element.href), chalk.green('Estado: ' + response.status + ''));
        } else {
          console.log('(Texto: "' + element.text + '"', 'Link: ' + element.href, 'Estado: ' + response.status + ')');
        }
      })
      .catch(error =>
        console.log(chalk.red('Link con error ' + element.href)))
  });
};

function httpLinks(links) { // Función que filtra por prefijo http de links
  let httpLinks = [];
  links.map((element) => {
    let prefix = element.href.substring(0, 4);
    if (prefix == 'http') {
      httpLinks.push(element);
    }
  })
  return httpLinks;
};

verifyMdFile(absolutePath);
