describe('Test hover and active state for filter buttons', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    //cy.get('button').last().focus();
    cy.get('button').first().click();
  });
});
