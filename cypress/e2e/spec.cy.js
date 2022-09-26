
beforeEach(()=>{
  cy.seedDatabase();
  
})
afterEach(()=>{
  cy.resetDatabase();
});

describe('testing "/"', () => {
  it('Testing if it goes to the "/top" when the icon is clicked"', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#buttonTop').click();
    cy.url().should('equal','http://localhost:3000/top');
  })
  it('Testing if it goes to the "/random" when the icon is clicked"', () => {
    cy.visit('http://localhost:3000/');
    cy.intercept("GET", "http://localhost:5000/recommendations").as("getRecommendations");
    cy.wait("@getRecommendations");
    cy.get('#buttonRandom').click();
    cy.url().should('equal','http://localhost:3000/random');
  })

  it('Testing if a new recommendations is created when the users try to do that through the forms"', () => {
    cy.visit('http://localhost:3000/');
    cy.intercept("GET", "http://localhost:5000/recommendations").as("getRecommendations");
    cy.wait("@getRecommendations");
    cy.get('#inputName').type('what i ve done');
    cy.get('#inputLink').type('https://www.youtube.com/watch?v=8sgycukafqQ');
    cy.intercept("POST", "http://localhost:5000/recommendations").as("postRecommendations");
    cy.get('#buttonNewRecom').click();
    cy.wait("@postRecommendations");
    cy.contains('what i ve done').should("be.visible");
  })
})

describe('testing "/top"', () => {
  it('Testing  if it goes to the "/" when the icon is clicked', () => {
    cy.visit('http://localhost:3000/top');
    cy.intercept("GET", "http://localhost:5000/recommendations/top/10").as("getRecommendations");
    cy.wait("@getRecommendations");
    cy.get('#buttonHome').click();
    cy.url().should('equal','http://localhost:3000/');
    
  })
  it('Testing if it goes to the "/random" when the icon is clicked"', () => {
    cy.visit('http://localhost:3000/top');
    cy.intercept("GET", "http://localhost:5000/recommendations/top/10").as("getRecommendations");
    cy.wait("@getRecommendations");
    cy.get('#buttonRandom').click();
    cy.url().should('equal','http://localhost:3000/random');
  })
  // ver se tem como verificar que as recommendations estão em ordem decrescente de scores
})
describe('testing "/random"', () => {
  it('Testing  if it goes to the "/" when the icon is clicked', () => {
    cy.visit('http://localhost:3000/random');
    cy.intercept("GET", "http://localhost:5000/recommendations/random").as("getRecommendations");
    cy.wait("@getRecommendations");
    cy.get('#buttonHome').click();
    cy.url().should('equal','http://localhost:3000/');
  })
  it('Testing if it goes to the "/top" when the icon is clicked"', () => {
    cy.visit('http://localhost:3000/random');
    cy.intercept("GET", "http://localhost:5000/recommendations/random").as("getRecommendations");
    cy.wait("@getRecommendations");
    cy.get('#buttonTop').click();
    cy.url().should('equal','http://localhost:3000/top');
  })
})

//ver se tem como verificar o efeito de mouseHover sob cada recommendation
//ver se tem como verificar o video sendo reproduzido e pausado apos clicks
// explore later the possibility of check the upvote and downvote