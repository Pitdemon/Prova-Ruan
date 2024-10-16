import express from 'express';
import {
    listarEmpregos,
    criarVaga,
    mostrarDetalhes,
    atualizarVaga,
    deletarVaga,
    filtrarVaga,
    localizacaoVaga,
} from '../controllers/vagas.js';

const router = express.Router();

router.get('/', listarEmpregos);
router.post('/', criarVaga);
router.get('/:id', mostrarDetalhes);
router.put('/:id', atualizarVaga);
router.delete('/:id', deletarVaga);
router.get('/cargo/:cargo', filtrarVaga);
router.get('/localizacao/:cidade', localizacaoVaga);

export default router;
