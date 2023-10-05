# Sistema de Cadastro de Alunos - API REST

Este é um projeto de uma API REST desenvolvida para um sistema de Cadastro de Alunos. A API oferece funcionalidades essenciais, incluindo listar alunos, encontrar aluno por ID, cadastrar um novo aluno e deletar aluno.

Este projeto foi elaborado com base em um exercício técnico do curso de Desenvolvimento de Software com ênfase em Back-end da Cubos Academy, e será continuamente aprimorado ao longo do curso.

⚠️ Importante: Até o momento, os dados deste projeto são persistidos em memória. 


# Executando o projeto

Para testar esta API, é essencial ter o Node.js instalado em sua máquina, bem como uma ferramenta para teste de APIs. As instruções abaixo foram elaboradas utilizando o VSCode e o Insomnia REST.

[1] - Clone este repositório no seu ambiente de desenvolvimento utilizando o VSCode.

[2] - No terminal, instale os pacotes necessários com o seguinte comando:
~~~
npm install
~~~

[3] - Inicie a API executando o seguinte comando no terminal:
~~~
npm run dev
~~~

[4] - Utilize o Insomnia para criar as seguintes rotas HTTP:

    - GET - Listar todos os alunos
        'http://localhost:3000/alunos'

    - GET - Encontrar aluno por ID
        'http://localhost:3000/alunos/1'

    - POST - Cadastrar um novo aluno    
        'http://localhost:3000/alunos'

    - DELETE - Deletar aluno
        'http://localhost:3000/alunos/1'

⚠️  Importante: Todas as rotas requerem um parâmetro de autenticação independente, representado pela senha do sistema. Portanto, é necessário adicionar o parâmetro 'Query'. Você pode incluí-lo no final do endereço de cada rota, como por exemplo: http://localhost:3000/alunos?senha=senha123 ou no Insomnia, na aba 'Query' de todas as rotas.

(imagem query)

[5] - A rota POST é a única que requer o corpo (conteúdo) da requisição. Nele, os dados do aluno devem ser fornecidos em formato JSON no Insomnia. Todos os campos são obrigatórios, com exceção do campo "turma", que é opcional.

Exemplo de corpo de requisição em JSON:

~~~
{
"nome": "Nome do Aluno",
"sobrenome": "Sobrenome do Aluno",
"idade": 20,
"email": "exemplo@email.com",
"telefone": 048900000000,
"curso": "Nome do curso",
"turma": "Turma A - se existir mais de uma turma"
}  
~~~

![Captura de Tela 2023-10-05 às 16 36 38](https://github.com/macielli/API-REST-Cadastros-Alunos/assets/141888830/4ebbbe0d-e619-47cb-89ae-1c0b37b883d7)

[6] - Agora, todas as configurações estão devidamente ajustadas para testar a API no Insomnia.

Espero que aproveite explorar e utilizar esta API de Cadastro de Alunos. Caso tenha alguma dúvida ou sugestão de melhoria, não hesite em entrar em contato.

Agradeço por utilizar este projeto e desejo sucesso em seus desenvolvimentos!
