const basePage = require("./base.page");

const BoardListPage = function() {
  this.seletores = {
    botaoCriarNovoQuadro: ".mod-add",
    modalCriarQuadro: {
      nomeQuadro: ".create-board-form .subtle-input",
      botaoCriarNovoQuadro: "button[type='submit']"

    }
  };

  this.open = function() {
    basePage.open("qa_challenge_softbox/boards")
  };

  this.criarQuadro = function(nome) {
    browser.element(this.seletores.botaoCriarNovoQuadro).click();
    browser.waitForVisible(this.seletores.modalCriarQuadro.nomeQuadro);
    browser.element(this.seletores.modalCriarQuadro.nomeQuadro).setValue(nome);
    browser.element(this.seletores.modalCriarQuadro.botaoCriarNovoQuadro).click();
  };

};

module.exports = new BoardListPage();
