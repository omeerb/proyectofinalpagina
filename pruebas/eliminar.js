
const { Builder, By, until } = require('selenium-webdriver');

async function testEliminarProductoDelCarrito() {
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get('file:///C:/Users/Omer/Desktop/proyectofinalpagina/index.html');

        await driver.wait(until.elementLocated(By.id('cart-count')), 5000);

      
        const cartCountBefore = await driver.findElement(By.id('cart-count')).getText();
        if (cartCountBefore !== '0') {
            console.error('El carrito no está vacío al iniciar la prueba');
            return;
        }

        
        const addToCartBtn = await driver.findElement(By.css('.add-to-cart-btn'));
        await addToCartBtn.click();
        await driver.sleep(1000);

        
        const alert = await driver.switchTo().alert();
        await alert.accept();

        
        const cartBtn = await driver.findElement(By.id('cart-btn'));
        await cartBtn.click();
        await driver.sleep(1000);

        
        const removeFromCartBtn = await driver.findElement(By.css('.remove-from-cart-btn'));
        await removeFromCartBtn.click();
        await driver.sleep(1000);

       
        const cartCountAfterRemove = await driver.findElement(By.id('cart-count')).getText();
        if (cartCountAfterRemove !== '0') {
            console.error('El producto no se eliminó correctamente del carrito');
            return;
        }

        console.log('La prueba pasó: Se eliminó un producto del carrito correctamente');
    } finally {
        await driver.quit();
    }
}

testEliminarProductoDelCarrito();
