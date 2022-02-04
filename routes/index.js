const express = require("express");
const Movie = require("../models/movie.model");
const router = express.Router();

/* GET home page */
router.get("/", (req, res, next) => res.render("index"));

// router direction

router.get("/movies", (req, res) => {
  Movie.find()
    .then((results) => {
      console.log("Found teams!", results);
      res.render("movies", {
        movies: results,
      });
    })
    .catch((err) => {
      console.log("There was an error", err);
    });
});

router.get("/find-movie/:movieId", (req, res) => {
  Movie.findById(req.params.movieId)
    .then((results) => {
      console.log("Found movie!", results);
      res.render("find-movie", {
        image: results.image,
        title: results.title,
        director: results.director,
        stars: results.stars,
        description: results.description,
        showtimes: results.showtimes,
      });
    })
    .catch((err) => {
      console.log("There was an error", err);
    });
});

module.exports = router;
