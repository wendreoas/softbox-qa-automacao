const basePage = require("./base.page");

const BoardPage = function() {
  this.seletores = {
    nomeQuadro: ".board-header-btn-name"
  };


  this.getNomeQuadro = function () {
    browser.waitForVisible(this.seletores.nomeQuadro);
    return browser.element(this.seletores.nomeQuadro).getText();
  }
};

module.exports = new BoardPage();
