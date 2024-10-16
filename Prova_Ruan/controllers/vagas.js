import Vaga from "../models/vaga.js";

const listarEmpregos = async (req, res) => {
  try {
    const vagas = await Vaga.findAll();
    res.status(200).json(vagas);
  } catch (error) {
    console.error("Erro ao listar vagas:", error);
    res.status(500).json({ error: "Erro ao listar vagas" });
  }
};

const criarVaga = async (req, res) => {
  try {
    const novaVaga = await Vaga.create(req.body);
    res.status(201).json(novaVaga);
  } catch (error) {
    console.error("Erro ao criar vaga:", error);
    res.status(500).json({ error: "Erro ao criar vaga" });
  }
};

const mostrarDetalhes = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) {
      return res.status(404).json({ error: "Vaga não encontrada" });
    }
    res.status(200).json(vaga);
  } catch (error) {
    console.error("Erro ao mostrar detalhes da vaga:", error);
    res.status(500).json({ error: "Erro ao mostrar detalhes da vaga" });
  }
};

const atualizarVaga = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) {
      return res.status(404).json({ error: "Vaga não encontrada" });
    }
    await vaga.update(req.body);
    res.status(200).json(vaga);
  } catch (error) {
    console.error("Erro ao atualizar vaga:", error);
    res.status(500).json({ error: "Erro ao atualizar vaga" });
  }
};

const deletarVaga = async (req, res) => {
  try {
    const vaga = await Vaga.findByPk(req.params.id);
    if (!vaga) {
      return res.status(404).json({ error: "Vaga não encontrada" });
    }
    await vaga.destroy();
    res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar vaga:", error);
    res.status(500).json({ error: "Erro ao deletar vaga" });
  }
};

const filtrarVaga = async (req, res) => {
  try {
    const vagas = await Vaga.findAll({
      where: {
        cargo: req.params.cargo,
      },
    });
    res.status(200).json(vagas);
  } catch (error) {
    console.error("Erro ao filtrar vagas:", error);
    res.status(500).json({ error: "Erro ao filtrar vagas" });
  }
};

const localizacaoVaga = async (req, res) => {
  try {
    const vagas = await Vaga.findAll({
      where: {
        cidade: req.params.cidade,
      },
    });
    res.status(200).json(vagas);
  } catch (error) {
    console.error("Erro ao filtrar vagas por localização:", error);
    res.status(500).json({ error: "Erro ao filtrar vagas por localização" });
  }
};

export {
  listarEmpregos,
  criarVaga,
  mostrarDetalhes,
  atualizarVaga,
  deletarVaga,
  filtrarVaga,
  localizacaoVaga,
};
