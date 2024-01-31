import HomePage from "../pages/HomePage";
import {Selector} from "testcafe";

fixture`Home tests`
    .page('https://demo.nopcommerce.com/')

test('The user can filter products by search box', async t => {
    await HomePage.setSearchBox('Nikon')
    await HomePage.clickSearch()
    await t.expect(Selector('title').innerText).contains('nopCommerce demo store')

})

test.only('Change currency in Euro', async t => {
    await HomePage.changeCurrency('Euro')
    await t.expect(Selector('select').innerText).contains('Euro')
})
