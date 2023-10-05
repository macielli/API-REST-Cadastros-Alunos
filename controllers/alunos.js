let {alunos, idAlunos} = require('../database/banco_de_dados');

const listarAlunos = (req, res) => {
    return res.json(alunos);
}

const obterAlunoId = (req, res) => {
    const id = Number(req.params.id); 

    if (isNaN(id)){ 
        return res.status(400).json({ mensagem: 'ID deve ser um número válido.' }); 
    }

    const aluno = alunos.find((aluno) => { return aluno.id === id });
   
    if (!aluno) {
        return res.status(404).json({ mensagem: 'Aluno não encontrado.' }); 
    }

    return res.json(aluno);
}

const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, email, telefone, curso, turma } = req.body; 

    const novoAluno = { 
        id: idAlunos, 
        nome,
        sobrenome,
        idade,
        email,
        telefone,
        curso,
        turma
    }

    alunos.push(novoAluno);
    idAlunos++;

    return res.status(201).send(); 
}

const excluirAluno = (req, res) => {
    const  id = Number(req.params.id);

    if (isNaN(id)){ 
        return res.status(400).json({ mensagem: 'ID deve ser um número válido.' }); 
    }

    const indiceAlunoExcluido = alunos.findIndex(aluno => aluno.id === id);

    if (indiceAlunoExcluido < 0) {
        return res.status(404).json({ mensagem: 'O aluno não foi encontrado.' });
    }

    const alunoExcluido = alunos.splice(indiceAlunoExcluido, 1);

    return res.json(alunoExcluido);
}

module.exports = {
    listarAlunos,
    obterAlunoId,
    cadastrarAluno,
    excluirAluno
}