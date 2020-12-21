describe('Lists', () => {
  beforeEach(() => {
    cy.visit('/swap')
  })

  it('defaults to compound list', () => {
    cy.get('#swap-currency-output .open-currency-select-button').click()
    cy.get('#currency-search-selected-list-name').should('contain', 'Compound')
  })

  it('change list', () => {
    cy.get('#swap-currency-output .open-currency-select-button').click()
    cy.get('#currency-search-change-list-button').click()
  })
})
