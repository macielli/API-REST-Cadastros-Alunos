const express = require('express');
const {listarAlunos, obterAlunoId, cadastrarAluno, excluirAluno, obterAlunosCurso} = require('./controllers/alunos');
const { verificarCamposObrigatorios } = require('./middleware');

const router = express();

router.get('/alunos', listarAlunos);
router.get('/alunos/:id', obterAlunoId);
router.post('/alunos', verificarCamposObrigatorios, cadastrarAluno);
router.delete('/alunos/:id', excluirAluno);

module.exports = router;