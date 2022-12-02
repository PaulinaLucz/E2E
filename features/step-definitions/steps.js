const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("Home page is open", async () => {
   await browser.url("https://www.newegg.com");
});

Given("if a promotional banner appears, close it", async () => {
    try {
       const ad = await $('#modal-Website > div > div > img');
       const adClose = await $(`#modal-Website > div > div > button`);
       await adClose.click();
    } catch (error) {
       console.log('The promotional banner is disabled');
    }
 });
 
//scenario search

When("Enters the word {string} into the search engine", async (word) => {
    await $('input[type=search]').setValue(word);
 });
 
 When("clicks the search", async () => {
    await $('//*[@class="ico ico-search"]').click();
 });
 
 Then("the search is initiated, at least one search result appears", async () => {
    const results = await $('div.list-wrap > div:nth-child(3)');
    await expect(results).toHaveChildren({ gte: 1 });
 });
 
 //scenario Best Deals
 
 When("Opens 'Today's Best Deals' tab", async () => {
    const bestDeal = await $('//*[@id="trendingBanner_720202"]/span');
    await bestDeal.click();
 });
 
 When("clicks on the online store logo", async () => {
    const logo = await $('//*[@class="header2021-logo-img"]');
    await expect(logo).toBeExisting();
    await logo.click();
 });
 
 Then("the main page", async () => {
    await browser.url(`https://www.newegg.com/`)
 });

