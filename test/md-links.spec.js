// const mdLinks = require('../');

import { routeAbsoluted, routeValid, isFile, filesInDirectory, filterMD, fileToStringArray, searchLinks, axiosPeticion, stats, statsValidate } from "../funciones";
import path from 'path'
import fs from 'fs'
import { fileToStr, arrayObject, filesFilterMd, filesInDir, links, axiosResponse, statsNoValidate, statsValidat } from "./const";
import axios from "axios";


describe('Test routeAbsoluted', () => {
  it('deberia ser una funcion', () => {
    expect(typeof routeAbsoluted).toBe('function');
  });
  it('deberia retorna la ruta absoluta cuando la ruta sea relativa', async () => {
    const abosulta = path.resolve('/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas')
    expect(routeAbsoluted('./pruebas')).toBe(abosulta)
  });
  it('deberia retorna la misma ruta si esta ya es absoluta', async () => {
    const absoluted = '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas'
    expect(routeAbsoluted(absoluted)).toBe(absoluted)
  });
});


describe('Test routeValid', () => {
  it('deberia ser una funcion', () => {
    expect(typeof routeValid).toBe('function');
  });
  it('deberia retornar true cuando la ruta es valida', async () => {
    expect(routeValid('/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas')).toBe(true)
  });
  it('deberia retornar false cuando la ruta no es valida', async () => {
    expect(routeValid('/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/perritos')).toBe(false)
  });
})

describe('Test isFile', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isFile).toBe('function');
  });
  it('deberia retornar true cuando es un archivo', async () => {
    expect(isFile('/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura.md')).toBe(true)
  });
  it('deberia retornar false cuando es un directorio', async () => {
    expect(isFile('/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas')).toBe(false)
  });
})



describe('Test filesInDirectory', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filesInDirectory).toBe('function');
  });
  it('deberia retornar un array de archivos que se encuentran en un directorio', async () => {
    expect(filesInDirectory('/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas')).toEqual(filesInDir)

  });
})



describe('Test filterMD', () => {
  it('deberia ser una funcion', () => {
    expect(typeof filterMD).toBe('function');
  });
  it('deberia retornar archivos .MD ', async () => {
    expect(filterMD(filesInDir)).toEqual(filesFilterMd)

  });
})



describe('Test fileToStringArray', () => {
  it('deberia ser una funcion', () => {
    expect(typeof fileToStringArray).toBe('function');
  });
  it('deberia retornar un array de objetos con la ruta y el contenido', async () => {
    expect(fileToStringArray(arrayObject)).toEqual(fileToStr)

  });
})



describe('Test searchLinks', () => {
  it('deberia ser una funcion', () => {
    expect(typeof searchLinks).toBe('function');
  });
  it('deberia retornar los links cuando reciba de parametro  fileToStr', async () => {
    expect(searchLinks(fileToStr)).toEqual(links)

  });
})

describe('Test axiosPeticion', () => {
  it('deberia ser una funcion', () => {
    expect(typeof axiosPeticion).toBe('function');
  });
  it('deberia retornar un array de objeto que contenga las propiedades de status y mensaje', async () => {
    expect(await axiosPeticion(links)).toEqual(axiosResponse)

  });
})



describe('Test stats', () => {
  it('deberia ser una funcion', () => {
    expect(typeof stats).toBe('function');
  });
  it('deberia retornar un objeto con las estadisticas de total y unike', async () => {
    expect(stats(links)).toEqual(statsNoValidate)

  });
})



describe('Test statsValidate', () => {
  it('deberia ser una funcion', () => {
    expect(typeof statsValidate).toBe('function');
  });
  it('deberia retornar', async () => {
    expect(statsValidate(axiosResponse)).toEqual(statsValidat)

  });
})