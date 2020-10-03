const express = require("express");
const bodyParser = require("body-parser");
const searchPatientsController = require("../controllers/searchPatientsController");
const cors = require("./cors");

const searchPatientsRouter = express.Router();
searchPatientsRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.corsWithOptions, searchPatientsController.getPatients);

searchPatientsRouter
  .route("/:genero")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(
    cors.corsWithOptions,
    searchPatientsController.getPatientsGender
  );

searchPatientsRouter
  .route("/:estado")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(
    cors.corsWithOptions,
    searchPatientsController.getPatientsEstate
  );

searchPatientsRouter
  .route("/:ciudad")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(
    cors.corsWithOptions,
    searchPatientsController.getPatientsCity
  );
module.exports = searchPatientsRouter;
