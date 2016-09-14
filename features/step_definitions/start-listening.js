const assert = require('cucumber-assert')
const Url = require('url')
const extend = require('xtend')

const config = require('../support/config')

module.exports = function () {

  this.Given(/^I am viewing the recipe page$/, () => {
    browser.url(Url.format(extend(config.proxy, { pathname: '/recipe/0' })))
  })

  this.When(/^I click on the 'Next' button$/, () => {
    browser.waitForExist('#next#=Next', 3000)

  })

  this.Then(/^CC reads the first step$/, () => {
    browser.waitForExist("listening_green")
  })
}
