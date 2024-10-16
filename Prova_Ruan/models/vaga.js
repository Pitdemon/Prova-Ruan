import { Sequelize } from "sequelize";
import { sequelize } from "../database.js";

const Vaga = sequelize.define(
  "Vaga",
  {
    titulo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    cargo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salario: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Vagas",
    timestamps: true,
  }
);

export default Vaga;
