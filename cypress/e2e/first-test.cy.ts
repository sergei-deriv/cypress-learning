describe('First test', () => {
  beforeEach(() => {
    // cy.visit('http://localhost:5173/simple-dtrader-vite/');
    cy.visit('/');
  });

  it('should have a dropdown', () => {
    cy.get('input#rc_select_0');
    cy.get('input#rc_select_1').should('not.exist');
  });

  it('should have the words "Please select"', () => {
    cy.contains('Please select');
  });
});
