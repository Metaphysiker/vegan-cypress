/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('basic-check', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://vegan.ch/')
  })

  it('check if blog-posts look normal', () => {

    cy.request('https://vegan.ch/wp-json/wp/v2/posts').then(
      (response) => {
        var items = response.body
        //var items = response.body.items

        for (var index in items) {
          cy.visit(items[index].link)
          cy.change_viewports(1000)



        }
      }
    )

  })

  it('check if pages look normal', () => {

    cy.request('https://vegan.ch/wp-json/menus/v1/menus/cypress-test').then(
      (response) => {
        var items = response.body.items

        for (var index in items) {
          cy.visit(items[index].url)
          cy.change_viewports(1000)

          for (var index2 in items[index].child_items) {
            cy.log(items[index].child_items[index2].url)
            if(items[index].child_items[index2].url.includes("https://vegan.ch/")){
              cy.visit(items[index].child_items[index2].url)
              cy.change_viewports(1000)
            }

          }


        }
      }
    )

  })




})
