
import TabBar from '../screenobjects/components/TabBar';
import FormPage from '../pageobjects/form.page'
let { expect } = require('chai');



describe('WebdriverIO and Appium, when interacting with a picker in form tab,', () => {

    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openForms()

    });


    it('Validate that picker element is working and it has 3 options to choose from.', async () => {

        expect(await FormPage.getValidPickerOptions()).equals(3);
    })
    it('Validate that all options from picker elements are visible within the screen', async () => {
        expect(await FormPage.verifyPickerElementsWithinScreen()); // Verified using screen resolution and bounds values of every element
        await FormPage.verifyPickerFunctionality(); // Verified drop down functionality
    })
    it('Validate that Inactive button is not interactable', async () => {
        await FormPage.clickPickerDropDown()
        await FormPage.clickInactiveButton();
        expect(await FormPage.verifyIsPopup()).to.be.false;
    })
    it('Validate the toggle control of the switch', async () => {
        expect(await FormPage.getSwitchToggleText).contains(await FormPage.getSwitchToggleStatus);
        await FormPage.clickSwitchToggle();
        expect(await FormPage.getSwitchToggleText).contains(await FormPage.getSwitchToggleStatus);
    })
    it('Validate that android native alerts are functional', async () => {
        //Ok button
        await FormPage.clickActiveButton();

        expect(await FormPage.verifyIsPopup()).to.be.false;

    })
    it('Validate that keyboard is available to provide input in the text field', async () => {
        expect(await FormPage.openKeyboard()).not.equals(await FormPage.hideKeyboard());
    })


})