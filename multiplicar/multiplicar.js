//requireds
const fs = require('fs');
// const fs = require('express');
// const fs = require('../fs');
var colors = require('colors');

let listartabla = (base, limite = 10) => {
    console.log('===================================================='.green);
    console.log(`============Tabla de ${ base }===================`.green);
    console.log('===================================================='.green);
    for (let index = 1; index <= limite; index++) {
        console.log(`${base} * ${index} = ${base*index}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        } else {

        }
        let data = '';

        for (let index = 1; index <= limite; index++) {
            data += `${base} * ${index} = ${base*index}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
            console.log(`El archivo "tabla-${base}" ha sido creado`);
        });
    });
}

module.exports = {
    crearArchivo,
    listartabla
}