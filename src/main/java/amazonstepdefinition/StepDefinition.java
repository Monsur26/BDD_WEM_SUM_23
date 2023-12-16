package amazonstepdefinition;

import amazon.AmazonHomepage;
import common.WebAPI;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class StepDefinition extends WebAPI {
    @Before
    public void envAndDriverSetup() throws IOException {
        setUp(false,
                "browserstack",
                "Windows", "10",
                "chrome", "119",
                "https://www.amazon.com/");
    }

    @After
    public void closeBrowser(Scenario scenario) throws IOException {
        if (scenario.isFailed()) {
            captureScreenshot(scenario, driver, scenario.getName());
        }
        cleanUp();
    }

    static AmazonHomepage homepage;

    public static void getInitElements() {
        homepage = PageFactory.initElements(driver
                , amazon.AmazonHomepage.class);
    }

    @Given("User is in amazon Homepage")
    public void User_is_in_amazon_Homepage() {
        getInitElements();
    }

    @When("User clicks on the amazon search bar")
    public void User_clicks_on_the_amazon_search_bar() {
        getInitElements();
        homepage.clickONSearchBar();
    }

    @When("User inputs {string} in the search field")
    public void User_inputs_Input_in_the_search_field(String input) {
        getInitElements();
        homepage.inputValues(input);
    }

    @When("User hits Enter")
    public void User_hits_Enter() {
        getInitElements();
        homepage.submitAfterInput();
    }

    @Then("User goes to the search results page")
    public void User_goes_to_the_search_results_page() {
        getInitElements();
        String expected = "Amazon.com : Shirt";
        Assert.assertEquals("assertion failed", expected, driver.getTitle());
    }

    @When("User hovers over the language dropdown")
    public void user_hovers_over_the_language_dropdown() {
        getInitElements();
        homepage.mouseHoverTheLanguageEN();
    }

    @When("User clicks on the ES radio button")
    public void user_clicks_on_the_ES_radio_button() {
        getInitElements();
        homepage.clickOnTheESRadioButton();
    }

    @Then("the language changes to Spanish")
    public void the_language_changes_to_Spanish() {
        getInitElements();
        homepage.mouseHoverTheLanguageES();
    }

    @When("User will give {string} value in the search field")
    public void user_will_give_value_in_the_search_field(String string) {
        getInitElements();
        homepage.inputValues(string);
    }

}
