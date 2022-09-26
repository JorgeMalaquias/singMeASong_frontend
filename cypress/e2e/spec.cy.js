

describe('testing "/"', () => {
  it('Testing if it goes to the "/top" when the icon is clicked"', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#buttonTop').click();
    cy.url().should('equal','http://localhost:3000/top');
  })
  it('Testing if it goes to the "/random" when the icon is clicked"', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#buttonRandom').click();
    cy.url().should('equal','http://localhost:3000/random');
  })
})

describe('testing "/top"', () => {
  it('Testing  if it goes to the "/" when the icon is clicked', () => {
    cy.visit('http://localhost:3000/top');
    cy.get('#buttonHome').click();
    cy.url().should('equal','http://localhost:3000/');
    
  })
  it('Testing if it goes to the "/random" when the icon is clicked"', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#buttonRandom').click();
    cy.url().should('equal','http://localhost:3000/random');
  })
  // ver se tem como verificar que as recommendations estão em ordem decrescente de scores
})
describe('testing "/random"', () => {
  it('Testing  if it goes to the "/" when the icon is clicked', () => {
    cy.visit('http://localhost:3000/top');
    cy.get('#buttonHome').click();
    cy.url().should('equal','http://localhost:3000/');
  })
  it('Testing if it goes to the "/top" when the icon is clicked"', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#buttonTop').click();
    cy.url().should('equal','http://localhost:3000/top');
  })

  //ver se tem como verificar que uma recommendation foi exibida
})

//ver se tem como verificar o efeito de mouseHover sob cada recommendation
//ver se tem como verificar o video sendo reproduzido e pausado apos clicks