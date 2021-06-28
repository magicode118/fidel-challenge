/// <reference types="Cypress" />
import { ParseFloatDecimal } from '../support/helpers.js';

describe('Verify Item Price Matches Cart Price', () => {
  it('Browse to women summer dresses', () => {
    cy.visit(Cypress.env('baseUrlFrontEnd')+"?id_category=11&controller=category");
  });

  it('Set items to list view', ()=> {
    cy.get('.icon-th-list').click();
  });

  it('Add two items to shopping cart', ()=> {

    // Not working on 1st click (added 2nd click)
    // Tried waiting for 'enabled' button status but issue persisted
    cy.get('.ajax_add_to_cart_button').eq(0).click();
    cy.get('.ajax_add_to_cart_button').eq(0).click();

    cy.get('.continue > span').click();
    cy.get('.ajax_add_to_cart_button').eq(1).click();
    cy.get('#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a').click();
  });

  it('Verify checkout pricings match with item prices', ()=> {
    cy.get('.price').eq(0).invoke('text').then((txt) => {
      var firstItemCost = ParseFloatDecimal(txt);
      
      cy.get('.price').eq(1).invoke('text').then((txt) => {
        var secondItemCost = ParseFloatDecimal(txt);        
        var totalItemsCost = firstItemCost + secondItemCost;
        totalItemsCost = parseFloat(totalItemsCost.toFixed(2));

        cy.get('#total_product').invoke('text').then((txt) => {
          var totalItemsCostOnSite = ParseFloatDecimal(txt);
          expect(totalItemsCostOnSite).to.eq(totalItemsCost);

          cy.get('#total_shipping').invoke('text').then((txt) => {
            var totalShippingCost = ParseFloatDecimal(txt);
            var totalCost = totalItemsCostOnSite + totalShippingCost;

            cy.get('#total_price').invoke('text').then((txt) => {
              var totalCostOnSite = ParseFloatDecimal(txt);
              expect(totalCostOnSite).to.eq(totalCost);
            });
          });
        })
      });
    });
  });
});