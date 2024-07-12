const pharmaRoutes = require('express').Router();

const {
    getPharmaController,
    getPharmaByIdController,
    getPharmaciesbynameController,
    createPharmaController,
    updatePharmaController,
    deletePharmaController,
    getMedicinesbyPharmaController
} = require('./pharma.controller');

const isAuthenticated = require('../../middllewares/isAuthenticated');
const userRoutes = require('../users/users.routes');

userRoutes.get('/pharma/list' , getPharmaController );
// userRoutes.get('/pharma/list/:id', getPharmaByIdController );
userRoutes.get('/pharma/list/:pharmaName', getPharmaciesbynameController );
userRoutes.post('/pharma/new', createPharmaController );
userRoutes.post('/pharma/update/:id', updatePharmaController );
userRoutes.delete('/pharma/delete/:id', deletePharmaController);
userRoutes.get('/pharma/medicines/:pharmaId',isAuthenticated , getMedicinesbyPharmaController);



module.exports = userRoutes;
