const BasePage = function() {
  this.open = function(path) {
    browser.url(browser.options.baseUrl + path);
  };

  this.getNomeUsuario = function() {
    var seletor =".member-initials";
    browser.waitForVisible(seletor);
    return browser.element(seletor).getAttribute("title");
  }
};

module.exports = new BasePage();
