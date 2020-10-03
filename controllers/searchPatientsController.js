const fetch = require("node-fetch");
const { Patients } = require("../dataBase");
exports.getPatients = (req, res) => {
  let url = "https://www.datos.gov.co/resource/gt2j-8ykr.json";
  fetch(url)
    .then((req) => req.json())
    .then(async (data) => {
      var dataInsert = data.map(async function (element) {
        try {
          const [patient, created] = await Patients.findOrCreate({
            where: { id_de_caso: element.id_de_caso },
            defaults: element,
          });
          if (created) {
            console.log("created"); // This will certainly be 'Technical Lead JavaScript'
          }
        } catch (err) {
          console.log(err);
        }
      });
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(dataInsert);
    });
};

exports.getPatientsEstate = async (req, res,next) => {
  try {
    const patients = await Patients.findAll({
      where: {
        estado: req.params.estado,
      },
    });
    if (patients != null) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(patients);
    } else {
      err = new Error(
        "No existen pacientes en este estado: " + req.params.estado
      );
      err.status = 404;
      return next(err);
    }
  }catch(err) {
    console.log(err)
  }
};

exports.getPatientsCity = async (req, res,next) => {
  try {
    const patients = await Patients.findAll({
      where: {
        ciudad_de_ubicaci_n: req.params.ciudad_de_ubicaci_n,
      },
    });
    if (patients != null) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(patients);
    } else {
      err = new Error(
        "No existen pacientes eesta ciudad  de ubicacion: " +
          req.params.ciudad_de_ubicaci_n
      );
      err.status = 404;
      return next(err);
    }
  }catch(err) {
    (err) => next(err)
  }
};

exports.getPatientsGender = async (req, res,next) => {
  try {
    const patients = await Patients.findAll({
      where: {
        sexo: req.params.sexo,
      },
    });
    if (patients != null) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(patients);
    } else {
      err = new Error(
        "No existen registros de  pacientes con este genero : " +
          req.params.sexo
      );
      err.status = 404;
      return next(err);
    }
  }catch(err) {
    (err) => next(err)
  }
};
