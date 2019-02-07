var basePage = require('./../../src/pages/base.page');
var loginPage = require('./../../src/pages/login.page');
var boardListPage = require('./../../src/pages/boardList.page');
var boardPage = require('./../../src/pages/board.page');

describe('Boards Trello', function () {
    it("Validando a criação de um novo board", function () {
        loginPage.open();
        loginPage.logar("qachallengesoftbox@email.com", "S0ftbox123");
        expect(basePage.getNomeUsuario()).to.equal('QA_CHALLENGE_SOFTBOX (qa_challenge_softbox)');
        boardListPage.open();
        boardListPage.criarQuadro("Gerenciamento de projetos 2019");
        expect(boardPage.getNomeQuadro()).to.equal("Gerenciamento de projetos 2019");

        
    });

             
    
    it("Removendo o board criado acima", function() {

        browser.click ('[title="Gerenciamento de projetos 2019"]');
        browser.click ('.mod-show-menu');

        Thread.sleep(8000);
        /**
         * Criar o script que faz a remoção do board criado acima, Gerencimaneto de projetos 2019
         * 1. Acessar página de lista de boards
         * 2. Clicar no quadro Gerenciamento de projetos 2019
         * 3. No menu do lado direito, clicar em mais, e no botão fechar quadro
         * 4. Confirma fechar o quadro no modal que se abre
         * 5. Confirma mensagem de sucesso que o quadro está fechado
         * 6. Acessar página da lista de quadros novamente e verificar se de fato o quadro foi removido
         */
        
    });
});
