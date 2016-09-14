Feature: Start Listening

  @watch
  Scenario: CC starts listening when I click the button
    Given I am viewing the recipe page
    When I click on the image
    Then the image starts to pulse
