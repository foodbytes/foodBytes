const assert = require('cucumber-assert')
const Url = require('url')
const extend = require('xtend')

const config = require('../support/config')

module.exports = function () {

  this.Given(/^I am viewing the home page$/, () => {
    browser.url(Url.format(extend(config.proxy, { pathname: '/' })))
  })

  this.When('I click on the "$string" tab', (className) => {
    browser.waitForExist(`.nav.${className}`)
    browser.click(`.nav.${className}`)
  })

  this.Then(/^I am taken to the Recipes view$/, () => {
    browser.url(Url.format(extend(config.proxy, { pathname: '/recipes' })))
  })

  this.Then(/^I see the header "([^"]*)"$/, (text) => {
    browser.waitForExist("h1")
    var actualText = browser.getText('h1')
    expect(actualText).toEqual(text)
  });

  this.Given(/^I am viewing the recipes page$/, () => {
    browser.url(Url.format(extend(config.proxy, { pathname: '/recipes' })))
  })

  this.Then(/^I am taken to the Home view$/, () => {
    browser.url(Url.format(extend(config.proxy, { pathname: '/' })))
  })

}
