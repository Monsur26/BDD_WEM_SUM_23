Feature: Amazon Homepage WebTest

 Scenario: Checking SearchBar Functionality
    Given User is in amazon Homepage
    When User clicks on the amazon search bar
    And User inputs "Shirt" in the search field
    And User hits Enter
    Then  User goes to the search results page

   @Important
    Scenario: Changing Amazon Webpage Language
      Given User is in amazon Homepage
      When User hovers over the language dropdown
      And User clicks on the ES radio button
      Then the language changes to Spanish