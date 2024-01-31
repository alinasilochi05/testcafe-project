import {Selector, t} from "testcafe"

class HomePage {

    private readonly logo: Selector
    private readonly searchBox: Selector
    private readonly searchButton: Selector
    private readonly currencyDropdown: Selector
    public selectedDropdownOption: Selector

    constructor() {
        this.logo = Selector(".header-logo")
        this.searchBox = Selector("#small-searchterms")
        this.searchButton = Selector(".button-1 search-box-button")
        this.currencyDropdown = Selector("#customerCurrency")
        this.selectedDropdownOption = Selector(this.currencyDropdown.find('option'))

    }

    async clickLogo() {
        await t.click(this.logo)
    }

    async setSearchBox(text: string) {
        await t.typeText(this.searchBox, text)
    }

    async clickSearch() {
        await t.click(this.searchBox)
    }

    async changeCurrency(currency: string) {
        await t.click(this.currencyDropdown)
            .click(this.selectedDropdownOption.withText(currency))
    }
}

export default new HomePage()