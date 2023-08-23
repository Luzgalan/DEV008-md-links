import chalk from "chalk";
import { axiosPeticion, fileToStringArray, filesInDirectory, filterMD, isFile, routeAbsoluted, routeValid, searchLinks, stats, statsValidate } from "./funciones.js";

export function mdLinks(path, options) {
  return new Promise((resolve, reject) => {
    const routeAbsoute = routeAbsoluted(path);

    if (routeValid(routeAbsoute) === false) {
      reject('Route invalid')
    }

    let arrayAllFile = []; //contiene todos los archivos
    if (isFile(routeAbsoute) === true) {
      arrayAllFile.push(routeAbsoute)
    } else {
      arrayAllFile = filesInDirectory(routeAbsoute)
    }


    let arrayFilesMd = filterMD(arrayAllFile)

    if (arrayFilesMd.length === 0) reject('No hay archivos md ')

    let fileString = fileToStringArray(arrayFilesMd);


    const linkKs = searchLinks(fileString)// VALIDATE FALSE




    if (options.validate === false && options.stats === false) {
      resolve(linkKs);
    }
    if (options.validate === true && options.stats === false) {
      axiosPeticion(linkKs)
        .then((response) => resolve(response));
    }

    if (options.validate === false && options.stats === true) {
      resolve(stats(linkKs));
    }
    if (options.validate === true && options.stats === true) {
      axiosPeticion(linkKs)
        .then((response) => resolve(statsValidate(response)));
    }

  });
};
