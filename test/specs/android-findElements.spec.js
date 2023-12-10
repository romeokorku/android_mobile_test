describe('Android Elemets Test',()=>{
    it('Find elements by accessibility id',async () => {
        //find elemet by accessibility id
        const appOption = await $ ('~App');


        //click on element
        await appOption.click();


        //perform an assertion
        const actionBar =await $('~Action Bar');        
        await expect(actionBar).toBeExisting();

    })
    
        //find element using class name
    it('Find elelment by class name', async()=>{
        //find element by class name
        const className = await $('android.widget.TextView');

        console.log(await className.getText());
        
        // Assertion
        await expect (className).toHaveText("API Demos")
    })
    it('Find elements by Android UI Automator',async()=>{
        await $('android=new UiSelector().textContains("Alert")').click();
    })

    it('Find multiple elements',async () =>{
        const expectedList = [
            'API Demos',"Access'ibility",'Accessibility','Animation','App','Content','Graphics',
        'Media','NFC','OS','Preference','Text','Views']

        const actualList = []
        // find multiple elements
        const textList = await $$ ('android.widget.TextView');

        //Loop through them
        for (const element of textList){
            actualList.push(await element.getText());
        }

        //assert the list
        //await expect(actualList).toEqual(expectedList);
    
        })
    it.only('working with text field',async()=>{
            //access the auto complete screen
        await $('~Views').click();
        await $('~Auto Complete').click();
        await $('//*[@content-desc="1. Screen Top"]').click();

        //enter country name
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
        await textField.addValue('Canada');

        //verify the country name
        await expect(textField).toHaveText('Canada');

    })
    


})