![](/assets/logo1.jpeg)

## Índice

* [1. Introducción](#1-Introducción)
* [2. Requerimientos e instalación](#2-Requerimientos-e-instalación)
* [3. Uso de la librería ](#3-Uso-de-la-librería )
* [4. Ejemplos de uso](#4-Ejemplos-de-uso)
* [5. Ejemplos de uso adicionales](#5-Ejemplos-de-uso-adicionales)
* [6. Demo](#6-Demo)


***

## 1. Introducción

Markdown es un lenguaje de marcado muy popular en plataformas que manejan texto planos, tales como GitHub, foros, blogs, entre otros y es muy común encontrarlo por ejemplo en archivos 'README.md'. Estos archivos suelen contener links invalidos o en su caso que estan rotos.

🚀 ¡Optimiza tus archivos Markdown con nuestra Revolucionaria Librería de Análisis de Enlaces y Estadísticas! 📊🔗

Esta librería te ofrece capacidades avanzadas para examinar los contenidos de archivos Markdown con el propósito de verificar la integridad y validez de los enlaces incluidos, al tiempo que genera estadísticas relevantes sobre el contenido.

🚀 ¡No dejes que los enlaces rotos te detengan - actúa ahora y marca la diferencia! 💪🔗 🚀





## 2. Requerimientos e instalación

  1. Se requiere NodeJs versión 16 o superior
  2. Para la instalación de la librería se ejecuta el siguiente comando
   - Instalación global
```bash
 npm install -g luzvg-md-links
```
- Instalación local
```bash
 npm install  luzvg-md-links
```
 ## 3. Uso de la librería 

 Cuando se tenga la libreria instalada sera necesario proporcionar los datos en la terminal de la siguiente forma:

 ```bash
 md-links <path> [options]
```

* **Path**  Es la ruta relativa o absoluta que el usuario ingresa.
* **Options** a ejecutar (--validate, --stats, --validate --stats).

## 4. Ejemplos de uso


* **Opción 1:** En esta opción se visualiza la ruta del archivo donde se encontrarón los links, el link y el texto.
 ```bash
 md-links ruta 
```
    

* **Opción 2:** Esta opción realiza la petición HTTP mostrando los links, adicinalmente el estatus y la respuesta (ok o Not Found) del cual indica si el link es valido o esta roto. 

```bash
 md-links ruta --validate | md-links ruta --v
```

* **Opción 3:** En esta opcion se visualiza las estadísticas básicas sobre los links, es decir;  Links totales | Links únicos

```bash
 md-links ruta --stats | md-links ruta --s

 Total: 3
 Unique: 3
```

* **Opción 4:** En esta opción se muestra las estadísticas de los links encontrados, links repetidos y links rotos. Es decir;  Total | Unique | Broken

```bash
 md-links ruta --stats --validate | md-links ruta --s --v

 Total: 3
 Unique: 3
 Broken: 1
```

## 5. Ejemplos de uso adicionales


* **Ayuda:** En esta opción se visualiza la ayuda de la librería y sus opciones a elegir.
 ```bash
 md-links --help
```
* **Version:** Informa la versión en la cual se encuentra la librería.
 ```bash
 md-links --version
```
      
## 6. Demo

* **Opción 1:** `md-links ruta`

![](/assets/path.jpeg) 

* **Opción 2:** `md-links ruta --v`

![](/assets/validate.jpeg)

* **Opción 3:**  `md-links ruta --s`

![](/assets/stats.jpeg)

* **Opción 4:** `md-links ruta --s --v`

![](/assets/syv.jpeg)

* **Opción ayuda:** `md-links ruta --help`

![](/assets/help.jpeg)













