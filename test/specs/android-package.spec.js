describe('Android Native Feature Test',()=>
{
    it('Access a Package directly',async()=>{
        //access an activity
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.app.AlertDialogSamples")

        //pause to see whats happening
        await driver.pause (5000);

        //assertion
        await expect ($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Working with Dialog Boxes',async()=>{
        //click the first dialog box
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click();

        //Accept Alert bos
        await driver.acceptAlert();

        //dismiss Alert
        //await driver.dismissAlert();

        //assertion : alert box is no longer visible

        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    })

    it('vertical scrolling',async()=>{
       await $('~App').click()
       await $('~Activity').click()

       //scroll to the end (not stable if element gets moved)
       await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
       await $('~Secure Surfaces').click()

       //assertion
       await expect($('~Secure Dialog')).toExist();
       
       
    })
        //always use this method instead for vertical scrolling since its stable and efficient.
    it('vertical scrolling',async()=>{
        await $('~App').click()
        await $('~Activity').click()
 
        //scroll to the end (efficient and stable so always use this instead)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();       
 
        //assertion
        await expect($('~Secure Dialog')).toExist();
        
        
     })
    
    it("Horizontal Scrolling", async()=>{
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.Gallery1")

        //Horizontal scrolling
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')  //scroll forward

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()')    //scroll backward

        await driver.pause(3000);


    })

    it.only('Working with a date picker', async()=>{
        // access the date picker
        await driver.startActivity("io.appium.android.apis","io.appium.android.apis.view.DateWidgets1")

        //get the current date
        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]')
        const currentDate= await date.getText();

        //click on change the date button
        await $('~change the date').click();

        //scroll right to the next month
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()') 

        //select the 10th date
        await $('//*[@text="10"]').click();

        //click on ok button
        await $('//*[@resource-id="android:id/button1"]').click();

        //verify the updated date
        await expect(await date.getText()).not.toEqual(currentDate);


    })

})