$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/AmazonFeature/amazon.feature");
formatter.feature({
  "name": "Amazon Homepage WebTest",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Checking SearchBar Functionality",
  "description": "",
  "keyword": "Scenario"
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
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat amazon.AmazonHomepage.clickONSearchBar(AmazonHomepage.java:16)\r\n\tat amazonstepdefinition.StepDefinition.User_clicks_on_the_amazon_search_bar(StepDefinition.java:43)\r\n\tat ✽.User clicks on the amazon search bar(file:///C:/Users/Monsu/BDD_WEM_Sum_23/src/main/java/AmazonFeature/amazon.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User inputs \u0027Text\u0027 in the search field",
  "keyword": "And "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.User_inputs_Text_in_the_search_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User hits Enter",
  "keyword": "And "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.User_hits_Enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User goes to the search results page",
  "keyword": "Then "
});
formatter.match({
  "location": "amazonstepdefinition.StepDefinition.User_goes_to_the_search_results_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat common.WebAPI.captureScreenshot(WebAPI.java:234)\r\n\tat amazonstepdefinition.StepDefinition.closeBrowser(StepDefinition.java:27)\r\n",
  "status": "failed"
});
});