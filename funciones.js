//libreria de node que me permite trabajar con rutas
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'
import axios from 'axios'

/**
 * Función para convertir una ruta a ruta absoluta
 * @date 1/8/2023 - 11:58:56
 * @author Luz Vazquez
 *
 * @export
 * @param {*} route  ruta relativa o absoluta
 * @returns {*}  ruta absoluta
 */

export function routeAbsoluted(route) {
  if (path.isAbsolute(route)) { // Verifica si la ruta es absolutas
    return route
  } else {
    return path.resolve(route)
  }
}





/**
 * Función para validar la ruta
 * @date 1/8/2023 - 11:56:51
 * @author Luz Vazquez
 *
 * @export
 * @param {*} route ruta absoluta a validar
 * @returns {boolean}  true si es valido, false si es invalido
 */
export function routeValid(route) {
  return fs.existsSync(route)

};


/**
 * Verifica si un archivo es directorio o archivo
 * @date 1/8/2023 - 11:51:53
 *
 * @param {*} route Ruta que vamos a validar
 * @returns {boolean} True, si es archivo, False si es directorio
 */
export function isFile(route) {
  const stats = fs.statSync(route);
  if (stats.isFile()) {
    return true;
  }
  else {
    return false
  }

}


/**
 * Obtiene todos los archivos de un drirectorio
 * @date 1/8/2023 - 12:09:44
 * @author Luz Vazquez
 *
 * @export
 * @param {*} route ruta de donde queremos obtener los archivos
 * @returns {{}} Arreglo de todos los archivos encontrados
 */
export function filesInDirectory(route) {
  let arrayFiles = [];

  function exploreDirectory(currentRoute) {
    const files = fs.readdirSync(currentRoute, "utf-8");
    files.forEach((file) => {
      const newRoute = path.join(currentRoute, file);
      const statsNew = fs.statSync(newRoute);
      if (statsNew.isFile()) {
        arrayFiles.push(newRoute);
      } else {
        exploreDirectory(newRoute); // Llamada recursiva para explorar subdirectorios
      }
    });
  }

  exploreDirectory(route); // Iniciar la exploración desde la ruta principal
  return arrayFiles;
}





/**
 * Funcion para filtar los archivos .md 
 * @date 1/8/2023 - 21:26:48
 * @author Luz Vazquez
 *
 * @export
 * @param {*} arrayFiles  arreglo de archivos
 * @returns {*} array de archivos .md unicamente
 */
export function filterMD(arrayFiles) {
  return arrayFiles.filter(file => path.extname(file) === '.md');
}



/**
 * Convierte un array de rutas de archivos en un array de objetos con contenido de archivos.
 * @date 15/8/2023 - 20:11:27
 * @author Luz Vazquez
 *
 * @export
 * @param {*} arrayFiles
 * @returns {Array.<{filePath: string, content: string}>} - Un array de objetos con la ruta y el contenido de cada archivo.
 */


export function fileToStringArray(arrayFiles) {
  const allFiles = [];
  arrayFiles.forEach((pathFile) => {//Recorremos cada uno de los archivos
    const content = fs.readFileSync(pathFile, 'utf-8')//leer el archivo
    allFiles.push({ filePath: pathFile, content: content })
  });
  return allFiles
};


/**
 * Obtiene todos los links 
 * @date 15/8/2023 - 20:15:04
 * @param {Array.<{filePath: string, content: string}>} stringArray 
 * @returns {Array.<{file: string,  href: string, text: string}>} 
 */
export function searchLinks(stringArray) {
  const links = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g; // Patrón regular que busca esto [texto](enlace)

  stringArray.forEach((file) => {
    const ArrayMatches = file.content.match(regex);
    if (ArrayMatches) { // Aca estan todos los links encontrados [texto](enlace) en un array
      ArrayMatches.forEach((linkMatch) => {//Recorremos cada uno de los links
        const matchParts = linkMatch.match(/\[([^\]]+)\]\(([^)]+)\)/); //parte en dos el link para traer el contenido y la url
        // if (matchParts) {
        const text = matchParts[1]; // Texto entre corchetes
        const link = matchParts[2]; // Enlace entre paréntesis
        links.push({ file: file.filePath, href: link, text: text, }); // Pushea los objetos { filePath, text, link }
        // }
      });
    }
  });
  return links;
}


/**
 * funcion para las peticiones http con axios
 * @date 15/8/2023 - 20:50:23
 * @author Luz Vazquez
 *
 * @param {Array.<{file: string,  href: string, text: string}>}  arryLinks
 * @returns {Array.<{file: string,  href: string, text: string, status: number, mensaje: string}>}
 */
export const axiosPeticion = (arryLinks) => {
  const arrayPromises = arryLinks.map((item) => {
    return axios
      .get(item.href)
      .then((response) => { // status 200
        item.status = response.status
        item.mensaje = response.statusText
        return item
      })
      .catch((err) => {
        if (err.response) {// 300, 400, 500
          item.status = err.response.status;
          item.mensaje = err.response.statusText
        } else { //uNDEFINED
          item.status = 404
          item.mensaje = 'Not found'
        }
        return item
      });
  });
  return Promise.all(arrayPromises)
}



/**
 * retorna las estadisitcas de los links
 * @date 21/8/2023 - 22:01:21
 * @author Luz Vazquez
 *
 * @export
 * @param {Array.<{file: string,  href: string, text: string}>}  arrayLinks
 * @returns {{ total: number; unique: number; }}
 */
export function stats(arrayLinks) {
  const setUniques = new Set();  //set es un tipo de dato que nos ayuda almacenar valores unicos 
  arrayLinks.forEach(item => setUniques.add(item.href));
  return { total: arrayLinks.length, unique: setUniques.size }
}


/**
 * retorna las estadisitca y cuantos son validos
 * @date 21/8/2023 - 22:02:38
 * @author Luz Vazquez
 *
 * @export
 * @param {Array.<{file: string,  href: string, text: string, status: number, mensaje: string}>} arrayLinks
 * @returns {{ total: number; unique: number; broken: number; }}
 */
export function statsValidate(arrayLinks) {
  const setUniques = new Set();  //set es un tipo de dato que nos ayuda almacenar valores unicos 
  arrayLinks.forEach(item => setUniques.add(item.href));
  const broken = arrayLinks.filter(item => item.status !== 200)
  return { total: arrayLinks.length, unique: setUniques.size, broken: broken.length }
}

