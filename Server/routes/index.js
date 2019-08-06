;
const express = require('express');
// CONTROLERS
let api = express.Router(),
crudController = require('../app/Http/Controllers/crud_controller');
// const bodyParser = require('body-parser');
api.get('/get', crudController.get);

api.post('/post', (req, res ) => {
    res.send('post')
});

api.put('/put', (req, res ) => {
    res.send('put')
});

api.delete('/delete', (req, res ) => {
    res.send('delete')
});

module.exports = api;
