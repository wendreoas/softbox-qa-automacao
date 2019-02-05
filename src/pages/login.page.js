const basePage = require("./base.page");

const LoginPage = function() {
  this.seletores = {
    email: "#user",
    senha: "#password",
    botaoLogin: "#login"
  };

  this.open = function() {
    basePage.open("login")
  };

  this.logar = function (email, senha) {
    browser.element(this.seletores.email).setValue(email); // preenche o email
    browser.element(this.seletores.senha).setValue(senha); // preenche a senha
    browser.element(this.seletores.botaoLogin).click(); // clica no botão de logar
  };
};

module.exports = new LoginPage();
