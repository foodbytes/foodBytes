const assert = require('cucumber-assert')
const Url = require('url')
const extend = require('xtend')

const config = require('../support/config')

module.exports = function () {

  this.Given(/^I am viewing the home page$/, () => {
    browser.url(Url.format(extend(config.proxy, { pathname: '/' })))
  })

  this.When(/^I click on the Table of contents tab "([^"]*)"$/, (text) => {
    browser.waitForExist('.contents')
    browser.click('.contents')
  })

  this.Then(/^I am taken to the Table of contents view$/, () => {
    browser.url(Url.format(extend(config.proxy, { pathname: '/contents' })))
  })

  this.Then('I see a header "$string"', (text) => {
    browser.waitForExist("h1")
    var actualText = browser.getText('h1')
    expect(actualText).toEqual(text)
  })

}
