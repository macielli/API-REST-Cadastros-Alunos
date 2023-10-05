let { senha_sistema } = require('./database/banco_de_dados');

const validarSenha = (req, res, next) => {
    const {senha} = req.query;

    if (!senha) {
        return res.status(401).json({mensagem:'A senha não foi informada'});
    }

    if (senha !== senha_sistema) {
        return res.status(401).json({mensagem: 'A senha está incorreta'});
    }

    next();
}

const verificarCamposObrigatorios = (req, res, next) => {
    const { nome, sobrenome, idade, email, telefone, curso } = req.body; 

    if (!nome || !sobrenome || !idade || !curso || !email || !telefone) { 
        return res.status(400).json({ mensagem: 'Campos obrigatórios para cadastro.' });
    }

    if (nome.trim() === '' || sobrenome.trim() === '' || curso.trim() === '' || email.trim() === ''){
        return res.status(400).json({ mensagem: 'Campos obrigatórios para cadastro.'});
    }

    if (idade < 18){
        return res.status(400).json({ mensagem: 'Não é permitido cadastro de menores de 18 anos' });
    }

    next();
}

module.exports = {
    validarSenha,
    verificarCamposObrigatorios
}