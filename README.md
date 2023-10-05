# API-REST-Cadastros-Alunos

É uma API REST para um sistema de Cadastro de Alunos com funções básicas: listar alunos, encontrar aluno por ID, cadastrar um novo aluno, deletar aluno.
Um exercício técnico do curso de Desenvolvimento de Software com foco em Back-end da Cubos Academy na aula de API REST.

### ⚠️ Importante: Os dados desse exercício serão persistidos em memória. 

# Como executar

Para testar esta API é importante ter instalado na sua máquina o Node.js e uma ferramenta para teste de API.
As instruções abaixo foram escritas utilizando o VSCode e o Insomnia Rest.

- Faça o clone deste repositório em seu VSCode;
- Instale os pacotes no terminal:
~~~
npm install
~~~
- Inicie a API no terminal:
~~~
npm run dev
~~~
- Crie as rotas HTTP no Insomnia:

'GET - http://localhost:3000/alunos'
'GET - http://localhost:3000/alunos/1'
'POST - http://localhost:3000/alunos'
'DELETE - http://localhost:3000/alunos/1'

⚠️ Em todas as rotas existe um intermediário independente com a senha do sistema, sendo assim, será necessário adicionar o parâmetro 'Query'. Você pode adicionar no final do endereço de cada rota '?senha=senha123', por exemplo: 'http://localhost:3000/alunos?senha=senha123' ou no Insomnia na aba 'Query' de todas as rotas.

