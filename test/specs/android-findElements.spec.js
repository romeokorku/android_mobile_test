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

    it.only('Find multiple elements',async () =>{
        const expectedList = [
            'API Demos',"Access'ibility",'Accessibility','Animation','App','Content','Graphics',
        'Media','NFC','OS','Preference']

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
    


})