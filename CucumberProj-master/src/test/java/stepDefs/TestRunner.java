package stepDefs;

import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
features = "src/test/java/features",		
//tags = {"@test1"},
glue = {"stepDefs"},
)

public class TestRunner {
}
