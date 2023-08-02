import chalk from "chalk";


import { filesDirectory, filterMD, isFile, routeAbsoluted, routeValid } from "./funciones.js";
export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    const routeAbsoute = routeAbsoluted(path);
    if (!routeValid(routeAbsoute)) {
      reject('route invalid')
    }
    let arrayAllFile = [];
    if (isFile(routeAbsoute)) {
      arrayAllFile.push(routeAbsoute)
      console.log('es un archivo')
    } else {
      arrayAllFile = filesDirectory(routeAbsoute)
      console.log('es un directorio')
    }

    let arrayFilesMd = filterMD(arrayAllFile)
    if (arrayFilesMd.length === 0) reject('No hay archivos md ')
    resolve(arrayFilesMd)
  });
};

mdLinks("./pruebas")
  .then(links => {
    console.log('Iniciando llamada a la promesa')
    console.log('Respuesta Promesa =>')
    links.forEach(l => {
      console.log(chalk.green(l))
    })

  })
  .catch(error => {
    console.log(chalk.red(error))
  });