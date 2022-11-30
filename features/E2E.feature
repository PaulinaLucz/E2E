@wip

Feature: Bootcamp E2E

   Background:
      Given Home page is open
      And if a promotional banner appears, close it

   Scenario: Search bar
      When Enters the word "Windows" into the search engine
      And clicks the search
      Then the search is initiated, at least one search result appears

   Scenario: Online store logo button
      When Opens 'Today's Best Deals' tab
      And clicks on the online store logo
      Then the main page