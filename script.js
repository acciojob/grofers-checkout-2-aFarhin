describe('example to-do app', () => {
  it('check number of prices', () => {
    cy.get('[data-ns-test="prices"]').should('have.length', 3);
  });

  it('check total prices from table equals grand total', () => {
    let totalPrice = 0;
    cy.get('[data-ns-test="prices"]').each(price => {
      totalPrice += parseFloat(price.text());
    });

    cy.get('[data-ns-test="grandTotal"]').should('have.text', totalPrice.toFixed(2));
  });
});
