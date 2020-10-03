

module.exports = (sequelize, type) => {
  return sequelize.define("patient", {
    id_de_caso: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha_de_notifiaci_n: type.DATE,
    c_digo_divipola: type.STRING,
    ciudad_de_ubicaci_n: type.STRING,
    departamento: type.STRING,
    atenci_n: type.STRING,
    edad: type.STRING,
    sexo: type.STRING,
    tipo: type.STRING,
    estado: type.STRING,
    pa_s_de_procedencia: type.STRING,
    fis: type.STRING,
    fecha_diagnostico: type.DATE,
    fecha_recuperado: type.DATE,
    fecha_reporte_web: type.DATE,
    tipo_recuperaci_n: type.STRING,
    codigo_departamento: type.STRING,
    codigo_pais: type.STRING,
    pertenencia_etnica: type.STRING,
    ubicaci_n_recuperado: type.STRING,
  });
};
