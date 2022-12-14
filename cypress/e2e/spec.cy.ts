/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('http://localhost:3000');
});

describe('Landing page', () => {
  it('Should be accessible and loaded with content', () => {
    cy.get('header')
      .find('h1')
      .should('exist')
      .and('be.visible')
      .and('contain', 'Välkommen till Rentium');
  });
  it('Should have no horizontal scrolling', () => {
    cy.window()
      .scrollTo('right', { ensureScrollable: false })
      .its('scrollX')
      .should('equal', 0);
  });
  it('Filter items should contains a text under icon', () => {
    cy.get('header')
      .get('button')
      .first()
      .siblings()
      .should('contain', 'Skor')
      .and('be.visible');
    cy.get('header')
      .get('button')
      .eq(1)
      .siblings()
      .should('contain', 'Hattar')
      .and('be.visible');
    cy.get('header')
      .get('button')
      .eq(2)
      .siblings()
      .should('contain', 'Verktyg')
      .and('be.visible');
    cy.get('header')
      .get('button')
      .eq(3)
      .siblings()
      .should('contain', 'Kläder')
      .and('be.visible');
    cy.get('header')
      .get('button')
      .eq(4)
      .siblings()
      .should('contain', 'Fordon')
      .and('be.visible');
  });
});

describe('Footer', () => {
  it("Should contain an 'all rights reserved' statement in desktop version", () => {
    cy.get('footer')
      .should('exist')
      .and('contain', 'Alla rättigheter förbehållna');
  });
  it('Should contain nav items in mobile version', () => {
    cy.viewport('iphone-xr', 'portrait');
    cy.get('footer').find('a').first().should('exist').and('contain', 'Hem');
    cy.get('footer')
      .find('a')
      .last()
      .should('exist')
      .and('contain', 'Logga in');
  });
});

describe('Login form validation', () => {
  it('Should redirect user to login page when clicking "Logga in"', () => {
    cy.get('header').find('a').contains('Logga in').click();
    cy.url().should('eq', `${Cypress.config('baseUrl')}/sign-in`);
  });

  it('Should have validation in the sign in form', () => {
    cy.get('header').find('a').contains('Logga in').click();
    cy.url().should('eq', `${Cypress.config('baseUrl')}/sign-in`);
    cy.get('form').get('button').last().should('contain', 'Logga in').click();
    cy.get('form')
      .should('contain', 'Användarnamn krävs')
      .and('contain', 'Vänligen fyll i ditt lösenord');
    cy.get('#username').type('hej');
    cy.get('form')
      .should('not.contain', 'Användarnamn krävs')
      .and('contain', 'Vänligen fyll i ditt lösenord');
    cy.get('#password').type('12345678');
    cy.get('form')
      .should('not.contain', 'Användarnamn krävs')
      .and('not.contain', 'Vänligen fyll i ditt lösenord');
  });
});
