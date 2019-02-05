# Softbox QA Challenge

Projeto para avaliação de desempenho de automação de testes web utilizando os frameworks mochaJS e webdriverIO

## Pré requisitos

Para rodar e desenvolver os testes, é necessário validar os seguintes pré requisitos

- Google Chrome Atualizado na máquina
- NodeJS e NPM (versão 8.0.0)

## Instruções

1. Faça o fork desse projeto
2. Execute a suíte de testes através do comando:


```sh
npm install && npm run clean && npm test
```

- O arquivo da suíte de teste está em: `test/specs/boards.js`
- Já foi implementado um teste o qual entra no site do trello, loga com o usuário `qachallengesoftbox@email.com` e senha `S0ftbox123`, cria um quadro chamado `Gerenciamento de Projetos 2019` e valida se o quadro foi criado com sucesso
- É necessário que você implemente no mesmo arquivo `test/specs/boards.js` o teste para a remoção deste mesmo quadro criado acima.

Segue abaixo o passo a passo para realizar a remoção do quadro

1. Acessar página de lista de boards
2. Clicar no quadro Gerenciamento de projetos 2019
3. No menu do lado direito, clicar em mais, e no botão fechar quadro
4. Confirma fechar o quadro no modal que se abre
5. Confirma mensagem de sucesso que o quadro está fechado
6. Acessar página da lista de quadros novamente e verificar se de fato o quadro foi removido

## Links importantes

- API de validação do chai: https://www.chaijs.com/api/bdd/
- Documentação do mochaJS: https://mochajs.org/
- Documentação do selenium webdriverio V4: http://v4.webdriver.io/api.html