import RegisterPage from "../pages/RegisterPage";
import dataConfig from "../../utils/data.json"
import {Selector} from "testcafe";


fixture `Register Fixture`
     .page("https://demo.nopcommerce.com/register?returnUrl=%2F")

test("The user can register with correct data",  async t =>{
    console.log(dataConfig)
    await RegisterPage.clickGender()
    await RegisterPage.setFirstName(dataConfig.firstName)
    await RegisterPage.setLastName(dataConfig.lastName)
    await RegisterPage.setEmail(dataConfig.email)
    await RegisterPage.setPassword(dataConfig.password)
    await RegisterPage.setConfirmPassword(dataConfig.confirmPassword)
    await RegisterPage.clickRegister()
    await t.expect(Selector('title').innerText).contains('Register')
})