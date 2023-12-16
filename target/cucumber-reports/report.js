$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/AmazonFeature/amazon.feature");
formatter.feature({
  "name": "Amazon Homepage WebTest",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Checking Searchbar with multiple options",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@One"
    }
  ]
});
formatter.step({
  "name": "User is in amazon Homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on the amazon search bar",
  "keyword": "When "
});
formatter.step({
  "name": "User will give \"\u003cMValue\u003e\" value in the search field",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "MValue"
      ]
    },
    {
      "cells": [
        "Shirt"
      ]
    },
    {
      "cells": [
        "Pant"
      ]
    },
    {
      "cells": [
        "shoes"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Checking Searchbar with multiple options",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@One"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in amazon Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.User_is_in_amazon_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the amazon search bar",
  "keyword": "When "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.User_clicks_on_the_amazon_search_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will give \"Shirt\" value in the search field",
  "keyword": "And "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.user_will_give_value_in_the_search_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking Searchbar with multiple options",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@One"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in amazon Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.User_is_in_amazon_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the amazon search bar",
  "keyword": "When "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.User_clicks_on_the_amazon_search_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will give \"Pant\" value in the search field",
  "keyword": "And "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.user_will_give_value_in_the_search_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Checking Searchbar with multiple options",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@One"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in amazon Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.User_is_in_amazon_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the amazon search bar",
  "keyword": "When "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.User_clicks_on_the_amazon_search_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User will give \"shoes\" value in the search field",
  "keyword": "And "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.user_will_give_value_in_the_search_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});