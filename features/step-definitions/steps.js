const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("Home page is open", async () => {
   await browser.url("https://www.newegg.com");
});

Given("if a promotional banner appears, close it", async () => {
    try {
       const ad = await $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > div > a > img');
       const adClose = await $('#modal-Website > div.modal-dialog.modal-dialog-centered > div > button');
       await adClose.click();
       await expect(ad).not.toBeDisplayed();
    } catch (error) {
       console.log('The promotional banner is disabled');
    }
 });

//scenario search

When("Enters the word {string} into the search engine", async (word) => {
    await $('input[type=search]').setValue(word);
 });
 
 When("clicks the search", async () => {
    await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[5]/form/div/div[2]/button').click();
 });
 
 Then("the search is initiated, at least one search result appears", async () => {
    const results = await $('//*[@id="app"]/div[3]/section/div/div/div[2]/div/div/div/div[2]/div[1]');
    await expect(results).toHaveChildren({ gte: 1 });
 });
 
 //scenario Best Deals
 
 When("Opens 'Today's Best Deals' tab", async () => {
    const bestDeal = await $('//*[@id="trendingBanner_720202"]/span');
    await bestDeal.click();
 });
 
 When("clicks on the online store logo", async () => {
    const logo = await $('//*[@id="app"]/header/div[1]/div[1]/div[1]/div[2]/a/img');
    await expect(logo).toBeExisting();
    await logo.click();
 });
 
 Then("the main page", async () => {
    await browser.url(`https://www.newegg.com/`)
    

 });

