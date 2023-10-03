describe('Dropdown behaviour', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a dropdown', () => {
    cy.get('input#rc_select_0');
  });

  it('should have an active dropdown after click', () => {
    cy.get('input#rc_select_0').click();
    cy.contains('Forex').click();
  });

  it('should have a chart', () => {
    cy.get('div.recharts-wrapper').should('not.exist');
    cy.contains('Please select');
    cy.get('input#rc_select_0').click();
    cy.contains('Forex').click();
    cy.get('[title="AUD/JPY"] > .ant-cascader-menu-item-content').click();
    cy.get('div.recharts-wrapper');
  });
});
