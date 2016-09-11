Feature: View Table of contents

  @watch
  Scenario: Button takes me to Table of contents
    Given I am viewing the home page
    When I click on the "Table of contents" tab
    Then I am taken to the Table of contents view
    Then I see the header "Recipes List"
