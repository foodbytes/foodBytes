const assert = require('cucumber-assert')
const Url = require('url')
const extend = require('xtend')

const config = require('../support/config')

module.exports = function () {

  this.Given(/^I am viewing the recipe page$/, () => {
    browser.url(Url.format(extend(config.proxy, { pathname: '/recipe/0' })))
  })

  this.When('I click on the image', (className) => {
    browser.waitForExist('.notListening')
    browser.click('.listening')
  })

  this.Then(/^the image starts to pulse$/, () => {
    browser.waitForExist('.listening')
  })
}
