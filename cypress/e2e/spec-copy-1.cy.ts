describe('Test hero message (show/hide) on page load, and navigation', () => {
  it('passes', () => {
    cy.visit('https://rentium.vercel.app/ad/0wfha1Jonoyy1EnkpeNh');
    //cy.get('button').last().focus();
    cy.get('a').first().click();
    cy.get('button').first().click();
    cy.contains('MuiCardMedia-img').click();
  });
});

/* describe('Test hover and active state for filter buttons', () => {
  it('passes', () => {
    cy.visit('https://rentium.vercel.app/');
    //cy.get('button').last().focus();
    cy.get('button').first().click();
  });
});
 */
