describe('First test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/simple-dtrader-vite/');
  });

  it('should have a dropdown', () => {
    cy.get('input#rc_select_0').should('exist');
  });

  it('should have the words "Please select"', () => {
    cy.contains('Please select');
  });
});
