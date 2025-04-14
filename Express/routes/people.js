const express = require('express');

const router = express.Router();

const { getPeople,
    postPerson,
    postmanPerson,
    updatePerson,
    deletePerson, } = require('../controllers/people')

// Route for API
router.get('/', getPeople);


router.post('/', postPerson)

// ! put method
router.put('/:id', updatePerson)

//!  Delete Method
router.delete('/:id',deletePerson)

//! postman route
router.post('/postman', postmanPerson)

module.exports = router