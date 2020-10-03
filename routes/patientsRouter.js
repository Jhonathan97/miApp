const express = require("express");
const bodyParser = require("body-parser");
const patientsController = require("../controllers/patientsController");
const cors = require("./cors");

const patientsRouter = express.Router();
patientsRouter
  .route("/")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus(200);
  })
  .get(cors.corsWithOptions, patientsController.getPatients);

module.exports = patientsRouter;
