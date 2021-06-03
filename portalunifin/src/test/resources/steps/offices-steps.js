Given(/^we go to the home page$/, function() {
  browser.get("https://www.unifin.com.mx/");
  browser.configure().window().maximize();
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(5, timeUnits.SECONDS);
});

Given(/^we go to "([^"]*)" option$/, function(arg1) {
  $("#oficinas").scrollIntoView();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  //$("#oficinas > div > div").scrollIntoView();
  $(":root").waitTime(2, timeUnits.SECONDS);
});

Given(/^we select the office on combobox$/, function() {
  $("#UH-66").click();
  $("#UH-67").click();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Then(/^we select the botton "([^"]*)"$/, function(arg1) {
  $("#UH-18").click();
  browser.getCurrentUrl();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});