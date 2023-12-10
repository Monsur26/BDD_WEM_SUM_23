$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/AmazonFeature/amazon.feature");
formatter.feature({
  "name": "Amazon Homepage WebTest",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Changing Amazon Webpage Language",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Important"
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
  "name": "User hovers over the language dropdown",
  "keyword": "When "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.user_hovers_over_the_language_dropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the ES radio button",
  "keyword": "And "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.user_clicks_on_the_ES_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the language changes to Spanish",
  "keyword": "Then "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.the_language_changes_to_Spanish()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});