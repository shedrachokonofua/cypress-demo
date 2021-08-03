describe('Demo', () => {
  before(() => {
    cy.visit('http://localhost:8080/');
  });

  describe('Home Page', () => {
    it('should contain title', () => {
      cy.get('h1').should('contain', 'Hello, World!');
    });

    it('should contain subtitle', () => {
      cy.get('h2').should('contain', 'COMP 311/Cypress Demo');
    });
  });

  describe('Contact-Us Page', () => {
    const formData = {
      name: 'John Doe',
      email: 'johndoe@email.com',
      message: 'Great work guys!'
    };
    it('should submit form', () => {
      cy.get('nav a').contains('Contact-Us').click();
      
      cy.location("pathname").should('eq', '/contact-us');

      cy.get("#name").type(formData.name);
      cy.get("#email").type(formData.email);
      cy.get("#message").type(`${formData.message}`);
      cy.get("#submit").click();

      cy.location("pathname").should('include', '/thanks');
    });
    it('should display correct Name in results', () => {
      cy.get("#results").contains(`Name: ${formData.name}`);
    });
    it('should display correct Email in results', () => {
      cy.get("#results").contains(`Email: ${formData.email}`);
    });
    it('should display correct Message in results', () => {
      cy.get("#results").contains(`Message: ${formData.message}`);
    });
  });
});