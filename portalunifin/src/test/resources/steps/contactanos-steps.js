Given(/^we access of the home page$/, function() {
  browser.get("https://www.unifin.com.mx/");
  browser.configure().window().maximize();
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(3, timeUnits.SECONDS);
});

Given(/^we select the combo box "([^"]*)" option$/, function(arg1) {
  $("#header > div > div > div").scrollIntoView();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#UH-3").click();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(1, timeUnits.SECONDS);
});

Given(/^we select the "([^"]*)" option$/, function(arg1) {
  $("#header > div > div > div > div > div > div > div.side-option.menos.dropdown-item.option2.text-right.side-contacto-click").moveTo();
  //$("#header > div > div > div > div > div > div > div.side-option.menos.dropdown-item.option1.text-right.side-contacto-click").click();
  $("#header > div > div > div > div > div > div > div.side-option.menos.dropdown-item.option2.text-right.side-contacto-click").click();
  
});

Given(/^we fill the fields of the form Contactanos$/, function() {
  $(":root").waitTime(2, timeUnits.SECONDS);
  //$("#nombre").waitForExistence();
  $("#nombre").sendKeys("Juan");
  $("#formulario > div > input:nth-child(8)").sendKeys("Perez");
  $("#formulario > div > input:nth-child(9)").sendKeys("Martinez");
  $("#formulario > div > input:nth-child(10)").sendKeys("5590807060");
  $("#formulario > div > input:nth-child(11)").sendKeys("juanpm@gmail.com");
  $("#formulario > div > select:nth-child(12)").click();
  $("#pmb").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#formulario > div > input:nth-child(13)").sendKeys("test sa de cv");
  $("#ingreso").click();
  $("#ingreso > option:nth-child(3)").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#exampleCheck1").click();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Then(/^close the form$/, function() {
  $("body > div.wrapper > div.side-contacto.p-md-5 > div > div").scrollIntoView();
  $("body > div.wrapper > div.side-contacto.p-md-5 > div > div > span").click();
});