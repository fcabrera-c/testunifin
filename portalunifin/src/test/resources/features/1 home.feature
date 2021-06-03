# language: en
# ------------------------------------------------------------------------------
Feature: Validate home and login page

  Scenario: Access of modules sections and then login page
    Given we are at home page
    And we validate all the sections of home by scrolling
    And we select the menu options
    And we select "Ya soy cliente" option on Acelerador Unifin menu
    Then we see the login page
