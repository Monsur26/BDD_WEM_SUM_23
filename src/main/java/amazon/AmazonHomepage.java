package amazon;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static AmazonWebElementsHomePage.WebElements.*;

public class AmazonHomepage extends WebAPI {
    // First Section is all about webelements
    @FindBy(how = How.XPATH, using = searchBarXPath) public WebElement searchBarWebElement;
    @FindBy(how = How.XPATH, using = ENMousehoverXpath) public WebElement ENMouseHoverWebElement;
    @FindBy(how = How.XPATH, using = ESRadioButtonXpath) public WebElement ESRadioButtonWebElement;
    @FindBy(how = How.XPATH, using = ESMouseHoverXpath) public WebElement ESMouseHoverWebElement;


    // Second section is all about test steps
    public void clickONSearchBar(){searchBarWebElement.click();}
    public void inputValues(String input){searchBarWebElement.sendKeys(input);}
    public void submitAfterInput(){searchBarWebElement.submit();}

    public void mouseHoverTheLanguageEN(){mouseHover(ENMouseHoverWebElement);}
    public void clickOnTheESRadioButton(){ESRadioButtonWebElement.click();}
    public void mouseHoverTheLanguageES(){
        String expected = "ES";
        String actual = ESMouseHoverWebElement.getText();
        Assert.assertEquals("Assertion failed",expected,actual);
    }

}
