const locators = {
    SITE_BARRIGA: {
        LINK:'https://barrigareact.wcaquino.me/'
    },
    
    LOGIN:{
        USER: '[data-test="email"]',
        PASSWORD: '[data-test="passwd"]',
        BTN_LOGIN: '.btn'
    },

    TOAST:{
        MSG: '.toast-message'
    },

    REGISTER:{
        OPEN_REGISTER: ':nth-child(2) > .nav-link',
        NOME: '.jumbotron > :nth-child(1) > .form-control',
        EMAIL: '.input-group > .form-control',
        SENHA: ':nth-child(3) > .form-control',
        BTN_REGISTRAR: '.btn' 
    },

    CRIAR_CONTA:{
        OPEN_MENU_CRIAR_CONTA: '[data-test="menu-settings"]',
        LINK_CRIAR_CONTA: '[href="/contas"]',
        NOME: '[data-test="nome"]',
        BTN_CRIAR_CONTA: '.btn',
        MESSAGE: '.toast-message',
    },

    MENU:{
        OPEN_MENU: '[data-test="menu-settings"]',
        RESETAR: '[href="/reset"]'
        
    }
    
    
    // cy.get('[data-test="email"]').type('ralfsniper0102@gmail.com');
    //     cy.get('[data-test="passwd"]').type('123456');
}

export default locators;

