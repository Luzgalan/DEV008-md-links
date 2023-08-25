#!/usr/bin/env node
import { mdLinks } from './index.js'
import chalk from 'chalk';
import meow from 'meow';// npm gestionar opciones 

const cli = meow(`
${chalk.greenBright('*********************************************')}
${chalk.greenBright('*')}           WELCOME TO MDLINKS              ${chalk.greenBright('*')} 
${chalk.greenBright('*********************************************')}
	
${chalk.bold('Modo de uso')}
    $ mdlinks <path>

${chalk.bold('Opciones')}
    --stats, --s            ${chalk.yellow('Obtiene las estadísticas básicas sobre los links')} 
    --validate, --v         ${chalk.cyan('Verifica si el link es valido')}
    --stats --validate      ${chalk.blueBright('Obtine las estadisticas añadiendo el estatus del link')}

${chalk.bold('Ejemplos')}
	  $ mdlinks ./myfolder --stats
`, {
  importMeta: import.meta,
  input: ['path'],
  flags: {
    stats: {
      type: 'boolean',
      shortFlag: 's'
    },
    validate: {
      type: 'boolean',
      shortFlag: 'v'
    }
  }
});

if (cli.input[0] == undefined) {
  console.log('Ingrese una ruta')
} else {
  mdLinks(cli.input[0], cli.flags)
    .then(response => {
      if (cli.flags.stats === false) {
        response.forEach(item => {
          if (cli.flags.validate === true) {
            console.log(chalk.yellow(item.file), chalk.greenBright(item.href), chalk.cyan(item.text), chalk.green(item.status), chalk.blueBright(item.mensaje))

          } else {
            console.log(chalk.yellow(item.file), chalk.greenBright(item.href), chalk.cyan(item.text))
          }
        })
      } else {
        if (cli.flags.validate === true) {
          console.log(chalk.bgBlue('Total:'), response.total)
          console.log(chalk.bgBlackBright('Unique:'), response.unique)
          console.log(chalk.bgRed('Broken:'), response.broken)
        } else {
          console.log(chalk.bgBlue('Total:'), response.total)
          console.log(chalk.bgMagenta('Unique:'), response.unique)
        }
      }
    })
    .catch(error => { console.log(error) })
}