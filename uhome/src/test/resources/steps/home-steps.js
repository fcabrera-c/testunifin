Given(/^we are at home page$/, function() {
  browser.get("https://www.unifin.com.mx/");
  browser.configure().window().maximize();
  var timeUnits = require("minium/timeunits");
  $(":root").waitTime(5, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
});

Given(/^we validate all the sections of home by scrolling$/, function() {
  $("#banner1 > div").scrollIntoView();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#soluciones > div > div.row.mt-5.px-lg-5 > div:nth-child(1)").scrollIntoView();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(2, timeUnits.SECONDS);
  //$("#soluciones > div > div.row.mt-5.px-lg-5 > div:nth-child(5)").scrollIntoView();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#nosotros > div > div").scrollIntoView();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#banner2").scrollIntoView();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#oficinas > div > div").scrollIntoView();
  //scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(2, timeUnits.SECONDS);
});

Given(/^we select the menu options$/, function() {
  $("#navbarResponsive > ul > li:nth-child(1)").click();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#navbarResponsive > ul > li:nth-child(1)").click();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#UM-10").click();
  $(":root").waitTime(2, timeUnits.SECONDS);
  $("#UM-10").click();
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  $(":root").waitTime(2, timeUnits.SECONDS);
});

Given(/^we select "([^"]*)" option on Acelerador Unifin menu$/, function(arg1) {
  $("#UM-17").click();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#navbarResponsive > ul > li.nav-item.dropdown.show > div").moveTo();
  $(":root").waitTime(1, timeUnits.SECONDS);
  $("#UM-18").click();
});
Then(/^we see the login page$/, function() {
  $(":root").waitTime(3, timeUnits.SECONDS);
  browser.getCurrentUrl();
  $(":root").waitTime(2, timeUnits.SECONDS);
  scenario.embed(browser.screenshot().asBytes(), "image/png");
  //$(expect("body > div > header > div > div")).to.exist();
});
