const assert = require('cucumber-assert')
const Url = require('url')
const extend = require('xtend')

const config = require('../support/config')

module.exports = function () {



  this.When('I click on the "$string" link', (text) => {
    browser.waitForExist(`h3=${text}`, 5000)
    browser.click(`h3=${text}`)
  })

  // this.Then(/^I am taken to the Recipe view$/, () => {
  //   browser.url(Url.format(extend(config.proxy, { pathname: '/recipes/0' })))
  // })

  this.Then(/^I see the sub-header "([^"]*)"$/, (text) => {
    // console.log(text, expect);
    browser.waitForExist(`h3=${text}`, 5000)
  });
}
