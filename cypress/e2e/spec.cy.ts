describe('Visit the landing page', () => {
  it('passes', () => {
    cy.visit('https://rentium.vercel.app');
  });
});

describe('The Login Page validation', () => {
  it('input for username', () => {
    cy.visit('https://rentium.vercel.app/sign-in');
    cy.get('#username').type('hej');
    cy.get('Button').last().click();
  });
});
