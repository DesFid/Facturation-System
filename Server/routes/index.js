;
const express = require('express');
// CONTROLERS
let api = express.Router(),
crudController = require('../app/Http/Controllers/crud_controller'),
appController = require('../app/Http/Controllers/app_controller');
// const bodyParser = require('body-parser');
api.get('/get', crudController.get);

api.get('/email', appController.sendEmail);

api.post('/post', (req, res ) => {
    console.log(req.body)
    res.send(req.body)
});

api.put('/put', crudController.put);

api.delete('/delete', (req, res ) => {
    res.send('delete')
});

module.exports = api;
