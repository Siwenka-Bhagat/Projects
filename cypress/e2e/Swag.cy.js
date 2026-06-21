describe('Swaglabs', () => {
  it('Automation of swag labs', () => {
  cy.login()
  
  cy.get('.inventory_item').should('have.length', 6)
  cy.get('.inventory_item').first().should('contain.text', 'Sauce Labs Backpack')
  cy.get('#add-to-cart-sauce-labs-backpack').click()
  cy.get('.shopping_cart_link').click()
  cy.get('.cart_item').should('have.length', 1)
  cy.get('.cart_item').first().should('contain.text', 'Sauce Labs Backpack')
  cy.get('#checkout').click()

  cy.fixture('checkout').then((data) => {
  checkoutPage.fillCheckoutForm(data.firstName, data.lastName, data.postalCode);
  })
  cy.get('#continue').click()
  cy.get('.cart_item').should('have.length', 1)
  cy.get('.cart_item').first().should('contain.text', 'Sauce Labs Backpack')
  cy.get('#finish').click()
  cy.get('.complete-header').should('contain.text', 'Thank you for your order!')

  })
})



