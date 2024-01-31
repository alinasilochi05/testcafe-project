import {Selector, t} from "testcafe";

class RegisterPage{
    private readonly genderRadioButton: Selector
    private readonly firstName: Selector
    private readonly lastName: Selector
    private readonly email: Selector
    private readonly password: Selector
    private readonly confirmPassword: Selector
    private readonly registerButton: Selector

        constructor(){
        this.genderRadioButton = Selector("#gender-male")
        this.firstName = Selector("#FirstName")
        this.lastName = Selector("#LastName")
        this.email = Selector("#Email")
        this.password = Selector("#Password")
        this.confirmPassword = Selector("#ConfirmPassword")
        this.registerButton = Selector("#register-button")
        this.registerButton = Selector("#register-button")
    }

    async clickGender(){
        await t.click(this.genderRadioButton)
    }
    async setFirstName(firstName: string){
        await t.typeText(this.firstName, firstName)
    }
    async setLastName(lastName: string){
        await t.typeText(this.lastName, lastName)
    }
    async setEmail(email: string){
        await t.typeText(this.email, email)
    }
    async setPassword(password: string){
        await t.typeText(this.password, password)
    }
    async setConfirmPassword(confirmPassword: string){
        await t.typeText(this.confirmPassword(), confirmPassword)
    }
    async clickRegister(){
        await t.click(this.registerButton)
    }
}
export default new RegisterPage()