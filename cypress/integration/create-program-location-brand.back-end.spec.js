/// <reference types="Cypress" />

describe('Create Program, Location and Brand', () => {

  Cypress.config('baseUrl', 'https://api.fidel.uk/v1');

  var defaultHeaders = {
    "content-type": "application/json",
    "fidel-key": "sk_test_8a830a00-924b-4980-ab21-8945aa1d80ff",
  }
  var programName = "Program Y";

  it('Create Program', () => {
    var bodyData = {
      "name": programName,
      "icon": ":avocado:",
      "iconBackground": "#BADA55",
      "metadata": {
        "customKey1": "customValue1",
        "customKey2": "customValue2"
      }
    }

    cy.request({
      method: "POST",
      url: "/programs",
      headers: defaultHeaders,
      body: bodyData
    }).then(response => {
      expect(response.status).to.equal(201);
      expect(response.body.items[0].name).to.equal(programName);
    })
  });

  it('Create Brand', () => {
    var brandName = "Brand " + Math.floor(Date.now() / 1000);
    var bodyData = {
      "name": brandName,
      "websiteURL": "https://example.com",
      "logoURL": "https://example.com/logo.png",
      "metadata": {
        "customKey1": "customValue1",
        "customKey2": "customValue2"
      }
    }

    cy.request({
      method: "POST",
      url: "/brands",
      headers: defaultHeaders,
      body: bodyData
    }).then(response => {
      expect(response.status).to.equal(201);
      expect(response.body.items[0].name).to.equal(brandName);
    })
  });
  
  it('Create Location', () => {
    var bodyData = {
      "address": "2 Soho Square",
      "brandId": "f1377251-2a05-4e44-8475-467dcc9e8490",
      "city": "London",
      "countryCode": "GBR",
      "postcode": "W1D 3PX",
      "metadata": {
        "customKey1": "customValue1",
        "customKey2": "customValue2"
      },
      "searchBy": {
        "merchantIds": {
          "visa": ["1234567", "7654321"],
          "mastercard": ["1234567", "7654321"]
        }
      }
    }

    cy.request({
      method: "POST",
      url: "/programs/613be0ca-f172-47b7-96b5-47cbf393647c/locations",
      headers: defaultHeaders,
      body: bodyData
    }).then(response => {
      expect(response.status).to.equal(201);
      expect(response.body.items[0].countryCode).to.equal("GBR");
    })
  });
});