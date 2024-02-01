import HomePage from "../pages/HomePage";
import {ClientFunction, Selector} from "testcafe";

fixture`Home tests`
    .page('https://demo.nopcommerce.com/')

const getPageUrl = ClientFunction(()=> window.location.href)

test('The user can filter products by search box', async t => {
    await HomePage.setSearchBox('Nikon')
    await HomePage.clickSearch()
    await t.expect(getPageUrl()).contains('example.com');

})

test.only('Change currency in Euro', async t => {
    await HomePage.changeCurrency('Euro')
    await t.expect(Selector('select').innerText).contains('Euro')
})
