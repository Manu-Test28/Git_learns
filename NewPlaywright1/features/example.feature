Feature: Example page

  Scenario: Visit Example.com
    Given I launch the browser
    When I go to "https://example.com"
    Then the page title should be "Example Domain"
