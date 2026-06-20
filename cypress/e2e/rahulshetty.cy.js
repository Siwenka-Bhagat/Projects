describe('RahulShetty automation', () => {
  it('visit the page of rahul shetty academy', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('[type="radio"]').check('radio1')  
    cy.get('.inputs.ui-autocomplete-input').type('Nepal')
    cy.get('#dropdown-class-example').select('Option2')
    cy.get('#checkBoxOption2').check('option2')
    cy.get('[name="enter-name"]').type('Siwenka')
    cy.get('#alertbtn').click()
     cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello Siwenka, share this practice page and share your knowledge')
    })
    cy.get('#confirmbtn').click()
      cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')
    cy.get('.tableFixHead').scrollTo('bottom')
  })
})