


import java.util.regex.Pattern;
import java.util.concurrent.TimeUnit;

import org.junit.*;

import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import java.io.IOException;

public class pageOpenSearchSHow  {
  private WebDriver driver;
  private String baseUrl;
  private boolean acceptNextAlert = true;
  private StringBuffer verificationErrors = new StringBuffer();

  @Before
  public void setUp() throws Exception {
    driver = new FirefoxDriver();
    baseUrl = "https://www.usenet-crawler.com/";
    driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
  }
//  public void lookInsideTextFile (String title) throws Exception {
//	  
// };
	  

	  
  
  @Test
  public void testOpenPageChangeToTVSearch() throws Exception {
    driver.get(baseUrl + "/");
    new Select(driver.findElement(By.id("headcat"))).selectByVisibleText("TV");
    driver.findElement(By.id("headsearch")).clear();
    driver.findElement(By.id("headsearch")).sendKeys("suits");
    driver.findElement(By.id("headsearch_go")).click();
  }

}



