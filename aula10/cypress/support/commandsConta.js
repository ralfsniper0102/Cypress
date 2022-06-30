import loc from '../support/locators'; // Importa o arquivo de locators

Cypress.Commands.add('acessarMenuConta', () => {
    cy.get(loc.MENU.OPEN_MENU).click();
    cy.get(loc.MENU.LINK_CONTA).click();

});
