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
        boardListPage.criarQuadro("Projeto automacao");
        expect(boardPage.getNomeQuadro()).to.equal("Projeto automacao");
        
    });
            
    
    it("Removendo o board criado acima", function() {   
     
         browser.click ('.board-menu-navigation-item-link.js-open-more');
         browser.click ('.js-close-board');
         browser.click ('.js-confirm.full.negate');
         browser.click ('.quiet.js-delete');
         browser.click ('.js-confirm.full.negate');
         browser.click ('.header-logo-default');
         browser.waitForText('.home-left-sidebar-container');
         var quadro = browser.isExisting ('div[title="Projeto automacao"]');
        console.log (quadro);
        expect (quadro).to.equal(false);


    });
});
