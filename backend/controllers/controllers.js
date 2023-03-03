const sequelize = require("../database/db");

const Controllers = {
  buscar: async(req, res) => {
    try {
      const [results, metadatas] = await sequelize.query(
        "SELECT * FROM jogos_jogados"
      );
      results.length === 0 ? res.json({data: "Não há registros de jogos_jogados."}) : res.json(results);
    } catch (error) {
      res.json(error);
    }
  },

  //Resolver retorno de id inválido
  buscarID: async (req, res) => {
    try {
      const { id } = req.params;
      const [results, metadatas] = await sequelize.query(
        `SELECT * FROM jogos_jogados WHERE id = ${id}`
      );
      results.map((item)=>{
        const teste = item.id
        !teste ? res.json({data: "ID inválido. Tente novamente."}) : res.json(results);
      })
      
    } catch (error) {
      res.json(error);
    }
  },

  inserir: async (req, res) => {
    try {
      const { nome, ano_lancamento, nome_empresa, genero } = req.body;
      await sequelize.query(
        `INSERT INTO jogos_jogados(nome, ano_lancamento, nome_empresa, genero) VALUES('${nome}', ${ano_lancamento}, '${nome_empresa}', '${genero}')`
      );
      res.json("Informação INSERIDA com sucesso!");
    } catch (error) {
      res.json(error);
    }
  },


  editar: async(req, res) => {
    try {
      const { nome, ano_lancamento, nome_empresa, genero } = req.body;
      const { id } = req.params;
      await sequelize.query(`UPDATE jogos_jogados SET nome = '${nome}', ${ano_lancamento}, '${nome_empresa}', '${genero}' WHERE id = ${id}`)
      res.json("Informação EDITADA com sucesso!");
    } catch (error) {
      res.json(error);
    }
  },

  excluir: async (req, res) => {
    try {
      const { id } = req.params;
      await sequelize.query(`DELETE FROM jogos_jogados where id = ${id}`);
      res.json("Informação DELETADA com sucesso!");
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = Controllers;
