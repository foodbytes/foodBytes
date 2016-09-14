Feature: View Recipe

  @watch
  Scenario: Tab takes me to a Recipe view
    Given I am viewing the recipes page
    When I click on the "Grilled cheese sandwich" link
    Then I see the sub-header "Cook time"
