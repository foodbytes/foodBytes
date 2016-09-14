Feature: View Recipes

  @watch
  Scenario: Tab takes me to Recipes view
    Given I am viewing the home page
    When I click on the "recipes" tab
    Then I am taken to the Recipes view
    Then I see the header "Recipes"
