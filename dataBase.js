const sequelize = require("sequelize");
const { database } = require("./config");
const patientModel = require("./models/patients");
const { Sequelize } = require("sequelize");
const connect = new Sequelize(
  database.database,
  database.username,
  database.password,
  {
    host: database.host,
    dialect: "mysql",
  }
);

const Patients = patientModel(connect, sequelize);

connect.sync({ force: false }).then(() => {
  console.log("Tablas conectadas y sincronizadas");
});

module.exports = {
  Patients,
};
