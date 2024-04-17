const { Builder, By, until } = require('selenium-webdriver');

async function testPagarProducto() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('file:///C:/Users/Omer/Desktop/proyectofinalpagina/index.html');

        await driver.wait(until.elementLocated(By.id('cart-count')), 5000);

        
        const addToCartBtn = await driver.findElement(By.css('.add-to-cart-btn'));
        await addToCartBtn.click();
        await driver.sleep(2000);

        
        await driver.wait(until.alertIsPresent(), 5000);
        const alert = await driver.switchTo().alert();
        await alert.accept();
        await driver.sleep(1000);

        
        const cartBtn = await driver.findElement(By.id('cart-btn'));
        await cartBtn.click();
        await driver.sleep(1000);

       
        const checkoutBtn = await driver.findElement(By.id('checkout-btn'));
        await checkoutBtn.click();
        await driver.sleep(1000);

       
        const confirmAlert = await driver.switchTo().alert();
        await confirmAlert.accept();
        await driver.sleep(1000);

        
        await driver.wait(until.alertIsPresent(), 5000);
        const graciasAlert = await driver.switchTo().alert();
        const graciasAlertText = await graciasAlert.getText();
        if (!graciasAlertText.includes('Gracias por tu compra')) {
            console.error('La alerta "Gracias por tu compra" no apareció');
            return;
        }

        console.log('La prueba pasó: Se realizó el proceso de pago correctamente');
    } finally {
        await driver.quit();
    }
}

testPagarProducto();
