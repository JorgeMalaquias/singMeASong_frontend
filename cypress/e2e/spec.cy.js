describe('testing "/"', () => {
  it('Testing if it goes to the "/top" when the icon is clicked"', () => {
    cy.visit('http://localhost:3000/');
  })
  it('Testing if it goes to the "/random" when the icon is clicked"', () => {
    cy.visit('http://localhost:3000/');
  })
  it('Testing if a new recommendations is created when the users try to do that through the forms"', () => {
    cy.visit('http://localhost:3000/');
  })
})

describe('testing "/top"', () => {
  it('Testing  if it goes to the "/" when the icon is clicked', () => {
    cy.visit('http://localhost:3000/top');
  })
  it('Testing if it goes to the "/random" when the icon is clicked"', () => {
    cy.visit('http://localhost:3000/');
  })
  // ver se tem como verificar que as recommendations estão em ordem decrescente de scores
})
describe('testing "/random"', () => {
  it('Testing  if it goes to the "/" when the icon is clicked', () => {
    cy.visit('http://localhost:3000/top');
  })
  it('Testing if it goes to the "/top" when the icon is clicked"', () => {
    cy.visit('http://localhost:3000/');
  })
  //ver se tem como verificar que uma recommendation foi exibida
})

//ver se tem como verificar o efeito de mouseHover sob cada recommendation
//ver se tem como verificar o video sendo reproduzido e pausado apos clicks