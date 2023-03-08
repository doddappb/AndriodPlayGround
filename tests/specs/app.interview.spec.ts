import TabBar from '../screenobjects/components/TabBar';
import LoginScreen from '../screenobjects/LoginScreen';
// import NativeAlert from '../screenobjects/components/NativeAlert';

describe('WebdriverIO and Appium, when interacting with a login form,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

    it('Validate the default selection of the tab',async ()=>{
        await TabBar.validateTabIsFoused()
        
    })

    it('Validate that form tab is available for selection and is clickable',async ()=>{
        await TabBar.validateFormTabAvailability()
        await expect(await TabBar.validateIsFormTabClickable()).toEqual("true")
    })

    it('Validate the Input behaviour is working as intended', async () => {
        await LoginScreen.setUserName({ username: 'test@webdriver.io' });
        await LoginScreen.setPassword({ password: 'Test1234!' });

        await expect(await $('~input-email').getText()).toEqual('test@webdriver.io')

    })




})