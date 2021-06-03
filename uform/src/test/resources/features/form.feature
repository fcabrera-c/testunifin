Feature: Validate the form

  Scenario: Access of portal and select an amounts opction
    Given we access of the home page
    And we select the combo box "Elige el monto que necesitas" option
    And we select the "Menos de 10 MDP" option
    And we fill the fields of the form Contactanos
    Then close the form
