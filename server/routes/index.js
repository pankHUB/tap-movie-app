const express = require('express');
const app = require('../app');


const router = express.Router();

const movieRoutes = require('./movieRoutes')

router.use('/movies', movieRoutes)

module.exports = router;