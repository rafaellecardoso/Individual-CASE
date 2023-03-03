const { Sequelize, DataTypes, STRING } = require("sequelize");
require('dotenv').config()

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

try {
  sequelize.authenticate();
  console.log("Conexão com o banco de dados estabelecida com sucesso!");
} catch (error) {
  console.log("Erro na conexão com o banco de dados. Erro: " + error);
}


const jogos_jogados = sequelize.define("jogos_jogados", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING
  },
  ano_lancamento: {
    type: DataTypes.INTEGER,
  },
  nome_empresa: {
    type: DataTypes.STRING
  },
  genero: {
    type: DataTypes.STRING
  }
  },{
    timestamps: false
  });
  
  jogos_jogados.sync()
module.exports = sequelize

