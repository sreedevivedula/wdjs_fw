Feature: Login test cases
  Scenario: Simple login test case
#    Given I m on login page
    When I enter login credentials
    Then I should be able to see home page

#  Scenario: Simple login test case with parameters
#    When I enter login credentials as "username" and "password"
#    Then I should be able to see home page

#  Scenario Outline: Simple login test case with outline
#    When I enter login credentials as "<username>" and "<password>"
#    Then I should be able to see home page
#  Examples:
#    | username | password |
#    | user1 | password1 |


