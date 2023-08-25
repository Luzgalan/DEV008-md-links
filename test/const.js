export const filesInDir = [

  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/carpetaHija/archivoHija.js',
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/carpetaHija/carpetaNieta/achivoNieta.js',
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/carpetaHija/holitas.md',
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/carpetaHijo/archivoHijo.js',
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/escritos.js',
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/hola.py',
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura.md',
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura2.md',
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura3.md'
]


export const filesFilterMd = [
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/carpetaHija/holitas.md',
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura.md',
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura2.md',
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura3.md'
]

export const arrayObject = [
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura2.md',
  '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura3.md']

export const fileToStr = [
  { filePath: '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura2.md', content: 'Lectura MD2\n[getAddressPedadi](https://institutopedadi.edu.mx/api/v1/address/states)\n[google](https://www.google.com)\n[paginanoexiste](www.paginanoexisteosito.com)\nEste es un [enlace incorrecto]' },
  { filePath: '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura3.md', content: 'Lectura MD3' }
];


export const links = [
  { file: '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura2.md', href: 'https://institutopedadi.edu.mx/api/v1/address/states', text: 'getAddressPedadi' },
  { file: '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura2.md', href: 'https://www.google.com', text: 'google' },
  { file: '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura2.md', href: 'www.paginanoexisteosito.com', text: 'paginanoexiste' },

]

export const axiosResponse = [{ file: '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura2.md', href: 'https://institutopedadi.edu.mx/api/v1/address/states', text: 'getAddressPedadi', status: 401, mensaje: 'Unauthorized' },
{ file: '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura2.md', href: 'https://www.google.com', text: 'google', status: 200, mensaje: 'OK' },
{ file: '/Users/luzvazquez/Documents/laboratoria/DEV008-md-links/pruebas/lectura2.md', href: 'www.paginanoexisteosito.com', text: 'paginanoexiste', status: 404, mensaje: 'Not found' }
]

export const statsNoValidate = { total: 3, unique: 3 }

export const statsValidat = { total: 3, unique: 3, broken: 2 }