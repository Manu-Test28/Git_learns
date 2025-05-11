package stepDefs;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;
import io.cucumber.java.en.Then;
import org.junit.runner.RunWith;

public class StepDef {
	
	public static WebDriver driver;
	
	@Before
    
    public void Setup() {
    System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
    driver = new ChromeDriver();
    driver.get("https://www.amazon.com/");
    driver.manage().window().maximize();
    driver.manage().timeouts().implicitlyWait(5000, TimeUnit.MILLISECONDS);
    }
	
	@Given("I have opened an URL in browser")
	public void i_have_opened_an_URL_in_browser() throws InterruptedException {
	    // Write code here that turns the phrase above into concrete actions
	    driver.get("https://www.amazon.com");
	};
	
	
	@Then("I should land on the home page")
	public void i_should_land_on_the_home_page () throws InterruptedException {
	// Write code here that turns the phrase above into concrete actions
	   System.out.println("This is the page");
	};
	
	@After
	public void TearDown() {
		
		driver.close();
		
	}
	
}
