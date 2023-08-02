//libreria de node que me permite trabajar con rutas
import chalk from 'chalk'
import fs from 'fs'
import path from 'path'

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
    console.log(chalk.bgYellow('Ruta absoluta ====>', route))
    return route
  } else {
    console.log(chalk.bgGreen.black('Ruta absoluta ====>', path.resolve(route)))
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
  if (fs.existsSync(route)) {
    console.log(chalk.bgCyan('Ruta valida'))
    return true;
  } else {
    return false;
  }
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
  else if (stats.isDirectory()) {
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
export function filesDirectory(route) {
  let arrayFiles = [];
  const files = fs.readdirSync(route, "utf-8");//leer los archivos y directorios
  files.forEach((file) => {
    const newRoute = path.join(route, file);
    const statsNew = fs.statSync(newRoute);
    if (statsNew.isFile()) {
      arrayFiles.push(newRoute);
    }
  });
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
  console.log(chalk.bgYellow('archivos antes de filtrar'))
  arrayFiles.forEach(f => {
    console.log(chalk.bgYellow(f))
  })
  return arrayFiles.filter(file => path.extname(file) === '.md');
}




//leer el md
//leer link
//promsea de http 
