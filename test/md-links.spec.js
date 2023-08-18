// const mdLinks = require('../');

import { routeAbsoluted, routeValid, isFile } from "../funciones";
import path from 'path'
import fs from 'fs'


describe('Test routeAbsoluted', () => {
  it('deberia ser una funcion', () => {
    expect(typeof routeAbsoluted).toBe('function');
  });
  it('deberia retorna la ruta absoluta', async () => {
    const abosulta = path.resolve('/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas')
    expect(routeAbsoluted('./pruebas')).toEqual(abosulta)
  });
  it('deberia retorna la misma ruta si esta ya es absoluta', async () => {
    const archivo = '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas'
    expect(routeAbsoluted(archivo)).toEqual(archivo)
  });
});


describe('Test routeValid', () => {
  it('deberia ser una funcion', () => {
    expect(typeof routeValid).toBe('function');
  });
  it('deberia retornar true cuando la ruta es valida', async () => {
    expect(routeValid('/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas')).toEqual(true)
  });
  it('deberia retornar false cuando la ruta no es valida', async () => {
    expect(routeValid('/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/perritos')).toEqual(false)
  });
})

describe('Test isFile', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isFile).toBe('function');
  });
  it('deberia retornar true cuando es un archivo', async () => {
    expect(isFile('/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura.md')).toEqual(true)
  });
  it('deberia retornar false cuando es un directorio', async () => {
    expect(isFile('/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas')).toEqual(false)
  });
})

