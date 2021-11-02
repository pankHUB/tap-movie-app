const express = require('express');
const { getAllMovie, getMovie } = require('../controllers/movieControllers');


const router = express.Router();


router.get("/",getAllMovie);

router.get("/:movieId",getMovie);

module.exports = router;

