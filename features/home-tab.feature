Feature: View Homepage

  @watch
  Scenario: Tab takes me to Home view
    Given I am viewing the recipes page
    When I click on the "home" tab
    Then I am taken to the Home view
    Then I see the header "Food Bytes"
