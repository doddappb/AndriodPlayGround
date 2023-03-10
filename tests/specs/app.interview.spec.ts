import TabBar from '../screenobjects/components/TabBar';
import LoginScreen from '../screenobjects/LoginScreen';





describe('WebdriverIO and Appium, when interacting with a login form and home default selection,', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
        
       
    });

    it('Validate the default selection of the tab',async ()=>{
        await TabBar.validateTabIsFoused()
        await expect(await TabBar.validateTabIsFoused()).toEqual(true)
        
    })

    it('Validate that form tab is available for selection and is clickable',async ()=>{
        await TabBar.validateFormTabAvailability()
        await expect(await TabBar.validateIsFormTabClickable()).toEqual("true")
    })

    it('Validate the color change on the selection of the form tab',async ()=>{
        await TabBar.openForms()
        //this funtionality can't be tested for native app but this can be done using image comparison service
    })


    it('Validate the Input behaviour is working as intended', async () => {
        await TabBar.openLogin()
        await LoginScreen.waitForIsShown(true);
        await LoginScreen.setUserName({ username: 'test@webdriver.io' });
        await LoginScreen.setPassword({ password: 'Test1234!' });

        await expect(await $('~input-email').getText()).toEqual('test@webdriver.io')

    })

    

})