Feature: Product Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  # Create a datatable to validate the Price (high to low) and Price (low to high) sort options (top-right) using a Scenario Outline
  Scenario Outline:  Validate product sort by price
  Then I will login as 'standard_user'
  Then  Sort the items by price
  Then Validate all 6 items are sorted correctly by price
  Examples:
    # TODO: extend the datatable to paramterize this test
    | sort |