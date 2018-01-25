describe("Laptops/Phones", function() {
  it("Should list single laptop by id", function() {
    cy.visit("http://galvanize-tower-front-end.herokuapp.com/");
    cy.get("#laptopListId").type("2");
    cy.get("#listLaptop button").click();
    cy
      .get(
        "div.topContainer:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(1)"
      )
      .should("have.text", "ID#: 2");
  });
  it("Should show all laptops", function() {
    cy
      .get(".listAllButton")
      .eq(0)
      .click();
    cy
      .get(
        "div.topContainer:nth-child(2) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(1)"
      )
      .should("have.text", "ID#: 1");
  });
  it("Should list single phone by id", function() {
    cy.visit("http://galvanize-tower-front-end.herokuapp.com/");
    cy.get("#phoneListId").type("3");
    cy.get("#listPhone button").click();
    cy
      .get(
        "div.topContainer:nth-child(7) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(1)"
      )
      .should("have.text", "ID#: 3");
  });
  it("Should show all phone", function() {
    cy
      .get(".listAllButton")
      .eq(1)
      .click();
    cy
      .get(
        "div.topContainer:nth-child(7) > div:nth-child(1) > div:nth-child(1) > h3:nth-child(1)"
      )
      .should("have.text", "ID#: 1");
  });
});
