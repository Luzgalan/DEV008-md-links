import chalk from "chalk";
import { axiosPeticion, fileToStringArray, filesInDirectory, filterMD, isFile, routeAbsoluted, routeValid, searchLinks } from "./funciones.js";

export const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    const routeAbsoute = routeAbsoluted(path);
    if (!routeValid(routeAbsoute)) {
      reject('Route invalid')
    }
    let arrayAllFile = []; //contiene todos los archivos
    if (isFile(routeAbsoute)) {
      arrayAllFile.push(routeAbsoute)
      console.log('es un archivo')
    } else {
      arrayAllFile = filesInDirectory(routeAbsoute)
      console.log('es un directorio')
    }

    let arrayFilesMd = filterMD(arrayAllFile)
    if (arrayFilesMd.length === 0) reject('No hay archivos md ')
    let fileString = fileToStringArray(arrayFilesMd);
    const linkKs = searchLinks(fileString)

    if (options.validate) {
      axiosPeticion(linkKs).then((res) => resolve(res));
    } else {
      resolve(linkKs)

    }






  });
};

mdLinks("./pruebas", { validate: true })
  .then(links => {
    console.log('Iniciando llamada a la promesa')
    console.log('Respuesta Promesa =>')
    links.forEach(l => {
      const lArreglo = Object.values(l)
      if (lArreglo.length <= 3) {
        console.log(chalk.green(lArreglo))
      } else {
        if (lArreglo[3] == 200) {
          console.log(chalk.green(lArreglo))
        }
        if (lArreglo[3] != 200) {
          console.log(chalk.red(lArreglo))
        }
      }

      // console.log(chalk.green('file =>', l.file,))
      // console.log(chalk.green('text =>', l.text,))
      // console.log(chalk.green('href =>', l.href,))
      // console.log(chalk.green('status =>', l.status,))
      // console.log(chalk.green('mensaje =>', l.mensaje,))




    })

  })
  .catch(error => {
    console.log(chalk.red(error))
  });