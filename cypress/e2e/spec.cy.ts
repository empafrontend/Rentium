/// <reference types="cypress" />

beforeEach(() => {
  cy.visit('/');
});

describe('Visit the landing page', () => {
  it('Page should be accessible and loaded with content', () => {
    cy.get('header')
      .find('h1')
      .should('exist')
      .and('be.visible')
      .and('contain', 'Välkommen till Rentium');
  });
});

describe('The Login Page validation', () => {
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
