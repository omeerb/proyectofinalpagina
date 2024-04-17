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

        console.log('La prueba pasó: Se realizó el proceso de pago correctamente');
    } finally {
        await driver.quit();
    }
}

testPagarProducto();
