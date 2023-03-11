const express = require('express')
const router = express.Router();
const axios = require("axios");

// Ruta para obtener todos los libros
router.get('/', (req, res) => {    
    res.send([
        {
            id: '1',
            name: 'El arbol del destino',
            autor: 'William Welsh',
            date: '2020',
            resume: 'ficción'
        },
        {
            id: '2',
            name: 'La casa de los espiritus',
            autor: 'Isabel Allende',
            date: '1982',
            resume: 'ficción'
        }
    ])
})

// Ruta para obtener un libro por id
router.get('/:id', (req, res) => {
    res.send({
        id: '1',
        name: 'El arbol del destino',
        autor: 'William Welsh',
        date: '2020',
        resume: 'ficción'
    })
})

// Ruta para crear un nuevo libro
router.post('/', (req, res) => {
    const newBook = {
        id: '3',
        name: 'El vino del estío',
        autor: 'Pepe Jose',
        date: '2020',
        resume: 'aventura'
    };
    res.send(newBook);
})

// Ruta para actualizar un libro por id
router.put('/:id', (req, res) => {
    res.send({
        id: '1',
        name: 'El arbol del destino',
        autor: 'William Welsh',
        date: '2020',
        resume: 'ficción y aventura'
    })
})

// Ruta para eliminar un libro por id
router.delete('/:id', (req, res) => {
    res.send({ message: 'Libro eliminado correctamente' });
})


  
module.exports = router