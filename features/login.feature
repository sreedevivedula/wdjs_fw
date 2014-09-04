Feature: Login test cases
@simple1
  Scenario: Simple login test case
    Given I m on login page
    When I enter login credentials
    Then I should be able to see home page

@table1
  Scenario Outline: Simple login test case with outline
    Given I m on login page
    When I enter login credentials as "<username>" and "<password>"
    Then I should be able to see home page
    Examples:
    | username | password |
    | mifos | password |

@hook1
  Scenario: Simple login test case with parameters
    When I enter login credentials as "mifos" and "password"
    Then I should be able to see home page

@negative1
  Scenario: Negative test for login
    When I enter Invalid credentials as "mifos" and "password1"
    Then I should see Invalid Login Error


