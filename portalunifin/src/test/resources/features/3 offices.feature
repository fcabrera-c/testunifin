Feature: Validate the offices address

  Scenario: Go to Nuestras Oficinas section
    Given we go to the home page
    And we go to "Nuestras Oficinas" option
    And we select the office on combobox
    Then we select the botton "VER MAPA"
